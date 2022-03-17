/**
 * This file is for powering all the events which affect the screen in some way
 */

/**
 * Sets the dialog box to open
 * @param {object} event Grabs the item that calls this function
 */
function showAddDialog(event) {
    document.querySelector('#addBlog').showModal();
}

/**
 * Sets the dialog box to close
 * @param {post} event The post that will be closed
 */
function closeAddDialog(event) {
    // Closes the dialog
    document.querySelector('#addBlog').close();
}

/**
 * Confirms that the content is ready to be saved to localstorage
 * @param {post} event The post that will save the content
 */
function confirmAddDialog(event) {
    let output = document.querySelector('#post-list');

    // object literal stores the values
    let post = {
        title: document.querySelector('#title').value,
        author: document.querySelector('#author').value,
        summary: document.querySelector('#summary').value,
        date: document.querySelector('#date').value,
        id: (new Date().getTime()).toString()
    };
    // Close the dialog box
    closeAddDialog();

    // Clear the queries
    document.querySelector('#title').value = '';
    document.querySelector('#summary').value = '';

    output.insertAdjacentHTML('beforeend', createPostObject(post));

    save(post);
}

/**
 * Saves the post to the local storage to be fetched by the display
 * @param {object} post Post to be saved to local storage
 */
function save(post) {
    let allPosts = JSON.parse(localStorage.getItem('data'));
    allPosts = allPosts !== null ? allPosts : [];
    allPosts.push(post);
    localStorage.setItem('data', JSON.stringify(allPosts));
}

function createPostObject(post) {
    // build HTML here so we can use template literals
    let postOut = 
        `<article id=\"${post.id}\">
            <h2>${post.title}</h2>
            <p class="author">${post.author}</p>
            <p class="date">${post.date}</p>
            <p class="summary">${post.summary}</p>
            <br>
            <button onclick=\"editPostArticle(this)\"><i class="fas fa-edit"></i> Edit</button>
            <button onclick=\"deletePostArticle(this)\"><i class="fas fa-trash"></i> Delete</button>
        </article>`;
    // need to escape characters??
    return postOut;
}

export { showAddDialog, closeAddDialog, confirmAddDialog, createPostObject};