import http from './slHTTP';

import ui from './ui';


document.addEventListener('DOMContentLoaded', fetchPosts);

document.getElementById('add_post_btn').addEventListener('click', addPost);

document.getElementById('posts').addEventListener('click', deletePost);

document.getElementById('posts').addEventListener('click', editPost);

document.getElementById('edit_post_btn').addEventListener('click', updatePostData);

function fetchPosts(){
    http.get('http://localhost:3000/posts')
        .then(data => ui.showPosts(data))
        .catch(err => console.log(`Error ${err}`))
}

function addPost(){
    const title = document.getElementById('post_title').value;
    const author = document.getElementById('post_author').value;
    const body = document.getElementById('post_body').value;

    const data = {
        title,
        author,
        body
    };

    http.post('http://localhost:3000/posts', data)
        .then(data => {
            fetchPosts();
            ui.clearAllFields();
        })
        .catch(err => console.log(`Error ${err}`))

}


