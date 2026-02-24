const politicsContainer = document.getElementById('politicsContainer');
const sportContainer = document.getElementById('sportContainer');
const entertainmentContainer = document.getElementById('entertainmentContainer');
const breakingContainer = document.getElementById('breakingContainer');
const headlinesContainer = document.getElementById('headlinesContainer');
const toggleBtn = document.getElementById("togglebtn");
const checkBox = document.getElementById("checkBox");
const mainBody = document.getElementById("mainBody");
const nextBtn = document.getElementById('nextBtn');
const prevBtn = document.getElementById('pervBtn');
const date = new Date()

const link = "https://dummyjson.com/posts"
const getNews = async()=>{
  console.log("gettingData");
  let respone = await fetch(link);
 let data = await respone.json();
 let allPosts = data.posts;
 let theNewsLength = data.posts;
 let theheadlineLength = data.posts;

  renderInformation(allPosts.slice(0, 10), politicsContainer, "Political");
  renderInformation(allPosts.slice(10, 20), entertainmentContainer, "Entertainment");
  renderInformation(allPosts.slice(20, 26), sportContainer, "Sport");
  renderBreaking(theNewsLength.slice(27, 28), breakingContainer, "Police")
  renderHeadline(theheadlineLength.slice(28, 29), headlinesContainer, "Politics")
}

getNews()

function renderInformation(post, container, key) {
    for (let i = 0; i < post.length; i++) {
       let card = `
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
        container.innerHTML += card;
    }
};
function renderBreaking(thenews, container, key) {
  for (let i = 0; i < thenews.length; i++) {
    let news = `   
          <div
              class="card border-0"
              style="
                width: 100%;
                height: auto !important;
                background: transparent !important;
              "
            >
            <a href="detailsPage.html?post=${thenews[i].id}&key=${key}" class="cursor-pointer text-decoration-none">
              <img
                src="img/NPF_3.jpeg"
                loading="lazy"
                class="card-img-top"
                alt="the-queen"
              />
              <div class="card-body my-3 d-flex flex-column" style="padding: 0 !important; height: 150px;">
                <a
                  href="#"
                  class="text-decoration-none"
                  style="color: red !important"
                  >${key}</a
                >
                <a href="detailsPage.html?post=${thenews[i].id}&key=${key}" class="text-decoration-none card-subtitle fw-bold text-white mt-2 flex-grow-1 text-wrapper">
                  ${thenews[i].body}
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
        `;
    container.innerHTML += news;
  }
}
function renderHeadline(thehead, container, key) {
  for (let i = 0; i < thehead.length; i++) {
    let headline = `   
          <div
              class="card border-0"
              style="
                width: 100%;
                height: auto !important;
                background: transparent !important;
              "
            >
            <a href="detailsPage.html?post=${thehead[i].id}&key=${key}" class="cursor-pointer text-decoration-none">
              <img
                src="img/poli6.jpg"
                loading="lazy"
                class="card-img-top"
                alt="the-queen"
              />
              <div class="card-body my-3 d-flex flex-column" style="padding: 0 !important; height: 150px;">
                <a
                  href="#"
                  class="text-decoration-none"
                  style="color: red !important"
                  >${key}</a
                >
                <a href="detailsPage.html?post=${thehead[i].id}&key=${key}" class="text-decoration-none card-subtitle fw-bold text-white mt-2 flex-grow-1 text-wrapper">
                  ${thehead[i].body}
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
        `;
    container.innerHTML += headline;
  }
}



toggleBtn.addEventListener("click", function () {
  nav.classList.toggle("active");
  togglebtn.classList.toggle("active");
});
checkBox.addEventListener("click", function () {
  if (checkBox.checked) {
    mainBody.style.background = "yellow";
  } else {
    mainBody.style.background = "#4a5568";
  }
});

const dropdown = document.querySelector('.dropdown');

dropdown.addEventListener('mouseenter', function () {
  const bsDropdown = bootstrap.Dropdown.getOrCreateInstance(
    this.querySelector('[data-bs-toggle="dropdown"]')
  );
  bsDropdown.show();

});

dropdown.addEventListener('mouseleave', function () {
  const bsDropdown = bootstrap.Dropdown.getOrCreateInstance(
    this.querySelector('[data-bs-toggle="dropdown"]')
  );
  bsDropdown.hide();


});

// let index = 0;
// const items = politicsContainer.children;
// const itemWidth = items[0].getBoundingClientRect().width;
// const container = document.querySelector(".scroll-conatiner");
// const containerWidth = container.getBoundingClientRect().width;
// const visibleItems = Math.floor(containerWidth / itemWidth);
// const maxIndex = items.length - visibleItems - 1;


// nextBtn.addEventListener("click", () => {
//   if (index < maxIndex) {
//     index++;
//   }

//   politicsContainer.style.transform =
//     `translateX(-${index * itemWidth}px)`;
// });

// prevBtn.addEventListener("click", () => {
//   if (index > 0) {
//     index--;
//   }
//   politicsContainer.style.transform =
//     `translateX(-${index * itemWidth}px)`;
// });
      




 