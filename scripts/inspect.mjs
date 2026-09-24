import sharp from 'sharp';
import fs from 'fs';
import path from 'path';

const img1Path = 'C:/Users/Administrator/.gemini/antigravity/brain/2f9a957b-c21b-4024-870c-7f886b2f0a71/.user_uploaded/media_1790206940413.jpg';
const img2Path = 'C:/Users/Administrator/.gemini/antigravity/brain/2f9a957b-c21b-4024-870c-7f886b2f0a71/.user_uploaded/media_1790206940416.jpg';

async function inspect() {
  const meta1 = await sharp(img1Path).metadata();
  const meta2 = await sharp(img2Path).metadata();
  console.log('Image 1:', meta1.width, meta1.height, meta1.channels, meta1.format);
  console.log('Image 2:', meta2.width, meta2.height, meta2.channels, meta2.format);

  // Let's sample a 10x10 patch in the top-left corner
  const { data: raw1, info: info1 } = await sharp(img1Path).raw().toBuffer({ resolveWithObject: true });
  console.log('Corner pixel (0,0):', raw1[0], raw1[1], raw1[2]);
  console.log('Pixel at (50, 50):', raw1[(50 * info1.width + 50) * info1.channels], raw1[(50 * info1.width + 50) * info1.channels + 1], raw1[(50 * info1.width + 50) * info1.channels + 2]);
}

inspect().catch(console.error);
