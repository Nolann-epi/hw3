/* Tutorial 4
   Example 2 JavaScript code
*/


console.log("Nolann Holvoet's Output from Tutorial 4 Example 2");

let hours = prompt("Enter hours");
let minuts = prompt("Enter minuts");
let seconds = prompt("Enter seconds");

if (isNaN(hours) || isNaN(minuts) || isNaN(seconds)) {
    console.log("Invalid entries please refresh")
}
else {
    console.log(`Time input: ${hours}h${minuts}m${seconds}`);
    seconds++;
    if (seconds === 60) {
        seconds = 0;
        minuts++;
        if (minuts === 60) {
            minuts = 0;
            hours++;
            if (hours === 24) {
                hours = 0;
            }
        }
    }
    console.log(`One second later: ${hours}h${minuts}m${seconds}`);
}