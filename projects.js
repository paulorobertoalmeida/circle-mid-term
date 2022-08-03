const btn = document.getElementById("projects-post");
const URL = ('https://jsonplaceholder.typicode.com/comments') //placeholder of comments


//6 First Comments
function myPosts() {
    fetch(URL).then(res => res.json())
        .then(data => btn.innerHTML = data.map((comment) => 
        `<p class="my-5 font-thin text-left"> PostId: ${comment.id} <br> 
        <p class="text-lg italic">Name: ${comment.name} <br>
        <p>${comment.body} </p>`).slice(0, 6).join(''))
}
myPosts()