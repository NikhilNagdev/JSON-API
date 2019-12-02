import http from './slHTTP';

import ui from './ui';


document.addEventListener('DOMContentLoaded', fetchPosts);

document.getElementById('add_post_btn').addEventListener('click', addPost);

document.getElementById('posts').addEventListener('click', deletePost);

// document.getElementById('posts').addEventListener('click', editPost);

// document.getElementById('edit_post_btn').addEventListener('click', updatePostData);

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

function deletePost(e){
    e.preventDefault();
    if (e.target.classList.contains('delete')) {
        const id = e.target.dataset.id;
        if (confirm('Are you sure you want to delete?')) {
            http.delete(`http://localhost:3000/posts/${id}`)
                .then(data => {
                    ui.showAlert('Post Deleted Successfully!', 'alert alert-success');
                    fetchPosts();
                })
                .catch(err => console.log(err));
        }
    }
}


