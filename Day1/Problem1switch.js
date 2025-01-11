/*You run a movie theater, and you want to offer discounts based on a person's age. Write a JavaScript program that asks the user for their age and then displays a message:

- If the age is less than 18, display "You get a 20% discount!"

- If the age is between 18 and 65 (inclusive), display "Normal ticket price applies."

- If the age is 65 or older, display "You get a 30% senior discount!"*/

const prompt = require('prompt-sync')();

const age = prompt('Enter Your Age ');

switch (true) {
    
    case age < 18 :
        console.log("You get a 20% Discount");
        break;
    
    case age > 18 && age < 60:
        console.log("Normal Ticket Price applies");
        break;
    case age > 60 && age < 100:
        
        console.log('You get a 30% senior discount');
        break;
    default:console.log("You Have Entered Invalid age");
    
        
        
        
    
}
