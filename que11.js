// let prompt = require("prompt-sync")();

// let marks = (parseInt(prompt("enter masks")))
let marks = 54;

if (marks<25){
    console.log("F GRADE")
}
else if((marks>=25) && (marks<=45)){
    console.log("E GRADE")

}
else if((marks>=45) && (marks<=50)){
    console.log("D GARDE")
}
else if((marks>=50) && (marks<=60)){
    console.log("C GRADE")
}
else if((marks>=60) && (marks<=70)){
    console.log("B GRADE")
}
else if((marks>=80)){
    console.log("A GRADE")
}
else{
    console.log("aere wrong")
}