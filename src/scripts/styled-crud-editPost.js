/**
 * Enables the contents of the post to be edited and eventually to be saved to
 * local storage
 * @param {post} event The post that is toggling editability
 */
 function editPostArticle(event) {
    // Edit title
    // toggle class styling and enables editing
    event.parentNode.children[0].classList.toggle('editable');
    event.parentNode.children[0].toggleAttribute('contenteditable');

    event.parentNode.children[1].classList.toggle('editable');
    event.parentNode.children[1].toggleAttribute('contenteditable');

    event.parentNode.children[2].classList.toggle('editable');
    event.parentNode.children[2].toggleAttribute('contenteditable');

    // Saves contents when done and controls context of edit/done button
    if (!event.parentNode.children[0].isContentEditable) {
        // not editable anymore
        event.parentNode.children[4].textContent = "Edit";
        
        // Push to local storage
        let post = {
            // select the child
            title: event.parentNode.querySelector('h2').textContent,
            date: event.parentNode.querySelector('.date').textContent,
            summary: event.parentNode.querySelector('.summary').textContent,
            id: event.parentNode.id
        };
        editPostStorage(post);
    } else {
        event.parentNode.children[4].textContent = "Done";
    }
}

/**
 * Actually saves the post to local storage
 * @param {post} post Post to save in local storage
 */
function editPostStorage(post) {
    let allPosts = JSON.parse(localStorage.getItem('data'));
    allPosts = allPosts !== null ? allPosts : [];
    for (i = 0; i < allPosts.length; i++) {
        if (post.id === allPosts[i].id) {
            // Update post values
            allPosts[i].title = post.title;
            allPosts[i].date = post.date;
            allPosts[i].summary = post.summary;
            break;
        }
    }

    localStorage.setItem('data', JSON.stringify(allPosts));
}