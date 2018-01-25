const button = document.createElement('button');
button.innerText = 'click me';
button.onclick = () => {
    // System.import return a Promise
    System.import('./image_viewer').then(module => {
        console.log(module);
        module.default();
        // now the module is a function when export default () => {}
        
    });
};

document.body.appendChild(button);
