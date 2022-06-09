let team1Name = game.team1;
let team2Name = game.team2;

let players = game.players;
let [players1, players2] = players;
console.log("Players1");
console.log(players1);
console.log("Players2");
console.log(players2);
console.log("==========================================================="); //task1 ends here

function findGoalKeeper(arr, teamName) {
  let [gk, ...fieldPlayers] = arr;
  console.log(`GoalKeeper of ${teamName}: ` + gk);
  console.log(`FieldPlayers of ${teamName}: `);
  console.log(fieldPlayers);
}
findGoalKeeper(players1, team1Name);
findGoalKeeper(players2, team2Name);
console.log("==========================================================="); //task2 ends here

let allPlayers = [...players1, ...players2];
console.log(allPlayers);
console.log("==========================================================="); //task3 ends here

let players1Final = players1;
players1Final.push("Thiago", "Coutinho", "Perisic");
console.log(`FinalPlayers of ${team1Name}: `);
console.log(players1Final);
console.log("==========================================================="); //task4 ends here



let team1 = game.odds.team1;
let draw = game.odds.x;
let team2 = game.odds.team2;
console.log(`team1: ${team1}`);
console.log(`draw: ${draw}`);
console.log(`team2: ${team2}`);
console.log("==========================================================="); //task5 ends here



let scored = game.scored;
let scoredPlayer =  "'" + scored.join("','") + "'";

function printGoals(scoredPlayer = "'Davies','Muller','Lewandowski','Kimmich'") {
  let playersMadeGoal = scoredPlayer.split(",");
  console.log(`Total number of goals scored are: ${playersMadeGoal.length}`);
  console.log("Players scored goals are:");
  playersMadeGoal.forEach(element => {
    console.log(element);
  });
}
printGoals();
printGoals(scoredPlayer);
console.log("==========================================================="); //task6 ends here

let oddsValue=[team1,draw,team2];
let odds = [
  { name: "Team1", value: team1 },
  { name: "Draw", value: draw },
  { name: "Team2", value: team2 }
];
let likelyWin = odds.find((item)=>{
   return item.value === Math.min(...oddsValue);
})

console.log(`Likely Winning is ${likelyWin.name}`);
console.log("==========================================================="); //task7 ends here
