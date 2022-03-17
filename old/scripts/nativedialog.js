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

    const safer_promptBtn = document.querySelector('#safer-prompt');
    safer_promptBtn.addEventListener("click", safeFun);
    
    // const out = document.querySelector('#out');
    // out.innerHTML = ;
}

function alertFun() {
    // console.log("alerted\t");
    window.alert("these are not the droids you are looking for");

    const confirm_out = document.querySelector('#out');
    confirm_out.innerHTML = `these aren't the droids I'm looking for`;
}

function confirmFun() {
    let val = window.confirm(`Confirm super dramatic event?`);

    const confirm_out = document.querySelector('#out');
    confirm_out.innerHTML = `The value returned by the confirm method is : ${val}`;
}

function promptFun() {
    let str = "bears, beets, battlestar galactica";
    str = window.prompt("What's the passphrase?", str);

    const confirm_out = document.querySelector('#out');
    confirm_out.innerHTML = `Prompt result: ${str}!`;
}

function safeFun() {
    let dirty = "bears, beets, battlestar galactica";
    dirty = window.prompt("What's the passphrase?", dirty);

    let clean = DOMPurify.sanitize(dirty);
    console.log(`clean: ${clean}`);

    const confirm_out = document.querySelector('#out');
    confirm_out.innerHTML = `Prompt result: ${clean}!`;
}

window.addEventListener('DOMContentLoaded', init);