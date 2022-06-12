let events = [];
for (const value of gameEvents.values()) {
  if (!events.includes(value)) {
    events.push(value);
  }
}
console.log("Events happened in Games are");
console.log(events);
console.log(
  "===========================================================task1 ends here"
); //task1 ends here

console.log("Yellow card from 64mins was unfair");
gameEvents.delete(64);
console.log(gameEvents);

console.log(
  "===========================================================task2 ends here"
); //task2 ends here

console.log("An event happened, on average, every 9 minutes");

let log = {};
events.forEach((i) => {
  log[i] = 0;
});

function computeLog(condition1, condition2) {
  let count = [];
  gameEvents.forEach((value, key) => {
    if (key > condition1 && key <= condition2) {
      count.push(value);
    }
  });
  if (count.length > 0) {
    events.forEach((i) => {
      count.forEach((j) => {
        if (i === j) {
          log[i] = log[i] + 1;
        }
      });
    });
  }
}
function printLog(log) {
  for (const i in log) {
    console.log(`${i} : ${log[i]}`);
  }
}
console.log(`Event happened in first 9minutes`);

computeLog(0, 9);
printLog(log);

console.log(`Event happened in second 9minutes`);

computeLog(9, 18);
printLog(log);

console.log(`Event happened in third 9minutes`);

computeLog(18, 27);
printLog(log);

console.log(`Event happened in fourth 9minutes`);

computeLog(27, 36);
printLog(log);

console.log(`Event happened in fifth 9minutes`);

computeLog(36, 45);
printLog(log);

console.log(`Event happened in sixth 9minutes`);

computeLog(45, 54);
printLog(log);

console.log(`Event happened in seventh 9minutes`);

computeLog(54, 63);
printLog(log);

console.log(`Event happened in eigth 9minutes`);

computeLog(63, 72);
printLog(log);

console.log(`Event happened in ninth 9minutes`);

computeLog(72, 81);
printLog(log);

console.log(`Event happened in tenth 9minutes`);

computeLog(81, 90);
printLog(log);

console.log(
  "===========================================================task3 ends here"
); //task3 ends here

gameEvents.forEach((value, key) => {
  if (key <= 45) {
    console.log(`[FIRST HALF] ${key}: ${value}`);
  } else if (key > 45 && key <= 90) {
    console.log(`[SECOND HALF] ${key}: ${value}`);
  }
});

console.log(
  "===========================================================task4 ends here"
); //task4 ends here
