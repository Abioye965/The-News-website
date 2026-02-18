const entertainmentContainer = document.getElementById("entertainmentContainer");
const entertainmentData = [
    {
        celebImage: "img/entertainment1.jpeg",
        title: `Celebrity Entertainment`,
        subtitle: `BREAKING: Nollywood Actress, Funke Akindele's Husband Announces`,
        date: `February 17, 2026`
    },
    {
         celebImage: "img/entertainment2.jpeg",
        title: `Entertainment`,
        subtitle: `BREAKING: Nigerian Police Invite Singer, Portable For Leading ‘Gang’ To Brutalise`,
        date: `February 17, 2026`
    },
    {
         celebImage: "img/entertainment3.jpg",
        title: `Crime Entertainment`,
        subtitle: `Nigerian Singer, Burna Boy Breaks Silence After Alleged Shooting Of Two Persons At`,
        date: `February 17, 2026`
    },
    {
         celebImage: "img/entertainment4.jpeg",
        title: `Entertainment`,
        subtitle: `Organisers Of Headies 2022 Petition Inspector-General Police Over Singer, Portable’s`,
        date: `February 17, 2026`
    },
    {
         celebImage: "img/entertainment5.jpg",
        title: `Entertainment`,
        subtitle: `Nollywood Actor, Osagie Dies Hours After Movie Set`,
        date: `February 17, 2026`
    },
    {
         celebImage: "img/entertainment6.jpg",
        title: `Entertainment`,
        subtitle: `Instagram Celebrities Corrupt Nollywood, Steal From Politicians, Prostitute`,
        date: `February 17, 2026`
    }
]; 

function renderEntertainment(celeb) {
entertainmentContainer.innerHTML = "";
    for (let i = 0; i < celeb.length; i++) {
        let celebrity = `
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
                src=${celeb[i].celebImage}
                loading="lazy"
                class="card-img-top img-fluid"
                alt="the-queen"
              />
              <div class="card-body my-3 d-flex flex-column" style="padding: 0 !important; height: 230px;">
              <a
                  href="#"
                  class="text-decoration-none"
                  style="color: red !important"
                  >${celeb[i].title}</a
                >
                <p class="card-subtitle fw-bold text-white mt-2 flex-grow-1">
                  ${celeb[i].subtitle}
                </p>
                <div class="mb-auto">
                <hr class="text-white" />
                <p class="lead my-3" style="font-size: 12px; color: #ccc;">
                  ${celeb[i].date}
                </p>
                </div>
              </div>
              </a>
            </div>
            </div>
        `
        entertainmentContainer.innerHTML += celebrity;
    }
}

renderEntertainment(entertainmentData);
