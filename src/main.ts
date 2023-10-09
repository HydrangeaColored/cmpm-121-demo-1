import "./style.css";

const app: HTMLDivElement = document.querySelector("#app")!;

const gameName = "🍟 Fries Game 🍟";

document.title = gameName;

interface Item {
  name: string;
  cost: number;
  rate: number;
  description: string;
}

const availableItems: Item[] = [
  {
    name: "Scoop of fries",
    cost: 10,
    rate: 0.1,
    description: "Only a small handful",
  },
  {
    name: "Cup of fries",
    cost: 100,
    rate: 2,
    description: "More than a happy meal",
  },
  {
    name: "Basket of fries",
    cost: 1000,
    rate: 50,
    description: "5 guys' version of small fries",
  },
  {
    name: "Truck of fries",
    cost: 10000,
    rate: 300,
    description: "You got a U-haul truck handy?",
  },
  {
    name: "Pool of fries",
    cost: 100000,
    rate: 10500,
    description: "(warning may induce health problems)",
  },
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
let upgradeDTracker = 0;
let upgradeETracker = 0;

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

const upgradeButtonD = document.createElement("button");
upgradeButtonD.innerHTML = `${
  availableItems[3].name
} cost: ${availableItems[3].cost.toFixed(2)}`;
app.append(upgradeButtonD);

upgradeButtonD.addEventListener("click", () => {
  currCount -= availableItems[3].cost;
  upgradeTracker += availableItems[3].rate;
  upgradeDTracker++;
  availableItems[3].cost *= 1.15;
  currDisplayPrint();
  currScorePrint();
  updateDisplayPrint();
  updateUpgradePrint();
});

const upgradeButtonE = document.createElement("button");
upgradeButtonE.innerHTML = `${
  availableItems[4].name
} cost: ${availableItems[4].cost.toFixed(2)}`;
app.append(upgradeButtonE);

upgradeButtonE.addEventListener("click", () => {
  currCount -= availableItems[4].cost;
  upgradeTracker += availableItems[4].rate;
  upgradeETracker++;
  availableItems[4].cost *= 1.15;
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
  if (currCount >= availableItems[3].cost) {
    upgradeButtonD.disabled = false;
  } else {
    upgradeButtonD.disabled = true;
  }
  if (currCount >= availableItems[4].cost) {
    upgradeButtonE.disabled = false;
  } else {
    upgradeButtonE.disabled = true;
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
  upgradeDisplay.innerHTML = `You're bought ${upgradeATracker} ${availableItems[0].name},  ${upgradeBTracker} ${availableItems[1].name}, ${upgradeCTracker} ${availableItems[2].name}, ${upgradeDTracker} ${availableItems[3].name}, and ${upgradeETracker} ${availableItems[4].name}!`;
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
  upgradeButtonD.innerHTML = `${
    availableItems[3].name
  } cost: ${availableItems[3].cost.toFixed(2)}`;
  upgradeButtonE.innerHTML = `${
    availableItems[4].name
  } cost: ${availableItems[4].cost.toFixed(2)}`;
}

upgradeButtonA.addEventListener("mouseover", () => {
  upgradeButtonA.innerHTML = `${availableItems[0].description}`;
});
upgradeButtonA.addEventListener("mouseout", () => {
  updateUpgradePrint();
});
upgradeButtonB.addEventListener("mouseover", () => {
  upgradeButtonB.innerHTML = `${availableItems[1].description}`;
});
upgradeButtonB.addEventListener("mouseout", () => {
  updateUpgradePrint();
});
upgradeButtonC.addEventListener("mouseover", () => {
  upgradeButtonC.innerHTML = `${availableItems[2].description}`;
});
upgradeButtonC.addEventListener("mouseout", () => {
  updateUpgradePrint();
});
upgradeButtonD.addEventListener("mouseover", () => {
  upgradeButtonD.innerHTML = `${availableItems[3].description}`;
});
upgradeButtonD.addEventListener("mouseout", () => {
  updateUpgradePrint();
});
upgradeButtonE.addEventListener("mouseover", () => {
  upgradeButtonE.innerHTML = `${availableItems[4].description}`;
});
upgradeButtonE.addEventListener("mouseout", () => {
  updateUpgradePrint();
});
