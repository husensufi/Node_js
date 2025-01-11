/*Create a JavaScript program to calculate the area of a rectangle. 
Ask the user for the length and width of the rectangle and store them in variables.
 Calculate and display the area using the formula: 'area = length" width*/

const prompt = require('prompt-sync')();

const length = prompt('Enter a value of length ');
const width = prompt('Enter a value of width ');

const area = length * width;

console.log("The area of rectangle is ", area);
