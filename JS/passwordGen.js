const generateBtn = document.querySelector("#generateBtn");
const newPassword = document.querySelector("#newPassword");

function randPass(length) {
  let characters =
    "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%^&*()_+{}[]|:;<>,.?/~";
  let password = "";

  console.log(characters[83]);
  console.log(Math.floor(Math.random() * characters.length));
  for (let i = 0; i < length; i += 1) {
    randIndex = Math.floor(Math.random() * characters.length);

    password += characters[randIndex];
  }
  return password;
}

function display(output) {
  newPassword.textContent = output;
}
generateBtn.addEventListener("click", () => {
  const password = randPass(15);
  display(`Your new password is: ${password}`);
  console.log(password);
});
