import './purify.min.js';
// import 'src/scripts/purify.min.js'
// import DOMPurify from "../DOMpurify/DOMPurify-2.3.6/dist/purify";

function init() {
    const promptBtn = document.querySelector('#prompt');
    promptBtn.addEventListener("click", promptFun);
    
}

function promptFun() {
    // show dialog
    const dialog = document.querySelector("#out-prompt")
    dialog.showModal();

    // button functionality
    const okBtn = document.querySelector('#out-ok');
    okBtn.addEventListener("click", () => {
        // select input box
        const input = document.querySelector('#out-input');
        let dirty = input.value;
        // clean input
        let clean = DOMPurify.sanitize(dirty);
        // set output
        const confirm_out = document.querySelector('#out');
        confirm_out.innerHTML = `Prompt result: ${clean}!`;
        // close dialog
        dialog.close();
    });

    const cancelBtn = document.querySelector('#out-cancel');
    cancelBtn.addEventListener("click", () => {
        dialog.close();
    });
}

window.addEventListener('DOMContentLoaded', init);