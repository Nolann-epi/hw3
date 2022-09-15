/* Tutorial 4
   Example 2 JavaScript code
*/


console.log("Nolann Holvoet's Output from Tutorial 4 Example 3");

const day = prompt("Enter your day (3 letter abbreviation only) : ");


switch (true) {
    case(day === "sun"):
        console.log("You entered: %c%s", "font-style: italic;", `${day}`);
        console.log("The following day is: %c%s", "font-style: italic;", "Monday");
        break;
    case(day === "mon"):
        console.log("You entered: %c%s", "font-style: italic;", `${day}`);
        console.log("The following day is: %c%s", "font-style: italic;", "Tuesday");
        break;
    case(day === "tue"):
        console.log("You entered: %c%s", "font-style: italic;", `${day}`);
        console.log("The following day is: %c%s", "font-style: italic;", "Wednedsay");
        break;
    case(day === "wed"):
        console.log("You entered: %c%s", "font-style: italic;", `${day}`);
        console.log("The following day is: %c%s", "font-style: italic;", "Thursday");
        break;
    case(day === "thu"):
        console.log("You entered: %c%s", "font-style: italic;", `${day}`);
        console.log("The following day is: %c%s", "font-style: italic;", "Friday");
        break;
    case(day === "fri"):
        console.log("You entered: %c%s", "font-style: italic;", `${day}`);
        console.log("The following day is: %c%s", "font-style: italic;", "Saturday");
        break;
    case(day === "sat"):
        console.log("You entered: %c%s", "font-style: italic;", `${day}`);
        console.log("The following day is: %c%s", "font-style: italic;", "Sunday");
        break;
    default:
        console.log("You didn't enter a correct day.. (please refresh)");
}