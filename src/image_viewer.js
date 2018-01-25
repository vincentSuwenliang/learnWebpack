import './style/image_viewer.css'
// can not import css in js file
/*
Module parse failed: Unexpected token (1:4)
You may need an appropriate loader to handle this file type.
*/
import big from '../assets/big.jpeg';
import small from '../assets/200.jpeg';

// module build failed: Error: dyld: Library not loaded: /usr/local/opt/libpng/lib/libpng16.16.dylib
// https://github.com/tcoopman/image-webpack-loader/issues/51
// brew install libpng and then npm install file-loader --save-dev
// succeed, the problem is brew install libpng

const image = document.createElement('img');
image.src = small;
// image.src = 'http://lorempixel.com/400/400'
document.body.appendChild(image);

const bigImage = document.createElement('img');
bigImage.src = big;
document.body.appendChild(bigImage);