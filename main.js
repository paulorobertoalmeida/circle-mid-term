
const blabla = [
    {
        "userId": 1,
        "id": 1,
        "title": "sunt aut facere repellat provident occaecati excepturi optio reprehenderit",
        "body": "quia et suscipit\nsuscipit recusandae consequuntur expedita et cum\nreprehenderit molestiae ut ut quas totam\nnostrum rerum est autem sunt rem eveniet architecto"
    },
    {
        "userId": 1,
        "id": 2,
        "title": "qui est esse",
        "body": "est rerum tempore vitae\nsequi sint nihil reprehenderit dolor beatae ea dolores neque\nfugiat blanditiis voluptate porro vel nihil molestiae ut reiciendis\nqui aperiam non debitis possimus qui neque nisi nulla"
    },
    {
        "userId": 1,
        "id": 3,
        "title": "ea molestias quasi exercitationem repellat qui ipsa sit aut",
        "body": "et iusto sed quo iure\nvoluptatem occaecati omnis eligendi aut ad\nvoluptatem doloribus vel accusantium quis pariatur\nmolestiae porro eius odio et labore et velit aut"
    },
    {
        "userId": 1,
        "id": 4,
        "title": "eum et est occaecati",
        "body": "ullam et saepe reiciendis voluptatem adipisci\nsit amet autem assumenda provident rerum culpa\nquis hic commodi nesciunt rem tenetur doloremque ipsam iure\nquis sunt voluptatem rerum illo velit"
    },
    {
        "userId": 1,
        "id": 5,
        "title": "nesciunt quas odio",
        "body": "repudiandae veniam quaerat sunt sed\nalias aut fugiat sit autem sed est\nvoluptatem omnis possimus esse voluptatibus quis\nest aut tenetur dolor neque"
    }
]

const btn = document.querySelector('button.menu-button');
const menu = document.querySelector(".mobile-menu");
btn.addEventListener("click", () => {
    menu.classList.toggle("hidden");
})

placeholder("https://jsonplaceholder.typicode.com/posts");
// index.js

// fetch("blabla")
//   .then((response) => response.json())
//   .then((data) => {
//     data.forEach((launchObj) => {

//       const postId = launchObj.userId;
//       const post = launchObj.body;




//       const imgElement = document.createElement("img");

//       imgElement.setAttribute("src", patchImage);
//       imgElement.setAttribute("width", 200);
//       document.body.appendChild(imgElement);
//     });
//   })
//   .catch((err) => console.log(err));



async function getUserAsync() {
    try {
        let response = await fetch(`https://jsonplaceholder.typicode.com/posts`);
      .then((response) => response.json())
            .then((data) => {
                const postData = "";
                data.forEach((post) => {
                    const title = post.title;
                    const bodyText = data.body;
                    //  return await response.json();
                }catch (err) {
                    console.error(err);

                }
            }

console.log(getUserAsync());


        //   const getPosts = () => {
        //             setTimeout(() => {
        //                 let outPut = "";
        //                 posts.forEach((post, index) => {
        //                     outPut += `
        //               <ul>
        //               <li>${post.userId}</li>
        //               <li>${post.body}</li>
        //               <li>${index}</li>
        //               </ul>
        //               `;
        //                 });
        //                 document.body.innerHTML = outPut;
        //             }, 1000);
        //         };

        //         console.log(getPosts(blabla));

        console.log(title)

        document.getElementsByName("title").innerHTML = title;
        document.getElementsByName("text-body").innerHTML = textBody; 
