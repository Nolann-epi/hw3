/* Tutorial 4
   Example 1 JavaScript code
*/


console.log("Nolann Holvoet's Output from Tutorial 4 Example 1");

const num = prompt("Enter a number between 1 to 100")


if (!isNaN(num) && num > 0 && num < 101) {
    console.log(`Thank you! You entered ${num}, a valid number.`)
}

else {
    console.log(`Sorry, ${num} is not a valid entry.`)
}