/* Write a program to calculate the average marks of Mathematics=95, Biology=80, Chemistry=75, Physics=70, and English=90 of a student. */

const mathematics = 95;
const biology = 80;
const chemistry = 75;
const physics = 70;
const english = 90;

const totalSubjects = 5;

const avg_marks = (mathematics + biology + chemistry + physics + english) / totalSubjects;

console.log(avg_marks);