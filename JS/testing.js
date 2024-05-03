async function jsonQuestions() {
  try {
    const response = await fetch("data.json");
    if (!response.ok) {
      throw new Error("Something went wrong!");
    }
    const { questions } = await response.json();
    console.log(questions);
  } catch (error) {
    console.error(`${error}`);
  }
}

function displayQuestions(questions) {
  const questionContainer = document.querySelector("#questionDiv");

  questions.forEach((questionData, index) => {
    const questionDiv = document.createElement("div");
    questionDiv.className = "questionDisplay";
    q;
  });
}

jsonQuestions();
