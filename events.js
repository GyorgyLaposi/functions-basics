const buttonA = document.querySelector("#button-a");
const buttonB = document.querySelector("#button-b");
const result = document.querySelector("#result");

function handleButtonAClickEvent() {
  const ts = Date.now();

  // trick
  const line = document.createElement("div");
  line.innerText = "Button A Clicked!!!! " + ts;
  result.append(line);
}

function handleButtonAMouseEnterEvent() {
  const ts = Date.now();

  // trick
  const line = document.createElement("div");
  line.innerText = "Button A Mouse Entered" + ts;
  result.append(line);
}

function handleButtonBClickEvent() {
  const ts = Date.now();

  // trick
  const line = document.createElement("div");
  line.innerText = "Button B Clicked!!!! " + ts;
  result.append(line);
}

buttonA.addEventListener("click", handleButtonAClickEvent);
buttonB.addEventListener("click", handleButtonBClickEvent);
buttonA.addEventListener("mouseenter", handleButtonAMouseEnterEvent);
window.addEventListener("load", () => {
  const ts = Date.now();

  // trick
  const line = document.createElement("div");
  line.innerText = "Window loaded" + ts;
  result.append(line);
});
