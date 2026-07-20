

// shimaa
let container = document.getElementById("servicesContainer");
fetch("services.json")
    .then(res => res.json())
    .then(data => {
        data.forEach(services => {
            container.innerHTML += `
        <div class="col-md-3 p-2 col-10 par">
          <div class="ccc">
            <img src="${services.image}" class="card-img-top imm rounded">
            <div class="card-body mt-2">
              <h5 class="h">${services.title}</h5>
              <p class="pa">${services.description}</p>
            </div>
            </div>
        </div>
`;
        });
    });