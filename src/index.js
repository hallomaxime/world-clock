setInterval(setDateTime, 1000);

function setDateTime() {
  let losAngelesElement = document.querySelector("#los-angeles");
  let losAngelesDate = losAngelesElement.querySelector(".date");
  let losAngelesTime = losAngelesElement.querySelector(".time");
  let losAngelesTimeZone = moment().tz("America/Los_Angeles");

  losAngelesDate.innerHTML = losAngelesTimeZone.format("MMMM Do, YYYY");
  losAngelesTime.innerHTML = losAngelesTimeZone.format("HH:mm:ss");

  let sydneyElement = document.querySelector("#sydney");
  let sydneyDate = sydneyElement.querySelector(".date");
  let sydneyTime = sydneyElement.querySelector(".time");
  let sydneyTimeZone = moment().tz("Australia/Sydney");

  sydneyDate.innerHTML = sydneyTimeZone.format("MMMM Do, YYYY");
  sydneyTime.innerHTML = sydneyTimeZone.format("HH:mm:ss");
}
