import "./style.css";

const app: HTMLDivElement = document.querySelector("#app")!;

const gameName = "🍟 Fries Game 🍟";

document.title = gameName;

const header = document.createElement("h1");
header.innerHTML = gameName;
app.append(header);

let currCount = 0;

const counter = document.createElement("div");
counter.innerHTML = `You've eaten ${currCount} fries! 😔`;
app.append(counter);

const button = document.createElement("button");
button.innerHTML = "Eat a fry!";
app.append(button);

button.addEventListener("click", () => {
  currCount++;
  if (currCount == 1) {
    counter.innerHTML = `You've eaten ${currCount.toFixed(2)} fry! 👍`;
  } else {
    counter.innerHTML = `You've eaten ${currCount.toFixed(2)} fries! 🍟🍟🍟`;
  }
});

function increaseScore(count = 1) {
  currCount += count;
  if (currCount == 1) {
    counter.innerHTML = `You've eaten ${currCount.toFixed(2)} fry! 👍`;
  } else {
    counter.innerHTML = `You've eaten ${currCount.toFixed(2)} fries! 🍟🍟🍟`;
  }
}

/*setInterval(IntervalIncrement, 1000);

function IntervalIncrement() {
  currCount++;
  if (currCount == 1) {
    counter.innerHTML = `You've eaten ${currCount} fry! 👍`;
  } else {
    counter.innerHTML = `You've eaten ${currCount} fries! 🍟🍟🍟`;
  }
}*/

let timeStart = Date.now();
function continuousGrowth() {
  if (Date.now() - timeStart > (1 / 60) * 1000) {
    increaseScore(1 / 60);
    window.requestAnimationFrame(continuousGrowth);
    timeStart = Date.now();
  } else {
    window.requestAnimationFrame(continuousGrowth);
  }
}
window.requestAnimationFrame(continuousGrowth);
