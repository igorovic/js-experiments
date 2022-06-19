//@ts-check

/** @type {HTMLBodyElement} */
const dropzone = document.querySelector('body');
const dngEvents = ['dragenter', 'dragover', 'dragleave', 'drop'];



function preventDefaults(e) {
    e.preventDefault()
    e.stopPropagation()
}

const handler = (ev) => {
    let dt = ev.dataTransfer
    let files = dt.files
    if (files.length > 0) {
        console.debug(ev)
        console.debug(files)
    }
}

dngEvents.forEach(eventName => {
    dropzone.addEventListener(eventName, preventDefaults, false);
    dropzone.addEventListener('drop', handler, false);
});