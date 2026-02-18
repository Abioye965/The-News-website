const newsContainer = document.getElementById("newsContainer");
const toggleBtn = document.getElementById("togglebtn");
// const closeBtn = document.getElementById("closeBtn");

const nav = document.querySelector("#navlinks");
const newsData = [
  {
    heading: "Breaking News",
    headerAlign: "text-start",
    color: "white",
    category: "Police",
    title: `EXCLUSIVE: Police Invade Abuja Hospital, 
            Attempt To Arrest Critically Ill Patient Bleeding
            After Custody Torture, Despite Restraining Court <br> Order`,
    date: "February 17, 2026",
    image: "img/NPF_3.jpeg",
  },
  {
    heading: "Top Headlines",
    headerAlign: "text-center",
    color: "red",
    category: "Elections",
    title: `Nigerian Senate Passes Electoral Act Amendment
            Bill After Clash, Stormy Debate On Electronic Transmission`,
    date: "February 17, 2026",
    image: "img/billclash.jpeg",
  },
];

function renderNews(data) {
  newsContainer.innerHTML = "";
  for (let i = 0; i < data.length; i++) {
    let card = `   
         <div class="col-md-6 col-12">
               <h3 style="color: ${data[i].color}" class="${data[i].headerAlign} mb-4 fw-bold">${data[i].heading}</h3>
               
        <div
              class="card border-0"
              style="
                width: 100%;
                height: auto !important;
                background: transparent !important;
              "
            >
            <a href="#" class="cursor-pointer text-decoration-none">
              <img
                src=${data[i].image}
                loading="lazy"
                class="card-img-top"
                alt="the-queen"
              />
              <div class="card-body my-3 d-flex flex-column" style="padding: 0 !important; height: 180px;">
                <a
                  href="#"
                  class="text-decoration-none"
                  style="color: red !important"
                  >${data[i].category}</a
                >
                <p class="card-subtitle fw-bold text-white mt-2 flex-grow-1">
                  ${data[i].title}
                </p>
                <div class="mb-auto">
                <hr class="text-white" />
                <p class="lead my-3" style="font-size: 12px; color: #ccc;">
                  ${data[i].date}
                </p>
                </div>
              </div>
              </a>
            </div>
            </div>
        `;
    newsContainer.innerHTML += card;
  }
}

renderNews(newsData);

toggleBtn.addEventListener("click", function () {
  nav.classList.toggle("active");
});
// closeBtn.addEventListener("click", function () {
//   nav.classList.remove("active");
// });
