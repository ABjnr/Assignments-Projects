const submitBtn = document.querySelector("#submitBtn");
const conInput = document.querySelector("#conInput");
const apiKey = "cb4bd888bd08f00bbb367d163f2b86b8";
const resultDisp = document.querySelector("#resultDisp");
const displayDiv = document.querySelector("#displayDiv");
const changeDeg = document.querySelector("#changeDeg");
let clickCount = 0;

submitBtn.addEventListener("click", function () {
  displayDiv.textContent = "";
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
      console.error(error);
    }
  }
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
