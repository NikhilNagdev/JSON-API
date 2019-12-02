import http from './slHTTP';

import ui from './ui';

function fetchPosts(){
    http.get('http://localhost:3000/posts')
        .then(data => ui.showPosts(data))
        .catch(err => console.log(`Error ${err}`))
}


fetchPosts();

