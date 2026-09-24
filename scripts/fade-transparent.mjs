import sharp from 'sharp';
import path from 'path';

const img1Path = 'C:/Users/Administrator/.gemini/antigravity/scratch/dra-beatriz-rigobello/public/images/dra-beatriz-orig-1.jpg';
const img2Path = 'C:/Users/Administrator/.gemini/antigravity/scratch/dra-beatriz-rigobello/public/images/dra-beatriz-orig-2.jpg';

async function processWithBottomFade(inputPath, outputPngPath) {
  const image = sharp(inputPath);
  const { data, info } = await image.raw().toBuffer({ resolveWithObject: true });
  const { width, height, channels } = info;

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

      if (diff <= 18 && minVal >= 170) {
        isBgCandidate[y * width + x] = 1;
      }
    }
  }

  // BFS from edges
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

  for (let x = 0; x < width; x++) {
    enqueue(x, 0);
    enqueue(x, height - 1);
  }
  for (let y = 0; y < height; y++) {
    enqueue(0, y);
    enqueue(width - 1, y);
  }
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

  // Function to determine if background
  const isBackgroundPixel = (x, y) => {
    const idx = y * width + x;
    if (visited[idx] === 1 && isBgCandidate[idx] === 1) return true;
    
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

  const rgba = Buffer.alloc(width * height * 4);

  // Gradient fade settings:
  // Fade starts around y = 68% of height and smoothly fades to 0 at 96%
  const fadeStartY = Math.floor(height * 0.68);
  const fadeEndY = Math.floor(height * 0.98);

  for (let y = 0; y < height; y++) {
    let verticalFade = 1.0;
    if (y >= fadeStartY) {
      if (y >= fadeEndY) {
        verticalFade = 0.0;
      } else {
        const progress = (y - fadeStartY) / (fadeEndY - fadeStartY);
        // Smooth cosine ease-out
        verticalFade = 0.5 * (1 + Math.cos(Math.PI * progress));
      }
    }

    for (let x = 0; x < width; x++) {
      const idx = y * width + x;
      const srcIdx = idx * channels;
      const dstIdx = idx * 4;

      const r = data[srcIdx];
      const g = data[srcIdx + 1];
      const b = data[srcIdx + 2];

      const isBg = isBackgroundPixel(x, y);

      if (isBg) {
        rgba[dstIdx] = 0;
        rgba[dstIdx + 1] = 0;
        rgba[dstIdx + 2] = 0;
        rgba[dstIdx + 3] = 0;
      } else {
        rgba[dstIdx] = r;
        rgba[dstIdx + 1] = g;
        rgba[dstIdx + 2] = b;
        rgba[dstIdx + 3] = Math.round(255 * verticalFade);
      }
    }
  }

  await sharp(rgba, { raw: { width, height, channels: 4 } })
    .png()
    .toFile(outputPngPath);

  console.log(`Saved transparent image with bottom fade: ${outputPngPath}`);
}

async function run() {
  const publicDir = 'C:/Users/Administrator/.gemini/antigravity/scratch/dra-beatriz-rigobello/public/images';

  await processWithBottomFade(
    img1Path,
    path.join(publicDir, 'dra-beatriz-1-transparent.png')
  );

  await processWithBottomFade(
    img2Path,
    path.join(publicDir, 'dra-beatriz-2-transparent.png')
  );

  console.log('Finished creating transparent faded images!');
}

run().catch(console.error);
