import tailwindcss from '@tailwindcss/vite';
import { tanstackStart } from '@tanstack/react-start/plugin/vite';
import viteReact from '@vitejs/plugin-react';
import { defineConfig } from 'vite';
import { baseUrl } from './src/config/base-url';

export default defineConfig({
  resolve: {
    tsconfigPaths: true,
  },
  plugins: [
    tanstackStart({
      prerender: {
        enabled: true,
        // Optional: other prerender options
        autoSubfolderIndex: true, // e.g., output as /page/index.html instead of /page.html
        autoStaticPathsDiscovery: true, // Automatically discover and prerender all linked paths
      },
      sitemap: {
        enabled: true,
        host: baseUrl,
        outputPath: 'sitemap/sitemap.xml',
      },
    }),
    viteReact({
      // https://react.dev/learn/react-compiler
      babel: {
        plugins: [['babel-plugin-react-compiler', { target: '19' }]],
      },
    }),
    tailwindcss(),
  ],
  server: {
    allowedHosts: [process.env.SERVER_HOST ?? 'localhost'],
  },
});
