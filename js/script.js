const div = document.querySelectorAll(".question");
const question = document.querySelectorAll(".question h4");
const click = document.querySelectorAll(".question h4 span svg");

for (let i = 0; i < question.length; i++) {
  question[i].addEventListener("click", () => {
    div[i].className == "question"
      ? (div[i].className = "response")
      : (div[i].className = "question");
    click[i].classList.toggle("rotate");
  });
}
