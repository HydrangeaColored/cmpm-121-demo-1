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
let upgradeATracker = 0;
let upgradeBTracker = 0;
let upgradeCTracker = 0;
let upgradeAPrice = 10;
let upgradeBPrice = 100;
let upgradeCPrice = 1000;

let timeStart = Date.now();
function continuousGrowth() {
  if (Date.now() - timeStart > (1 / 60) * 1000) {
    increaseScore(upgradeTracker * (1 / 30));
    window.requestAnimationFrame(continuousGrowth);
    timeStart = Date.now();
  } else {
    window.requestAnimationFrame(continuousGrowth);
  }
}
window.requestAnimationFrame(continuousGrowth);

const upgradeDiv = document.createElement("div");
app.append(upgradeDiv);

const upgradeButtonA = document.createElement("button");
upgradeButtonA.innerHTML = `Upgrade A cost: ${upgradeAPrice.toFixed(2)}`;
app.append(upgradeButtonA);

upgradeButtonA.addEventListener("click", () => {
  currCount -= 10;
  upgradeTracker += 0.1;
  upgradeATracker++;
  upgradeAPrice *= 1.15;
  currDisplayPrint();
  currScorePrint();
  updateDisplayPrint();
  updateUpgradePrint();
});

const upgradeButtonB = document.createElement("button");
upgradeButtonB.innerHTML = `Upgrade B cost: ${upgradeBPrice.toFixed(2)}`;
app.append(upgradeButtonB);

upgradeButtonB.addEventListener("click", () => {
  currCount -= 100;
  upgradeTracker += 2;
  upgradeBTracker++;
  upgradeBPrice *= 1.15;
  currDisplayPrint();
  currScorePrint();
  updateDisplayPrint();
  updateUpgradePrint();
});

const upgradeButtonC = document.createElement("button");
upgradeButtonC.innerHTML = `Upgrade C cost: ${upgradeCPrice.toFixed(2)}`;
app.append(upgradeButtonC);

upgradeButtonC.addEventListener("click", () => {
  currCount -= 1000;
  upgradeTracker += 50;
  upgradeCTracker++;
  upgradeCPrice *= 1.15;
  currDisplayPrint();
  currScorePrint();
  updateDisplayPrint();
  updateUpgradePrint();
});

function upgradeCountTracker() {
  if (currCount >= upgradeAPrice) {
    upgradeButtonA.disabled = false;
  } else {
    upgradeButtonA.disabled = true;
  }
  if (currCount >= upgradeBPrice) {
    upgradeButtonB.disabled = false;
  } else {
    upgradeButtonB.disabled = true;
  }
  if (currCount >= upgradeCPrice) {
    upgradeButtonC.disabled = false;
  } else {
    upgradeButtonC.disabled = true;
  }
  window.requestAnimationFrame(upgradeCountTracker);
}
window.requestAnimationFrame(upgradeCountTracker);

const statDisplay = document.createElement("div");
statDisplay.innerHTML = `You're currently eating ${upgradeTracker.toFixed(
  1,
)} fries/sec! `;
app.append(statDisplay);

function currDisplayPrint() {
  statDisplay.innerHTML = `You're currently eating ${upgradeTracker.toFixed(
    1,
  )} fries/sec! `;
}

const upgradeDisplay = document.createElement("div");
upgradeDisplay.innerHTML = `You're bought ${upgradeATracker} upgrade As,  ${upgradeBTracker} upgrade Bs, and ${upgradeCTracker} upgradeCs!`;
app.append(upgradeDisplay);

function updateDisplayPrint() {
  upgradeDisplay.innerHTML = `You're bought ${upgradeATracker} upgrade As,  ${upgradeBTracker} upgrade Bs, and ${upgradeCTracker} upgradeCs!`;
}

function updateUpgradePrint() {
  upgradeButtonA.innerHTML = `Upgrade A cost: ${upgradeAPrice.toFixed(2)}`;
  upgradeButtonB.innerHTML = `Upgrade B cost: ${upgradeBPrice.toFixed(2)}`;
  upgradeButtonC.innerHTML = `Upgrade C cost: ${upgradeCPrice.toFixed(2)}`;
}
