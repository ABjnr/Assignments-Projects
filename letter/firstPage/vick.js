let optYes = document.querySelector("#optYes");
let optNo = document.querySelector("#optNo");
let submitBtn = document.querySelector("#submitBtn");
let resultDisplay = document.querySelector("#resultDisplay");
let username;
let start = true;

submitBtn.addEventListener("click", function () {
  if (!start) {
    resultDisplay.textContent =
      "Oops! You are not my baby. Refresh the page to try again.";
    optNo = null;
    optYes = null;
  }
  username = document.querySelector("#username").value.trim().toUpperCase();

  if (optYes.checked) {
    if (username == "VICTORIA") {
      resultDisplay.textContent = `Hola, ${username}.🤭❤️`;
      setTimeout(alertMe, 1500);
    } else {
      resultDisplay.textContent = `Sorry ${username}, that is not my baby's name.`;
    }
  } else if (optNo.checked) {
    resultDisplay.textContent = `Oops! Sorry ${username}, this letter is not meant for you.`;
    start = false;
  } else if (username == "") {
    resultDisplay.textContent = "Please put in your name";
  } else {
    resultDisplay.textContent = 'Choose between "Yes" or "No"';
  }
});

function alertMe() {
  if (confirm(`Hi baby, you will be redirected when you click "OK"`)) {
    window.location.href = "../secondPage/vickPage2.html";
    console.log("move to next page");
  } else {
    onCancelAlert();
  }
}

function onCancelAlert() {
  alert(
    `You are not serious, click "OK" and wait for the pop up and on the next pop up you MUST click "OK"`
  );
  alertMe();
}

/* function myConfetti() {
  const start = () => {
    setTimeout(function () {
      confetti.start();
    });
  };
  start();
}
 */
