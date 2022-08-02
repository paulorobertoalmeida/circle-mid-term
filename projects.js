const btn = document.getElementById("projects-post");
const URL = ('https://jsonplaceholder.typicode.com/comments') //placeholder of comments


//8 First Comments
function myPosts() {
    fetch(URL).then(res => res.json())
        .then(data => btn.innerHTML = data.map((comment) => 
        `<p class="mt-2 p-8"> PostId: ${comment.id} <br> 
        Name:${comment.name} <br>
        ${comment.body} </p>`).slice(0, 8).join(''))
}
myPosts()