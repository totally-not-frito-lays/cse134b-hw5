import {showAddDialog, closeAddDialog, confirmAddDialog, createPostObject} from './crud-addDialog.js';

function init() {

    // Add button opens dialog box
    const addBtn = document.querySelector('#add');
    addBtn.addEventListener("click", showAddDialog);

    // Cancel button closes add dialog box
    const cancelBtn = document.querySelector('#reset');
    cancelBtn.addEventListener("click", closeAddDialog);

    // Ok button confirms addition of post
    const okBtn = document.querySelector("#ok");
    okBtn.addEventListener("click", confirmAddDialog);
    
    // open account dialog
    const accountBtn = document.querySelector('#loginBtn');
    accountBtn.addEventListener("click", accountOpen);

    // close account dialog
    const accountDialog = document.querySelector('#closeAccount');
    accountDialog.addEventListener("click", accountClose);

    display();
    updateLogin();
}

function display() {
    let allPosts = JSON.parse(localStorage.getItem('data'));
    allPosts = allPosts !== null ? allPosts : [];
    for (const post of allPosts) {
        let output = document.querySelector('#post-list');
        output.insertAdjacentHTML('beforeend', createPostObject(post));
    }
}

function updateLogin() {
    const loginBtn = document.getElementById('loginBtn');
    const login = document.getElementById('login');
    
    loginBtn.addEventListener('click', () => {
        if (login.innerHTML == "Sign in") {
            // check that the dialog gets authenticated
            login.innerHTML = "Account";
        } else {
            // check that the dialog gets authenticated
            login.innerHTML = "Sign in";
        }
    });
}

/**
 * Opens dialog to log in
 */
function accountOpen(event) {
    console.log(`Opened account dialog`);
    document.querySelector('#account').showModal();
}

function accountClose(event) {
    document.querySelector('#account').close();
}

function login() {
    // add edit buttons
}

function logout() {
    // remove buttons
}

window.addEventListener('DOMContentLoaded', init);