/* 
2.  You are given three numbers 13, 79, and 45. Write a program that will print the largest 
    number using if-else.
*/

const number_1 = 13;
const number_2 = 79;
const number_3 = 45;

if (number_1 > number_2 && number_1 > number_3) {
    console.log("The largest number is:" + number_1);
}
else if (number_2 > number_1 && number_2 > number_3) {
    console.log("The largest number is:" + number_2);
}
else {
    console.log("The largest number is:" + number_3)
}