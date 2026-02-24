

const params = new URLSearchParams(window.location.search);
const keyValue = params.get("key");
const date = new Date();

const categoryContainer = document.getElementById("categoryContainer");
const catText = document.getElementById("catText");
catText.textContent = keyValue;
catText.style.textTransform = "capitalize";

const getCategoryItem = async() =>{ 
let respone = await fetch(`https://dummyjson.com/posts`);
let data = await respone.json();
const allPosts = data.posts;
let categoryPost = [];
if (keyValue === "sports") {
        categoryPost = allPosts.slice(20, 26);
};
if (keyValue === "entertainment") {
        categoryPost = allPosts.slice(10, 20);
};
if (keyValue === "politics") {
        categoryPost = allPosts.slice(0, 10);
};
    renderCategory(categoryPost, categoryContainer, keyValue)
}
getCategoryItem();


function renderCategory(post, container, key) {
    container.innerHTML = "";
    for (let i = 0; i < post.length; i++) {
        let items = `
       <div class="col-md-2 col-sm-6 col-12">
        <div
              class="card border-0"
              style="
                width: 100%;
                height: auto !important;
                background: transparent !important;
              "
            >
            <a href="detailsPage.html?post=${post[i].id}&key=${key}" class="cursor-pointer text-decoration-none">
              <img
                src="./img/poli1.jpeg"
                loading="lazy"
                class="card-img-top img-fluid"
                alt="the-queen"
              />
              <div class="card-body my-3 d-flex flex-column" style="padding: 0 !important;">
              <a
                  href="#"
                  class="text-decoration-none"
                  style="color: red !important"
                  >${key}</a
                >
                <a href="detailsPage.html?post=${post[i].id}&key=${key}" class="text-decoration-none card-subtitle fw-bold text-white mt-2 flex-grow-1 text-container">
                  ${post[i].body}
                </a>
                <div class="mb-auto">
                <hr class="text-white" />
                <p class="lead my-3" style="font-size: 12px; color: #ccc;">
                  ${date.toLocaleDateString('en-GB')}
                </p>
                </div>
              </div>
              </a>
            </div>
            </div>
       `
        container.innerHTML += items;
    }
};