/*Problem 4: Arrays
You're organizing a party and want to keep track of the guest list.
 Create an array called "guestList" and add the names of at least five guests. 
 Then, write a program that checks if a given name is on the guest list. 
 If the name is found, display "Welcome to the party, [name]!";
  otherwise, display "Sorry, you're not on the guest list."*/

const prompt = require('prompt-sync')();
const guest = ['aaa', 'bbb', 'ccc', 'ddd', 'eee'];

const name = prompt('Enter Your Name ');



if (guest.includes(name)) {

    console.log(`Welcome to the party ${name}`);
    
    
}
else {
    console.log(`Sorry You are not in the Guest List ${name}`);

}
