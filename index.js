
//function
function displayPosts(posts) {
    //get ul from the DOM
    const ul = document.getElementById('post-list')

    //loop through the posts array
    posts.forEach(post => {
        //create elements
        const li = document.createElement('li');
        const h = document.createElement('h');
        const p = document.createElement('p');

        //Add text content
        h.textContent = post.title;
        p.textContent = post.body;

        //put h1 and p inside li
        li.appendChild(h);
        li.appendChild(p);

        //add li to ul
        ul.appendChild(li)
    });
}

async function fetchPosts(){
    const response = await fetch ('https://jsonplaceholder.typicode.com/posts')
    const posts = await response.json();
    displayPosts(posts)
}

fetchPosts()