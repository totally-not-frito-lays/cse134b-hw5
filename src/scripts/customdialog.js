import './purify.min.js';
// import DOMPurify from "../DOMpurify/DOMPurify-2.3.6/dist/purify";

function init() {
    // Init eventlisteners
    const alertBtn = document.querySelector('#alert');
    alertBtn.addEventListener("click", alertFun);

    const confirmBtn = document.querySelector('#confirm');
    confirmBtn.addEventListener("click", confirmFun);

    const promptBtn = document.querySelector('#prompt');
    promptBtn.addEventListener("click", promptFun);
    
}

function alertFun() {
    // set output
    let val = "these are not the droids you are looking for";

    // show dialog
    document.querySelector("#out-alert").showModal();
    
    // button functionality
    const okBtn = document.querySelector('#ok-alert');
    okBtn.addEventListener("click", () => {
        // close dialog
        document.querySelector('#out-alert').close();
    })
    
    // save to output
    const confirm_out = document.querySelector('#out');
    confirm_out.innerHTML = `A man fell in the lego city river`;
}

function confirmFun() {
    // show dialog
    document.querySelector('#out-confirm').showModal();

    // button functionality
    const yesBtn = document.querySelector('#out-yes');
    yesBtn.addEventListener("click", () => {
        // output choice
        const confirm_out = document.querySelector('#out');
        confirm_out.innerHTML = "pina coladas? Heck yes";
        // close dialog
        document.querySelector('#out-confirm').close();
    });

    const noBtn = document.querySelector('#out-no');
    noBtn.addEventListener("click", () => {
        // output choice
        const confirm_out = document.querySelector('#out');
        confirm_out.innerHTML = "pina coladas? Heck no";
        // close dialog
        document.querySelector('#out-confirm').close();
    });
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
    })
}

window.addEventListener('DOMContentLoaded', init);