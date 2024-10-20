function updateTime() {
  //Los Angeles
  let laElement = document.querySelector("#la");
  if (laElement) {
    let laDateElement = laElement.querySelector(".date");
    let laTimeElement = laElement.querySelector(".time");
    let laTime = moment().tz("America/Los_Angeles");

    laDateElement.innerHTML = laTime.format("MMMM Do YYYY");
    laTimeElement.innerHTML = laTime.format("h:mm:ss [<small>]A[</small>]");
  }

  //Cape Town
  let cptElement = document.querySelector("#cpt");
  if (cptElement) {
    let cptDateElement = cptElement.querySelector(".date");
    let cptTimeElement = cptElement.querySelector(".time");
    let cptTime = moment().tz("Africa/Johannesburg");

    cptDateElement.innerHTML = cptTime.format("MMMM Do YYYY");
    cptTimeElement.innerHTML = cptTime.format("h:mm:ss [<small>]A[</small>]");
  }
}

function updateCity(event) {
  let cityTimeZone = event.target.value;
  if (cityTimeZone === "current") {
    cityTimeZone = moment.tz.guess();
  }
  let cityName = cityTimeZone.replace("_", " ").split("/")[1];
  let cityTime = moment().tz(cityTimeZone);
  let citiesElement = document.querySelector("#cities");
  citiesElement.innerHTML = `<div class="city">
          <div>
            <h2>${cityName}</h2>
            <div class="date">${cityTime.format("MMMM Do YYYY")}</div>
          </div>
          <div class="time">${cityTime.format(
            "h:mm:ss"
          )} <small>${cityTime.format("A")}</small></div>
        </div>`;
}

updateTime();
setInterval(updateTime, 1000);

let citiesSelectElement = document.querySelector("#city");
citiesSelectElement.addEventListener("change", updateCity);
