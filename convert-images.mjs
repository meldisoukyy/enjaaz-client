import imagemin from 'imagemin';
import imageminWebp from 'imagemin-webp';
import imageminMozjpeg from 'imagemin-mozjpeg';

const inputPath = './public/images/banar/new';
const outputPath = './public/images/banar/new';

(async () => {
  const files = await imagemin([`${inputPath}/*.jpeg`], {
    destination: outputPath,
    plugins: [
      imageminWebp({
        quality: 100, // Adjust the WebP quality as needed
      }),
      imageminMozjpeg({
        quality: 100, // Adjust the JPEG quality as needed
      }),
    ],
  });

  console.log('PNG images converted to WebP format and compressed:', files);
})();

// npm run convert-images