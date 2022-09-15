/* Tutorial 4
   Example 2 JavaScript code
*/


console.log("Nolann Holvoet's Output from Tutorial 4 Example 6");

const value = prompt("Enter a number ")

if (!isNaN(value)) {
    for(let i = 0; i < 11; i++) {
        let result = value * i;
        console.log(`${value} x ${i} = ${result}`);
    }
}
else {
    console.log("please enter a number..(refresh page)")
}