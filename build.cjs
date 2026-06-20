const { rollup } = require('rollup');
const typescript = require('@rollup/plugin-typescript');
const resolve = require('@rollup/plugin-node-resolve');
const commonjs = require('@rollup/plugin-commonjs');
const replace = require('@rollup/plugin-replace');
const fs = require('fs');
const path = require('path');

// Simple CSS plugin
function cssPlugin() {
  const styles = [];
  return {
    name: 'css',
    transform(code, id) {
      if (id.endsWith('.css')) {
        styles.push(code);
        return { code: 'export default "";' };
      }
      return null;
    },
    generateBundle() {
      if (styles.length > 0) {
        this.emitFile({
          type: 'asset',
          fileName: 'assets/index.css',
          source: styles.join('\n'),
        });
      }
    },
  };
}

async function build() {
  try {
    const bundle = await rollup({
      input: 'src/main.tsx',
      plugins: [
        replace.default({
          'process.env.NODE_ENV': JSON.stringify('production'),
          preventAssignment: true,
        }),
        resolve.default({ browser: true, preferBuiltins: false }),
        commonjs.default(),
        cssPlugin(),
        typescript.default({
          tsconfig: './tsconfig.json',
          outDir: 'dist',
        }),
      ],
      onwarn(warning, warn) {
        if (warning.code === 'MODULE_LEVEL_DIRECTIVE') return;
        warn(warning);
      },
    });

    await bundle.write({
      dir: 'dist',
      format: 'es',
      sourcemap: true,
      manualChunks: {
        vendor: ['react', 'react-dom', 'react-router-dom', 'framer-motion', 'lucide-react'],
      },
    });

    await bundle.close();

    // Create index.html
    const html = `<!DOCTYPE html>
<html lang="en" class="dark">
  <head>
    <meta charset="UTF-8" />
    <link rel="icon" type="image/svg+xml" href="/favicon.svg" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <meta name="description" content="Al Rahma Furniture - Egypt's leading manufacturer of premium office furniture, wardrobes, cabinets, desks, and custom furniture solutions." />
    <meta name="keywords" content="furniture, office furniture, wardrobes, cabinets, desks, Egypt, custom furniture, Al Rahma" />
    <title>Al Rahma Furniture | Premium Office & Home Furniture in Egypt</title>
    <link rel="stylesheet" href="./assets/index.css" />
    <script src="https://cdn.tailwindcss.com"></script>
    <script>
      tailwind.config = {
        theme: {
          extend: {
            colors: {
              gold: {
                50: '#fdf9f0', 100: '#f9f0d8', 200: '#f2dfab', 300: '#e8c876',
                400: '#deb04a', 500: '#c9962e', 600: '#a87824', 700: '#8a5f20',
                800: '#704d1f', 900: '#5e401c', 950: '#36210c',
              },
              black: {
                50: '#f6f6f6', 100: '#e7e7e7', 200: '#d1d1d1', 300: '#b0b0b0',
                400: '#888888', 500: '#6d6d6d', 600: '#5d5d5d', 700: '#4f4f4f',
                800: '#454545', 900: '#3d3d3d', 950: '#0a0a0a',
              },
            },
          },
        },
      };
    </script>
    <style>
      @layer base {
        html { scroll-behavior: smooth; }
        body { background-color: #0a0a0a; color: #fff; font-family: system-ui, -apple-system, sans-serif; -webkit-font-smoothing: antialiased; }
        ::-webkit-scrollbar { width: 8px; }
        ::-webkit-scrollbar-track { background: #0a0a0a; }
        ::-webkit-scrollbar-thumb { background: #333; border-radius: 4px; }
        ::selection { background: rgba(201, 150, 46, 0.3); color: #fff; }
      }
    </style>
  </head>
  <body class="bg-black-950 text-white antialiased">
    <div id="root"></div>
    <script type="module" src="./main.js"></script>
  </body>
</html>`;

    fs.writeFileSync('dist/index.html', html);

    console.log('Build successful!');
  } catch (e) {
    console.error('Build error:', e.message);
    process.exit(1);
  }
}

build();
