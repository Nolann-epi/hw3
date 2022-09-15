/* Tutorial 4
   Example 2 JavaScript code
*/


console.log("Nolann Holvoet's Output from Tutorial 4 Example 5");

let pass = prompt("Enter your password..");
const attempt_max = 3;
let attempt = 1;

while (pass !== "secret" && attempt < attempt_max) {
    attempt++;
    pass = prompt("Enter your password..");
}
if (pass !== "secret") {
    console.log(`Your account is locked!  You failed to enter the correct password ${attempt} times`);
}
else {
    console.log(`You entered the correct password after ${attempt} attempt(s)`);
}