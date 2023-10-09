import "./style.css";

const app: HTMLDivElement = document.querySelector("#app")!;

const gameName = "🍟 Fries Game 🍟";

document.title = gameName;

interface Item {
  name: string;
  cost: number;
  rate: number;
}

const availableItems: Item[] = [
  { name: "Scoop of fries", cost: 10, rate: 0.1 },
  { name: "Cup of fries", cost: 100, rate: 2 },
  { name: "Basket of fries", cost: 1000, rate: 50 },
];

const header = document.createElement("h1");
header.innerHTML = gameName;
app.append(header);

let currCount = 0;

const counter = document.createElement("div");
currScorePrint();
app.append(counter);

const button = document.createElement("button");
button.innerHTML = "Eat a fry!";
app.append(button);

function currScorePrint() {
  counter.innerHTML = `You've eaten ${currCount.toFixed(2)} fries! 🍟🍟🍟`;
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
let upgradeATracker = 0;
let upgradeBTracker = 0;
let upgradeCTracker = 0;

let timeStart = Date.now();
function continuousGrowth() {
  // if delta time > 1/60 of a sec in milliseconds
  if (Date.now() - timeStart > (1 / 60) * 1000) {
    // increase score by 1/60 (since 60 is a whole second so this is only part of rate)
    increaseScore(upgradeTracker * (1 / 60));
    timeStart = Date.now();
  }
  window.requestAnimationFrame(continuousGrowth);
}
window.requestAnimationFrame(continuousGrowth);

const upgradeDiv = document.createElement("div");
app.append(upgradeDiv);

const upgradeButtonA = document.createElement("button");
upgradeButtonA.innerHTML = `${
  availableItems[0].name
} cost: ${availableItems[0].cost.toFixed(2)}`;
app.append(upgradeButtonA);

upgradeButtonA.addEventListener("click", () => {
  currCount -= availableItems[0].cost;
  upgradeTracker += availableItems[0].rate;
  upgradeATracker++;
  availableItems[0].cost *= 1.15;
  currDisplayPrint();
  currScorePrint();
  updateDisplayPrint();
  updateUpgradePrint();
});

const upgradeButtonB = document.createElement("button");
upgradeButtonB.innerHTML = `${
  availableItems[1].name
} cost: ${availableItems[1].cost.toFixed(2)}`;
app.append(upgradeButtonB);

upgradeButtonB.addEventListener("click", () => {
  currCount -= availableItems[1].cost;
  upgradeTracker += availableItems[1].rate;
  upgradeBTracker++;
  availableItems[1].cost *= 1.15;
  currDisplayPrint();
  currScorePrint();
  updateDisplayPrint();
  updateUpgradePrint();
});

const upgradeButtonC = document.createElement("button");
upgradeButtonC.innerHTML = `${
  availableItems[2].name
} cost: ${availableItems[2].cost.toFixed(2)}`;
app.append(upgradeButtonC);

upgradeButtonC.addEventListener("click", () => {
  currCount -= availableItems[2].cost;
  upgradeTracker += availableItems[2].rate;
  upgradeCTracker++;
  availableItems[2].cost *= 1.15;
  currDisplayPrint();
  currScorePrint();
  updateDisplayPrint();
  updateUpgradePrint();
});

function upgradeCountTracker() {
  if (currCount >= availableItems[0].cost) {
    upgradeButtonA.disabled = false;
  } else {
    upgradeButtonA.disabled = true;
  }
  if (currCount >= availableItems[1].cost) {
    upgradeButtonB.disabled = false;
  } else {
    upgradeButtonB.disabled = true;
  }
  if (currCount >= availableItems[2].cost) {
    upgradeButtonC.disabled = false;
  } else {
    upgradeButtonC.disabled = true;
  }
  window.requestAnimationFrame(upgradeCountTracker);
}
window.requestAnimationFrame(upgradeCountTracker);

const statDisplay = document.createElement("div");
currDisplayPrint;
app.append(statDisplay);

function currDisplayPrint() {
  statDisplay.innerHTML = `You're currently eating ${upgradeTracker.toFixed(
    1,
  )} fries/sec! `;
}

const upgradeDisplay = document.createElement("div");
updateDisplayPrint();
app.append(upgradeDisplay);

function updateDisplayPrint() {
  upgradeDisplay.innerHTML = `You're bought ${upgradeATracker} ${availableItems[0].name},  ${upgradeBTracker} ${availableItems[1].name}, and ${upgradeCTracker} ${availableItems[2].name}!`;
}

function updateUpgradePrint() {
  upgradeButtonA.innerHTML = `${
    availableItems[0].name
  } cost: ${availableItems[0].cost.toFixed(2)}`;
  upgradeButtonB.innerHTML = `${
    availableItems[1].name
  } cost: ${availableItems[1].cost.toFixed(2)}`;
  upgradeButtonC.innerHTML = `${
    availableItems[2].name
  } cost: ${availableItems[2].cost.toFixed(2)}`;
}
