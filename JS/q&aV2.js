let userAns = {};

async function questions() {
  try {
    const response = await fetch("data.json");
    if (!response.ok) {
      throw new Error("Network Error!");
    }

    const { questions } = await response.json();

    displayQuestions(questions);
  } catch (error) {
    console.error(`This was the error: ${error}`);
  }
}

function displayQuestions(questions) {
  const questsCont = document.getElementById("questions");

  questions.forEach((questionData, index) => {
    const questionDiv = document.createElement("div");
    questionDiv.className = "displayQuestions";
    questionDiv.dataset.correctAnswer = questionData.correct_answer;
    questionDiv.innerHTML = `
      <h3>Questions ${index + 1}:</h3>
      <p>${questionData.question}</p>
      <form id="question-${index}">
        <label>
          <input type="radio" name="answer-${index}" value="A" /> A.
          ${questionData.options.A} </label
        ><br />
        <label>
          <input type="radio" name="answer-${index}" value="B" /> B.
          ${questionData.options.B}</label
        >
        <br />
        <label>
          <input type="radio" name="answer-${index}" value="C" /> C.
          ${questionData.options.C}</label
        >
        <br />
        <label>
          <input type="radio" name="answer-${index}" value="D" /> D.
          ${questionData.options.D}
        </label>
        <br />

      </form>`;
    questsCont.appendChild(questionDiv);
  });
}

function displayResult() {
  const questsCont = document.getElementById("questions");
  const Questions = questsCont.getElementsByClassName("displayQuestions");
  let score = 0;
  for (let i = 0; i < Questions.length; i++) {
    const form = document.getElementById(`question-${i}`);

    const userAns = form.querySelector(`input[name="answer-${i}"]:checked`);

    if (userAns) {
      const questionIndex = parseInt(userAns.name.split("-")[1]);
      const selectedAns = userAns.value;
      userAns[questionIndex] = selectedAns;
      if (selectedAns === Questions[i].dataset.correctAnswer) {
        score++;
      }
    }
  }
  const displayingResult = document.getElementById("result");
  displayingResult.textContent = `Your score is: ${score}/${Questions.length}`;
}
document.getElementById("submitBtn").addEventListener("click", displayResult);
window.onload = questions;
