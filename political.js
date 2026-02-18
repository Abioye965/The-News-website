const politicsContainer = document.getElementById('politicsContainer')
const politicalData = [
    {
        polImage: "img/poli1.jpeg",
           title: "Politics",
           subtitle: `EXCLUSIVE: Tinubu, Governor Adeleke To Meet For Political`,
           date: "February 15, 2026"
    },
    {
        polImage: "img/poli2.jpeg",
           title: "Politics",
           subtitle: `EXCLUSIVE: Full List Of REC, HODs, 27 Electoral Officers Sponsored By Imo Gov`,
           date: "February 15, 2026"
    },
    {
        polImage: "img/poli3.png",
           title: "Politics",
           subtitle: `APC Fixes N30million For Ebonyi Council Chairmanship Form, More Than Four-Year`,
           date: "February 15, 2026"
    },
    {
        polImage: "img/poli4.jpeg",
           title: "Politics",
           subtitle: `BREAKING: Four Rivers Assembly Lawmakers Reverse Call For`,
           date: "February 15, 2026"
    },
    {
        polImage: "img/poli5.jpeg",
           title: "Politics",
           subtitle: `Bauchi Governor Mohammed Accuses Minister Wike Of Plotting To “Put Fire” In His`,
           date: "February 15, 2026"
    },
    {
        polImage: "img/poli6.jpg",
           title: "Politics",
           subtitle: `BREAKING: Peter Obi, Other South-East Leaders Officially Join ADC In Enugu`,
           date: "February 15, 2026"
    }
];

function renderPolitics(govern) {
    politicsContainer.innerHTML += "";
    for (let i = 0; i < govern.length; i++) {
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
            <a href="#" class="cursor-pointer text-decoration-none">
              <img
                src=${govern[i].polImage}
                loading="lazy"
                class="card-img-top img-fluid"
                alt="the-queen"
              />
              <div class="card-body my-3 d-flex flex-column" style="padding: 0 !important; height: 230px;">
              <a
                  href="#"
                  class="text-decoration-none"
                  style="color: red !important"
                  >${govern[i].title}</a
                >
                <p class="card-subtitle fw-bold text-white mt-2 flex-grow-1">
                  ${govern[i].subtitle}
                </p>
                <div class="mb-auto">
                <hr class="text-white" />
                <p class="lead my-3" style="font-size: 12px; color: #ccc;">
                  ${govern[i].date}
                </p>
                </div>
              </div>
              </a>
            </div>
            </div>
       `
        politicsContainer.innerHTML += card;
    }
};
renderPolitics(politicalData);
