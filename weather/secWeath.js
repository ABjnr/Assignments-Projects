const submitBtn = document.querySelector("#submitBtn");
const conInput = document.querySelector("#conInput");
const apiKey = "cb4bd888bd08f00bbb367d163f2b86b8";
const resultDisp = document.querySelector("#resultDisp");
const displayDiv = document.querySelector("#displayDiv");
const changeDeg = document.querySelector("#changeDeg");
const randBtn = document.querySelector("#randBtn");
let clickCount = 0;

window.onload = function () {};

submitBtn.addEventListener("click", function () {
  displayDiv.textContent = "";

  console.clear();
  const cityName = conInput.value.toLowerCase();

  async function fetchData() {
    try {
      const response = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${apiKey}`
      );

      if (!response.ok) {
        throw new Error("Could not fetch weather data");
      }

      const data = await response.json();
      const {
        name: city,
        main: { temp, humidity },
        weather: [{ description }],
      } = data;

      firstResult(city, temp, humidity, description);

      changeDeg.addEventListener("click", function () {
        clickCount++;
        if (clickCount % 2 !== 0) {
          changeDeg.textContent = "Change to °C";
          displayDiv.innerHTML = `<p>
      The weather at ${city} is currently ${(
            (temp - 273.15) * (9 / 5) +
            32
          ).toFixed(1)}°F
      <br />
      Humidity: ${humidity}%
      <br />
      ${description}
    </p>`;
        } else {
          changeDeg.textContent = "Change to °F";
          displayDiv.innerHTML = `<p>
      The weather at ${city} is currently ${(temp - 273.15).toFixed(1)}°C
      <br />
      Humidity: ${humidity}%
      <br />
      ${description}
    </p>`;
        }
      });
    } catch (error) {
      ``;
      console.error(error);
    }
  }
  0;
  fetchData();
});

function firstResult(city, temp, humidity, description) {
  displayDiv.innerHTML = `<p>
      The weather at ${city} is currently ${(temp - 273.15).toFixed(1)}°C
      <br />
      Humidity: ${humidity}%
      <br />
      ${description}
    </p>`;

  changeDeg.style.visibility = "visible";
}

randBtn.addEventListener("click", function () {
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(showPostiton, showError);
  } else {
  }
});

const showPostiton = (position) => {
  console.log(position);
  let lat = position.coords.latitude;
  let long = position.coords.longitude;
  getLocationName(lat, long);
  console.log(lat, long);
};

function getLocationName(lat, long) {
  const url = `https://nominatim.openstreetmap.org/reverse?format=jsonv2&lat=${lat}&lon=${long}`;

  fetch(url)
    .then((response) => response.json())
    .then((data) => {
      const locationName = data.address.state;
      console.log(`Location Name: ${locationName}`);
    })
    .catch((error) => console.log("Request failed:", error));
}

const showError = (error) => {
  switch (error.code) {
    case error.PERMISSION_DENIED:
      alert("User denied the request for Geolocation");
      break;

    case error.POSITION_UNAVAILABLE:
      alert("Location information is unavailable");
      break;

    case error.TIMEOUT:
      alert("The request to get user location timed out");
      break;

    case error.UNKNOWN_ERROR:
      alert("An unknown error occured");
      break;

    default:
      alert("An unknown error occured");
  }
};

/* 
if (navigator.geolocation) {
  navigator.geolocation.getCurrentPosition(success, error);
} else {
  console.log("Geolocation is not supported by this browser.");
}

function success(position) {
  const latitude = position.coords.latitude;
  const longitude = position.coords.longitude;
  getLocationName(latitude, longitude);
}

function error() {
  console.log("Unable to retrieve your location.");
}

function getLocationName(latitude, longitude) {
  const url = `https://nominatim.openstreetmap.org/reverse?format=json&lat=${latitude}&lon=${longitude}`;

  fetch(url)
    .then((response) => response.json())
    .then((data) => {
      const locationName = data.display_name;
      console.log(`Location Name: ${locationName}`);
    })
    .catch((error) => console.log("Request failed:", error));
}
 */
