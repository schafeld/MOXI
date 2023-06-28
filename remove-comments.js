import fs from 'fs';
import { minify } from 'uglify-js';

const bundlePath = './dist/bundle.js';

fs.promises.readFile(bundlePath, 'utf8')
  .then((data) => {
    const result = minify(data.toString(), {
      output: {
        comments: false,
        beautify: true,
      },
      mangle: false,
    });

    return fs.promises.writeFile(bundlePath, result.code, 'utf8');
  })
  .then(() => {
    console.log('Comments removed from bundle successfully!');
  })
  .catch((err) => {
    console.error(err);
  });
