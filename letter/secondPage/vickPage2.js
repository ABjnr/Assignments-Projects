const revBtn = document.querySelector("#revBtn");
const unique = document.querySelector("#unique");

async function quotes() {
  try {
    const response = await fetch("../secondPage/letters.json");
    if (!response.ok) {
      throw new Error("something went wrong!");
    }

    const { love_notes } = await response.json();
    displayEach(love_notes);
  } catch (error) {
    console.error = error;
  }
}

function displayEach(love_notes) {
  revBtn.addEventListener("click", function () {
    const envelope = document.querySelector(".envelope");
    const uniqueText = document.getElementById("unique");

    if (!envelope.classList.contains("open")) {
      envelope.classList.add("open");
    } else {
      // Change the content of the letter on subsequent clicks
      uniqueText.textContent =
        "Dear [Name],\nThis is another message for you. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.";
    }

    for (let i = 0; i < love_notes.length; i++) {
      const pick = Math.floor(Math.random() * love_notes.length);
      unique.textContent = love_notes[pick];
    }
  });
}
quotes();
