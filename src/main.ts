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

function currScorePrint() {
  if (currCount == 1) {
    counter.innerHTML = `You've eaten ${currCount.toFixed(2)} fry! 👍`;
  } else {
    counter.innerHTML = `You've eaten ${currCount.toFixed(2)} fries! 🍟🍟🍟`;
  }
}
button.addEventListener("click", () => {
  currCount++;
  currScorePrint();
});

function increaseScore(count: number) {
  currCount += count;
  currScorePrint();
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
let upgradeTracker = 0;

let timeStart = Date.now();
function continuousGrowth() {
  if (Date.now() - timeStart > (1 / 60) * 1000) {
    increaseScore(upgradeTracker);
    window.requestAnimationFrame(continuousGrowth);
    timeStart = Date.now();
  } else {
    window.requestAnimationFrame(continuousGrowth);
  }
}
window.requestAnimationFrame(continuousGrowth);

const upgradeButton = document.createElement("button");
upgradeButton.innerHTML = "Upgrade!";
app.append(upgradeButton);

upgradeButton.addEventListener("click", () => {
  currCount -= 10;
  upgradeTracker += 1 / 60;
  currScorePrint();
});

function upgradeCountTracker() {
  if (currCount >= 10) {
    upgradeButton.disabled = false;
  } else {
    upgradeButton.disabled = true;
  }
  window.requestAnimationFrame(upgradeCountTracker);
}
window.requestAnimationFrame(upgradeCountTracker);
