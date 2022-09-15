/* Tutorial 4
   Example 2 JavaScript code
*/


console.log("Nolann Holvoet's Output from Tutorial 4 Example 2");

const name = prompt("Enter your name");

const unit = prompt("Enter your number of units");

if (!isNaN(unit) && unit > 0) {

    console.log("Hello %c%s", "font-style: italic;", `${name}`)

    let gradeStanding;
    if (unit < 31) {
        gradeStanding = "Freshman"
    }
    else if (unit < 60) {
        gradeStanding = "Sophomore"
    }
    else if (unit < 90) {
        gradeStanding = "Junior"
    }
    else {
        gradeStanding = "Senior"
    }

console.log("Your grade standing is %c%s", "font-style: italic;", `${gradeStanding}`)
}

else {
    console.log(`${unit} is not a valid entry, please refresh`);
}