import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import webpLoader from 'webpack-webp-loader';
import sharp from 'sharp';

export default defineConfig({
  plugins: [react()],
  server: {
    port: 3000,
  },
  build: {
    rollupOptions: {
      output: {
        assetFileNames: '[name][ext]',
      },
    },
  },
  configureServer: {
    // Add a configureServer block to skip WebP conversion in development mode
    hmr: {
      onBeforeUpdate: () => {
        // Prevent WebP conversion in development mode
        process.env.WEBP_SKIP = 'false';
      },
    },
  },
  configureWebpack: {
    resolve: {
      alias: {},
    },
    module: {
      rules: [
        {
          test: /\.(png|jpe?g)$/,
          use: [
            {
              loader: 'file-loader',
              options: {
                name: '[path][name].[ext]',
                publicPath: '/',
              },
            },
            {
              loader: 'webp-loader',
              options: {
                quality: 75, // Adjust quality as needed
                alphaQuality: 100,
                method: 6, // Set encoding method (6 is a good default)
                sharpOptions: {
                  bypassOnDebug: true, // Skip conversion in development mode
                  compressionLevel: 6, // Adjust compression level
                },
                onComplete: () => {
                  console.log('WebP images conversion completed.');
                },
              },
            },
          ],
        },
      ],
    },
  },
});
