import sharp from 'sharp';

const img1Path = 'C:/Users/Administrator/.gemini/antigravity/scratch/dra-beatriz-rigobello/public/images/dra-beatriz-orig-1.jpg';

async function testCheckerboard() {
  const { data, info } = await sharp(img1Path).raw().toBuffer({ resolveWithObject: true });
  const { width, height, channels } = info;

  // Let's see all pixels where diff <= 12 and minVal >= 170
  // And let's check their (x, y) coordinates
  let count = 0;
  for (let y = 0; y < height; y++) {
    for (let x = 0; x < width; x++) {
      const idx = (y * width + x) * channels;
      const r = data[idx];
      const g = data[idx + 1];
      const b = data[idx + 2];
      const diff = Math.max(r, g, b) - Math.min(r, g, b);
      const minVal = Math.min(r, g, b);

      if (diff <= 12 && minVal >= 170) {
        // Is it inside the face?
        // Dra. Beatriz's face is roughly x in [300, 550], y in [150, 450]
        if (x >= 320 && x <= 520 && y >= 160 && y <= 420) {
          console.log(`Face pixel at (${x}, ${y}): R=${r}, G=${g}, B=${b}, diff=${diff}`);
        }
      }
    }
  }
}

testCheckerboard().catch(console.error);
