/**
 * Deletes the post from the screeen
 * @param {post} event Selects the post to be deleted
 */
function deletePostArticle(event) {
    let post = {
        // select the child
        title: document.querySelector('#title').value,
        author: document.querySelector('#author').value,
        summary: document.querySelector('#summary').value,
        date: document.querySelector('#date').value,
        id: event.parentNode.id
    };
    deletePostStorage(post);
    event.parentNode.remove();
}

/**
 * Deletes the post from local storage by overwriting
 * @param {post} post Selects the post to be deleted from localstorage
 */
function deletePostStorage(post) {
    let allPosts = JSON.parse(localStorage.getItem('data'));
    // look check if the posts is empty
    allPosts = allPosts !== null ? allPosts : [];

    // find the post that was called
    for (i = 0; i < allPosts.length; i++) {
        if (post.id === allPosts[i].id) {
            allPosts.splice(i, 1);
            break;
        }
    }

    // saves new state
    localStorage.setItem('data', JSON.stringify(allPosts));
}