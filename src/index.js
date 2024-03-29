function setDateTime() {
  let losAngelesElement = document.querySelector("#los-angeles");
  if (losAngelesElement) {
    let losAngelesDate = losAngelesElement.querySelector(".date");
    let losAngelesTime = losAngelesElement.querySelector(".time");
    let losAngelesTimeZone = moment().tz("America/Los_Angeles");

    losAngelesDate.innerHTML = losAngelesTimeZone.format("MMMM Do, YYYY");
    losAngelesTime.innerHTML = losAngelesTimeZone.format("HH:mm:ss");
  }

  let parisElement = document.querySelector("#paris");
  if (parisElement) {
    let parisDate = parisElement.querySelector(".date");
    let parisTime = parisElement.querySelector(".time");
    let parisTimeZone = moment().tz("Europe/Paris");

    parisDate.innerHTML = parisTimeZone.format("MMMM Do, YYYY");
    parisTime.innerHTML = parisTimeZone.format("HH:mm:ss");
  }

  let sydneyElement = document.querySelector("#sydney");
  if (sydneyElement) {
    let sydneyDate = sydneyElement.querySelector(".date");
    let sydneyTime = sydneyElement.querySelector(".time");
    let sydneyTimeZone = moment().tz("Australia/Sydney");

    sydneyDate.innerHTML = sydneyTimeZone.format("MMMM Do, YYYY");
    sydneyTime.innerHTML = sydneyTimeZone.format("HH:mm:ss");
  }
}

function changeCity() {
  if (!cityTimeZone) return;
  if (cityTimeZone === "current") {
    cityTimeZone = moment.tz.guess();
  }

  let cityName = cityTimeZone.split("/")[1];
  let cityTime = moment().tz(cityTimeZone);

  let cityElement = document.querySelector("#cities");
  cityElement.innerHTML = `
      <div class="city">
        <div>
          <h2>${cityName}</h2>
          <div class="date">${cityTime.format("MMMM Do, YYYY")}</div>
        </div>
        <div class="time">${cityTime.format("HH:mm:ss")}</div>
      </div>
      <div class="back"><a href="/">Back to all cities</a></div>
    `;
}

setDateTime();
setInterval(setDateTime, 1000);

let citySelector = document.querySelector("#city-selector");
citySelector.addEventListener("change", function (event) {
  cityTimeZone = event.target.value;
  changeCity();
});

let cityTimeZone = null;

setInterval(changeCity, 1000);
