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


const btn = document.querySelector('button.menu-button');
const menu = document.querySelector(".mobile-menu");
btn.addEventListener("click", () => {
    menu.classList.toggle("hidden");
})

const URL = ("https://jsonplaceholder.typicode.com/posts");

function getHere() {
    fetch("https://jsonplaceholder.typicode.com/posts")
        .then((response) => response.json())
        .then((res) => {
            let apiData = "";
            const newRes = res.forEach((articulo) => {
                console.log(articulo.title)
                apiData += `
                <div class="p-8 sm:p-9 md:p-7 xl:p-9 text-center" >
                 <h3>
                                <a href="javascript:void(0)" class="
                             font-semibold                              text-left
                             text-dark text-xl
                              sm:text-[22px]
                             md:text-xl
                              lg:text-[22px]
                              xl:text-xl
                             2xl:text-[22px]
                              mb-4
                             block
                             hover:text-primary
                              " class="title">
                              ${articulo.title}
                                </a>
                             </h3>
                             <p class="text-base text-body-color leading-relaxed mb-7 text-left" class="text-body">
                             ${articulo.body}
                            </p>
                             <a src="./projects.html" href="javascript:void(0)" class="
                          inline-block
                           py-2
                           px-7
                          text-base text-body-color
                           font-medium
                           hover:border-primary hover:bg-primary hover:text-white
                           transition
                           ">
                                 Learn More
                             </a>
                             </div>`;

            });
        });
}
console.log(getHere())

document.getElementById("getHere").addEventListener("click", getHere);

//Calling an external API

getHere()
