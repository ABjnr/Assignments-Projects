const ChkBtn = document.querySelector("#btnClk");
const result = document.querySelector("#result");

ChkBtn.addEventListener("click", function () {
  console.log("clicked");
  if (navigator.onLine) {
    result.textContent = "You are online";
    console.log("online");
  } else {
    result.textContent = "You are offline";
    console.log("offline");
  }
});
