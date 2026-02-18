const sportContainer = document.getElementById("sportContainer");
const sportData = [
  {
    sportImage: "img/sport1.jpg",
    title: "Sports",
    subtitle: `Nigerian-born Israel Adesanya 
                    Defeats Cannonier By Unanimous Decision`,
    date: "February 17, 2026",
  },
  {
    sportImage: "img/sport3.jpeg",
    title: "Sports",
    subtitle: `BREAKING: CAF Awards Three Points, 
                    Three Goals To Nigeria, Fines Libya $50,000`,
    date: "February 17, 2026",
  },
  {
    sportImage: "img/sport4.png",
    title: "Sports",
    subtitle: `Nigeria’s Super Eagles Players 
                    Withdraw From Tuesday’s AFCON Qualifying`,
    date: "February 17, 2026",
  },
  {
    sportImage: "img/sport4.png",
    title: "Sports",
    subtitle: `BREAKING: Nigerian Football Team, Super
                    Eagles Stranded At Libyan Airport After Flight`,
    date: "February 17, 2026",
  },
  {
    sportImage: "img/sport5.jpeg",
    title: "Sports",
    subtitle: `Usyk Beats Anthony Joshua
                    In Heavyweight Title Rematch In Saudi`,
    date: "February 17, 2026",
  },
  {
    sportImage: "img/sport6.jpeg",
    title: "Sports",
    subtitle: `How My Career Almost Ended When 
                    I Got Injured In Nigeria – Gold Medallist, Tobi`,
    date: "February 17, 2026",
  },
];

function renderSport(sport) {
  sportContainer.innerHTML = "";
  for (let i = 0; i < sport.length; i++) {
    let ball = `
        <div class="col-md-2 col-sm-6 col-12">
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
                src=${sport[i].sportImage}
                loading="lazy"
                class="card-img-top img-fluid"
                alt="the-queen"
              />
              <div class="card-body my-3 d-flex flex-column" style="padding: 0 !important; height: 230px;">
              <a
                  href="#"
                  class="text-decoration-none"
                  style="color: red !important"
                  >${sport[i].title}</a
                >
                <p class="card-subtitle fw-bold text-white mt-2 flex-grow-1">
                  ${sport[i].subtitle}
                </p>
                <div class="mb-auto">
                <hr class="text-white" />
                <p class="lead my-3" style="font-size: 12px; color: #ccc;">
                  ${sport[i].date}
                </p>
                </div>
              </div>
              </a>
            </div>
            </div>
        `;
    sportContainer.innerHTML += ball;
  }
}
renderSport(sportData);
