let i = 1;
scored.forEach((element) => {
  console.log(`Goal ${i}:${element}`);
  i++;
});
console.log("===========================================================task1 ends here"); //task1 ends here



let sum = 0;
oddsValue.forEach((element) => {
  sum = sum + element;
});
let average = (sum / oddsValue.length).toFixed(3);
console.log(`Average of Odds is : ${average}`);

console.log("===========================================================task2 ends here"); //task2 ends here



odds.forEach((element) => {
  if (element.name === "Draw") {
    console.log(`Odd of ${element.name}: ${element.value}`);
  } else {
    console.log(`Odd of victory ${element.name}: ${element.value}`);
  }
});

console.log("===========================================================task3 ends here"); //task3 ends here



let scores = {};
scored.forEach(function (i) {
  scores[i] = (scores[i] || 0) + 1;
});
console.log(scores);

console.log("===========================================================task4 ends here"); //task4 ends here
