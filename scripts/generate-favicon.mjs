import sharp from 'sharp';
import fs from 'fs';
import path from 'path';

// Generate a luxury monogram favicon with the letter "B"
// Using deep espresso brown background (#2B1C12) with elegant gold border and gold letter "B" in serif font.

const size = 512;
const svg = `
<svg width="${size}" height="${size}" viewBox="0 0 ${size} ${size}" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <linearGradient id="bgGrad" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#362317" />
      <stop offset="100%" stop-color="#1E120A" />
    </linearGradient>
    <linearGradient id="goldGrad" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#F3E5C8" />
      <stop offset="40%" stop-color="#D8BA76" />
      <stop offset="100%" stop-color="#B88E3E" />
    </linearGradient>
    <linearGradient id="borderGrad" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#D8BA76" stop-opacity="0.6" />
      <stop offset="100%" stop-color="#9E7B35" stop-opacity="0.3" />
    </linearGradient>
  </defs>

  <!-- Background Squircle / Rounded Rectangle -->
  <rect x="16" y="16" width="480" height="480" rx="110" ry="110" fill="url(#bgGrad)" />
  
  <!-- Subtle Gold Inner Border -->
  <rect x="36" y="36" width="440" height="440" rx="90" ry="90" fill="none" stroke="url(#borderGrad)" stroke-width="6" />

  <!-- Monogram Letter "B" in Playfair Display / Georgia / Serif -->
  <text 
    x="50%" 
    y="54%" 
    dominant-baseline="central" 
    text-anchor="middle" 
    font-family="'Playfair Display', Georgia, 'Times New Roman', serif" 
    font-size="320" 
    font-weight="500" 
    fill="url(#goldGrad)"
    letter-spacing="-0.02em"
  >B</text>
</svg>
`;

async function generate() {
  const appDir = 'C:/Users/Administrator/.gemini/antigravity/scratch/dra-beatriz-rigobello/src/app';
  const publicDir = 'C:/Users/Administrator/.gemini/antigravity/scratch/dra-beatriz-rigobello/public';

  const svgBuffer = Buffer.from(svg);

  // Generate 512x512 icon
  await sharp(svgBuffer)
    .resize(512, 512)
    .png()
    .toFile(path.join(publicDir, 'icon-512.png'));

  // Generate 192x192 icon
  await sharp(svgBuffer)
    .resize(192, 192)
    .png()
    .toFile(path.join(publicDir, 'icon-192.png'));

  // Generate 32x32 and 48x48 icon for src/app/icon.png
  await sharp(svgBuffer)
    .resize(64, 64)
    .png()
    .toFile(path.join(appDir, 'icon.png'));

  // Generate 32x32 for favicon.ico
  const icoBuffer = await sharp(svgBuffer)
    .resize(32, 32)
    .png()
    .toBuffer();

  fs.writeFileSync(path.join(appDir, 'favicon.ico'), icoBuffer);
  fs.writeFileSync(path.join(publicDir, 'favicon.ico'), icoBuffer);
  fs.writeFileSync(path.join(publicDir, 'favicon.svg'), svgBuffer);

  console.log('Favicon and icon files successfully generated!');
}

generate().catch(console.error);
