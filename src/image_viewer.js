import './style/image_viewer.css'
// can not import css in js file
/*
Module parse failed: Unexpected token (1:4)
You may need an appropriate loader to handle this file type.
*/
const image = document.createElement('img');

image.src = 'http://lorempixel.com/400/400'

document.body.appendChild(image);