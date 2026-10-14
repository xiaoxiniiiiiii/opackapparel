import fs from 'node:fs/promises';
import path from 'node:path';
import sharp from 'sharp';

const sourceDir = 'C:/Users/Administrator/.codex/generated_images/01a1389b-c444-73f3-8432-c3dc66743deb';
const outputDir = 'public/products';
const sheets = [
  ['exec-c42ae7b4-fd8c-4a31-9ae3-ca1ea05247ab.png', 'bags', 1],
  ['exec-b6bc1fd8-a3f0-4b9e-9bf2-73c035f8e403.png', 'bags', 11],
  ['exec-ff3b5ca5-9313-412f-b8b0-06ce781d2786.png', 'tops', 1],
  ['exec-caf34e36-7788-4d75-aea4-463b8370fdd9.png', 'tops', 11],
  ['exec-9290dbc4-759b-4085-abd0-96b56340050e.png', 'bottoms', 1]
];
await fs.mkdir(outputDir, { recursive: true });
for (const [file, prefix, startIndex] of sheets) {
  const source = path.join(sourceDir, file);
  const { width, height } = await sharp(source).metadata();
  if (!width || !height || width < 5 || height < 2) throw new Error(`Invalid sheet dimensions: ${source}`);
  const cellWidth = Math.floor(width / 5); const cellHeight = Math.floor(height / 2);
  for (let row = 0; row < 2; row++) for (let col = 0; col < 5; col++) {
    const index = startIndex + row * 5 + col;
    await sharp(source).extract({ left: col * cellWidth, top: row * cellHeight, width: col === 4 ? width - col * cellWidth : cellWidth, height: row === 1 ? height - row * cellHeight : cellHeight }).resize(720, 960, { fit: 'cover' }).webp({ quality: 88 }).toFile(path.join(outputDir, `${prefix}-${index}.webp`));
  }
}
console.log('Generated 50 unique WebP assets in public/products');
