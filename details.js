const detailsContainer = document.getElementById('detailsContainer');
const params = new URLSearchParams(window.location.search);
const postId = params.get('post')
const key = params.get('key')
const date = new Date();
let post = []

// fetch from api

const getParticularNews = async() => {
  console.log("gettingData");
  let respone = await fetch(`https://dummyjson.com/posts/${postId}`);
 let post = await respone.json();
  renderDetails(post);
}
getParticularNews()


// render post
function renderDetails(post) {
  // const myTags = {
  //   politics: "Politics",
  //   sports: "Sports",
  //   entertainment: "Entertainment"
  // };

  // let myTag = myTags[key]; 
       let card = `
       <h3 class="text-white fw-bold my-4">
            <a href="political.html" class="text-decoration-none text-white">${post.title}</a>
          </h3>
           <div class="row g-3">
       <div class="col-10">
        <div
              class="card border-0"
              style="
                width: 100%;
                height: auto !important;
                background: transparent !important;
              "
            >
            <div class="align-items-start justify-content-center">
            <a href="#" class="cursor-pointer text-decoration-none">
              <img
                src="img/poli6.jpg"
                loading="lazy"
                class="card-img-top img-fluid"
                alt="the-queen"
              />
              <div class="card-body my-3 d-flex align-items-start" style="padding: 0 !important;">
              <div class="d-flex flex-column">
              <p class="lead" style="font-size: 12px; color: #ccc;">
                  ${date.toLocaleDateString('en-GB')}
                </p>
            <button class="btn p-2 bg-white text-dark">News</button>

              </div>
                <div class="w-75 ms-auto">
                  <p class="card-subtitle fw-bold text-white flex-grow-1">
                    ${post.body}
                  </p>
                </div>
                
              </div>
              </a>
              </div>
            </div>
            </div>
            </div>
       `
        detailsContainer.innerHTML = card;
 
};


  


 