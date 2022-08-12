/* 
4.  You got your final exam result. Your total score is 85. The grading chart is in the below:

    80 or above A grade
    60 or above B grade
    50 or above C grade
    40 or above D grade
    39 or less  F grade

    Write a program to find your grade using if-else.

*/

const score = 85;

if (score >= 80 && score <= 100) {
    console.log("You got 'A' grade")
}
else if (score >= 60) {
    console.log("You got 'B' grade")
}
else if (score >= 50) {
    console.log("You got 'C' grade")
}
else if (score >= 40) {
    console.log("You got 'D' grade")
}
else if (score <= 39) {
    console.log("You got 'F' grade")
}
else {
    console.log("Please give a number from 1-100")
}