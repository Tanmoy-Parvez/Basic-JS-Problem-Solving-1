/* 
3.  You are given a triangle with the sides 9, 8, 9. Write a program to check whether a triangle 
    is Isosceles or not using if-else. (Isosceles => two sides are equal.)
*/

const side_a = 9;
const side_b = 8;
const side_c = 9;

if (side_a === side_b || side_a === side_c) {
    console.log("The triangle is isosceles.")
}
else if (side_b === side_a || side_b === side_c) {
    console.log("The triangle is isosceles.")
}
else {
    console.log("The triangle is not isosceles.")
}