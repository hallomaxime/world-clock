function setDateTime() {
  let losAngelesElement = document.querySelector("#los-angeles");
  if (losAngelesElement) {
    let losAngelesDate = losAngelesElement.querySelector(".date");
    let losAngelesTime = losAngelesElement.querySelector(".time");
    let losAngelesTimeZone = moment().tz("America/Los_Angeles");

    losAngelesDate.innerHTML = losAngelesTimeZone.format("MMMM Do, YYYY");
    losAngelesTime.innerHTML = losAngelesTimeZone.format("HH:mm:ss");
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

function changeCity(event) {
  let cityTimeZone = event.target.value;
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
    `;
}

setDateTime();
setInterval(setDateTime, 1000);

let citySelector = document.querySelector("#city-selector");
citySelector.addEventListener("change", changeCity);
