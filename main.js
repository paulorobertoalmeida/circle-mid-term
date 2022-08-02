// // set the target element that will be collapsed or expanded (eg. navbar menu)
 //const targetEl = document.getElementById('targetEl');

// // optionally set a trigger element (eg. a button, hamburger icon)
 const triggerEl = document.getElementById('triggerEl');

// // optional options with default values and callback functions
 const options = {
     triggerEl: triggerEl,
     onCollapse: () => {
         console.log('element has been collapsed')
     },
     onExpand: () => {
         console.log('element has been expanded')
     },
     onToggle: () => {
         console.log('element has been toggled')
     }
 };

/*
* targetEl: required
* options: optional
*/
//const targetEl = document.getElementById('targetEl');

//const collapse = new Collapse(targetEl);

const card1 = document.getElementById("output1");
const card2 = document.getElementById("output2");
const card3 = document.getElementById("output3");
const URL = ('https://jsonplaceholder.typicode.com/comments') //placeholder of comments



function myPosts() {
    fetch(URL).then(res => res.json())
        .then(data => card1.innerHTML = data.map((comment) => 
        `<p class="font-thin text-left">PostId: ${comment.id}</p> <br> 
        <p class="text-lg font-bold text-left">${comment.name} </p> <br>
        <p class="text-left">${comment.body} </p>`).slice(8, 9).join(''))
}
myPosts()

function secondPosts() {
    fetch(URL).then(res => res.json())
        .then(data => card2.innerHTML = data.map((comment) => 
        `<p class="font-thin text-left">PostId: ${comment.id}</p> <br> 
        <p class="text-lg font-bold text-left">${comment.name} </p> <br>
        <p class="text-left">${comment.body} </p>`).slice(9, 10).join(''))
}
secondPosts()

function thirdPosts() {
    fetch(URL).then(res => res.json())
        .then(data => card3.innerHTML = data.map((comment) => 
        `<p class="font-thin text-left">PostId: ${comment.id}</p> <br> 
        <p class="text-lg font-bold text-left">${comment.name} </p> <br>
        <p class="text-left">${comment.body} </p>`).slice(4, 5).join(''))
}
thirdPosts()
