function updateTime() {
  //Los Angeles
  let laElement = document.querySelector("#la");
  let laDateElement = laElement.querySelector(".date");
  let laTimeElement = laElement.querySelector(".time");
  let laTime = moment().tz("America/Los_Angeles");

  laDateElement.innerHTML = laTime.format("MMMM Do YYYY");
  laTimeElement.innerHTML = laTime.format("h:mm:ss [<small>]A[</small>]");

  //Cape Town
  let cptElement = document.querySelector("#cpt");
  let cptDateElement = cptElement.querySelector(".date");
  let cptTimeElement = cptElement.querySelector(".time");
  let cptTime = moment().tz("Africa/Johannesburg");

  cptDateElement.innerHTML = cptTime.format("MMMM Do YYYY");
  cptTimeElement.innerHTML = cptTime.format("h:mm:ss [<small>]A[</small>]");
}

updateTime();
setInterval(updateTime, 1000);
