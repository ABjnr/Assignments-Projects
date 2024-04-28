const submitBtn = document.querySelector("#submitBtn");
const result = document.querySelector("#result");
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

const q1Result = document.querySelector("#q1Result");
const q2Result = document.querySelector("#q2Result");
const q3Result = document.querySelector("#q3Result");
const q4Result = document.querySelector("#q4Result");
const q5Result = document.querySelector("#q5Result");
const q6Result = document.querySelector("#q6Result");
const q7Result = document.querySelector("#q7Result");
const q8Result = document.querySelector("#q8Result");
const q9Result = document.querySelector("#q9Result");
const q10Result = document.querySelector("#q10Result");

const radios = document.querySelectorAll("radio");

let score = 0;
submitBtn.addEventListener("click", (event) => {
  event.preventDefault();
  score = 0;

  if (num1ans.checked == true) {
    score += 1;
    q1Result.textContent = `Correct`;
  } else {
    q1Result.textContent = `Incorrect`;
  }

  if (num2ans.checked == true) {
    score += 1;
    q2Result.textContent = `Correct`;
  } else {
    q2Result.textContent = `Incorrect`;
  }

  if (num3ans.checked == true) {
    score += 1;
    q3Result.textContent = `Correct`;
  } else {
    q3Result.textContent = `Incorrect`;
  }

  if (num4ans.checked == true) {
    score += 1;
    q4Result.textContent = `Correct`;
  } else {
    q4Result.textContent = `Incorrect`;
  }

  if (num5ans.checked == true) {
    score += 1;
    q5Result.textContent = `Correct`;
  } else {
    q5Result.textContent = `Incorrect`;
  }

  if (num6ans.checked == true) {
    score += 1;
    q6Result.textContent = `Correct`;
  } else {
    q6Result.textContent = `Incorrect`;
  }

  if (num7ans.checked == true) {
    score += 1;
    q7Result.textContent = `Correct`;
  } else {
    q7Result.textContent = `Incorrect`;
  }

  if (num8ans.checked == true) {
    score += 1;
    q8Result.textContent = `Correct`;
  } else {
    q8Result.textContent = `Incorrect`;
  }

  if (num9ans.checked == true) {
    score += 1;
    q9Result.textContent = `Correct`;
  } else {
    q9Result.textContent = `Incorrect`;
  }

  if (num10ans.checked == true) {
    score += 1;
    q10Result.textContent = `Correct`;
  } else {
    q10Result.textContent = `Incorrect`;
  }

  console.log(score);

  result.textContent = `Your score is: ${score}`;
  /* q1Result.textContent = `Ans: 0`;
  q2Result.textContent = `Ans: Brazil`;
  q3Result.textContent = `Ans: Venus`;
  q4Result.textContent = `Ans: AB-Negative`;
  q5Result.textContent = `Ans: Kansas`;
  q6Result.textContent = `Ans: Nile`;
  q7Result.textContent = `Ans: Iron`;
  q8Result.textContent = `Ans: Chinese`;
  q9Result.textContent = `Ans: 3`;
  q10Result.textContent = `Ans: Jupiter`; */
});

/* 
const answer = score;
console.log(answer);
 */
