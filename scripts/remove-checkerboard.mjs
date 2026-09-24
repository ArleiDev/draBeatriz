import sharp from 'sharp';
import fs from 'fs';
import path from 'path';

const img1Path = 'C:/Users/Administrator/.gemini/antigravity/brain/2f9a957b-c21b-4024-870c-7f886b2f0a71/.user_uploaded/media_1790206940413.jpg';
const img2Path = 'C:/Users/Administrator/.gemini/antigravity/brain/2f9a957b-c21b-4024-870c-7f886b2f0a71/.user_uploaded/media_1790206940416.jpg';

async function processImage(inputPath, outputPngPath, outputStudioPath) {
  const image = sharp(inputPath);
  const { data, info } = await image.raw().toBuffer({ resolveWithObject: true });
  const { width, height, channels } = info;

  // We want to detect background pixels.
  // The background checkerboard consists of light squares (approx 255) and grey squares (approx 204 or 218).
  // A pixel is background if:
  // 1. It is neutral/achromatic (saturation is very low: max(r,g,b) - min(r,g,b) < 18)
  // 2. Its brightness is high (e.g. min(r,g,b) > 170)
  
  // Let's create an alpha mask buffer (width * height)
  // 0 = background (transparent), 255 = foreground (opaque)
  const isBgCandidate = new Uint8Array(width * height);
  for (let y = 0; y < height; y++) {
    for (let x = 0; x < width; x++) {
      const idx = (y * width + x) * channels;
      const r = data[idx];
      const g = data[idx + 1];
      const b = data[idx + 2];

      const maxVal = Math.max(r, g, b);
      const minVal = Math.min(r, g, b);
      const diff = maxVal - minVal;
      const avg = (r + g + b) / 3;

      // Checkerboard pixels are grey or white, with very little color saturation
      // Dra. Beatriz's skin has strong warm saturation (diff > 25, r > g > b)
      // Dra. Beatriz's hair and clothes are dark (avg < 150)
      // Even white eye sclera is inside the face, not connected to outer borders.
      if (diff <= 18 && minVal >= 170) {
        isBgCandidate[y * width + x] = 1;
      }
    }
  }

  // BFS / Flood fill from the 4 outer borders so we only mark the background that connects to the outside
  const visited = new Uint8Array(width * height);
  const queue = [];

  function enqueue(x, y) {
    const idx = y * width + x;
    if (idx >= 0 && idx < width * height && !visited[idx]) {
      visited[idx] = 1;
      if (isBgCandidate[idx]) {
        queue.push(idx);
      }
    }
  }

  // Add top & bottom rows
  for (let x = 0; x < width; x++) {
    enqueue(x, 0);
    enqueue(x, height - 1);
  }
  // Add left & right columns
  for (let y = 0; y < height; y++) {
    enqueue(0, y);
    enqueue(width - 1, y);
  }

  // Also any top 20 pixels anywhere in the top area
  for (let y = 0; y < 20; y++) {
    for (let x = 0; x < width; x++) {
      enqueue(x, y);
    }
  }

  let head = 0;
  while (head < queue.length) {
    const curr = queue[head++];
    const cx = curr % width;
    const cy = Math.floor(curr / width);

    // Check 4 neighbors
    const neighbors = [
      [cx + 1, cy],
      [cx - 1, cy],
      [cx, cy + 1],
      [cx, cy - 1]
    ];

    for (const [nx, ny] of neighbors) {
      if (nx >= 0 && nx < width && ny >= 0 && ny < height) {
        const nidx = ny * width + nx;
        if (!visited[nidx]) {
          visited[nidx] = 1;
          if (isBgCandidate[nidx]) {
            queue.push(nidx);
          }
        }
      }
    }
  }

  // Visited background candidates + any isolated checkerboard islands (diff <= 10 && minVal >= 170)
  const isBackgroundPixel = (x, y) => {
    const idx = y * width + x;
    if (visited[idx] === 1 && isBgCandidate[idx] === 1) return true;
    
    // Check if it's an enclosed checkerboard square:
    const srcIdx = idx * channels;
    const r = data[srcIdx];
    const g = data[srcIdx + 1];
    const b = data[srcIdx + 2];
    const diff = Math.max(r, g, b) - Math.min(r, g, b);
    const minVal = Math.min(r, g, b);
    if (diff <= 8 && minVal >= 175) {
      return true;
    }
    return false;
  };

  // Create RGBA output
  const rgba = Buffer.alloc(width * height * 4);
  const studioRgba = Buffer.alloc(width * height * 4);

  // Studio background palette: Warm beige / champagne gradient
  // Top: #F7F3EE (247, 243, 238), Center glow: #EDE4D8 (237, 228, 216), Bottom: #E2D5C4 (226, 213, 196)
  for (let y = 0; y < height; y++) {
    const t = y / height;
    // Radial light from upper center
    for (let x = 0; x < width; x++) {
      const idx = y * width + x;
      const srcIdx = idx * channels;
      const dstIdx = idx * 4;

      const r = data[srcIdx];
      const g = data[srcIdx + 1];
      const b = data[srcIdx + 2];

      const isBg = isBackgroundPixel(x, y);

      // Calculate studio background color at (x, y)
      // Soft radial gradient spotlight behind Dra. Beatriz
      const dx = (x - width * 0.5) / (width * 0.5);
      const dy = (y - height * 0.4) / (height * 0.5);
      const dist = Math.min(1, Math.sqrt(dx * dx + dy * dy));
      
      // Warm studio tones:
      // Center highlight: R: 250, G: 246, B: 240
      // Vignette edge: R: 228, G: 218, B: 206
      const bgR = Math.round(250 - dist * 24);
      const bgG = Math.round(246 - dist * 30);
      const bgB = Math.round(240 - dist * 35);

      if (isBg) {
        // Transparent PNG
        rgba[dstIdx] = 0;
        rgba[dstIdx + 1] = 0;
        rgba[dstIdx + 2] = 0;
        rgba[dstIdx + 3] = 0;

        // Studio composite
        studioRgba[dstIdx] = bgR;
        studioRgba[dstIdx + 1] = bgG;
        studioRgba[dstIdx + 2] = bgB;
        studioRgba[dstIdx + 3] = 255;
      } else {
        // Person
        rgba[dstIdx] = r;
        rgba[dstIdx + 1] = g;
        rgba[dstIdx + 2] = b;
        rgba[dstIdx + 3] = 255;

        // Studio composite
        studioRgba[dstIdx] = r;
        studioRgba[dstIdx + 1] = g;
        studioRgba[dstIdx + 2] = b;
        studioRgba[dstIdx + 3] = 255;
      }
    }
  }

  // Smooth mask edges slightly to remove aliasing
  await sharp(rgba, { raw: { width, height, channels: 4 } })
    .png()
    .toFile(outputPngPath);

  await sharp(studioRgba, { raw: { width, height, channels: 4 } })
    .jpeg({ quality: 95 })
    .toFile(outputStudioPath);

  console.log(`Processed: ${outputPngPath} & ${outputStudioPath}`);
}

async function run() {
  const publicDir = 'C:/Users/Administrator/.gemini/antigravity/scratch/dra-beatriz-rigobello/public/images';
  if (!fs.existsSync(publicDir)) {
    fs.mkdirSync(publicDir, { recursive: true });
  }

  await processImage(
    img1Path,
    path.join(publicDir, 'dra-beatriz-1-transparent.png'),
    path.join(publicDir, 'dra-beatriz-1-studio.jpg')
  );

  await processImage(
    img2Path,
    path.join(publicDir, 'dra-beatriz-2-transparent.png'),
    path.join(publicDir, 'dra-beatriz-2-studio.jpg')
  );

  // Also copy original images just in case
  fs.copyFileSync(img1Path, path.join(publicDir, 'dra-beatriz-orig-1.jpg'));
  fs.copyFileSync(img2Path, path.join(publicDir, 'dra-beatriz-orig-2.jpg'));
  console.log('Done processing images!');
}

run().catch(console.error);
