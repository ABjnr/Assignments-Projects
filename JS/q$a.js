const submitBtn = document.querySelector("#submitBtn");
const num1ans = document.querySelector("#q1o4");
const num2ans = document.querySelector("#q2o3");
const num3ans = document.querySelector("#q3o1");
const num4ans = document.querySelector("#q4o4");
const num5ans = document.querySelector("#q5o4");
const num6ans = document.querySelector("#q6o3");
const num7ans = document.querySelector("#q7o4");
const num8ans = document.querySelector("#q8o1");
const num9ans = document.querySelector("#q9o3");
const num10ans = document.querySelector("#q10o1");

// let score = 0;
submitBtn.addEventListener("click", () => {
  let score = 0;
  if (num1ans.checked == true) {
    score += 1;
  }
  if (num2ans.checked == true) {
    score += 1;
  }
  if (num3ans.checked == true) {
    score += 1;
  }
  if (num4ans.checked == true) {
    score += 1;
  }
  if (num5ans.checked == true) {
    score += 1;
  }
  if (num6ans.checked == true) {
    score += 1;
  }
  if (num7ans.checked == true) {
    score += 1;
  }
  if (num8ans.checked == true) {
    score += 1;
  }
  if (num9ans.checked == true) {
    score += 1;
  }
  if (num10ans.checked == true) {
    score += 1;
  }
  const answer = score;
  console.log(answer);
});
/* 
const answer = score;
console.log(answer);
 */
