const audio = new Audio("assets/click.mp3");
const buttons = document.querySelectorAll("button")

buttons.forEach(button => {
  button.addEventListener ("click", () => {
    audio.play();
  });
});
