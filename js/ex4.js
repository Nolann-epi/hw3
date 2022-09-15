/* Tutorial 4
   Example 2 JavaScript code
*/


console.log("Nolann Holvoet's Output from Tutorial 4 Example 4");

const num1 = Number(prompt("Enter number 1"));
const num2 = Number(prompt("Enter number 2"));

if (!isNaN(num1) && !isNaN(num2)) {
    let add = num1 + num2;
    let sub = num1 - num2;
    let mul = num1 * num2;
    let div = num1 / num2;
    let mod = num1 % num2;
    console.log(`${num1} + ${num2} = ${add}` );
    console.log(`${num1} - ${num2} = ${sub}` );
    console.log(`${num1} * ${num2} = ${mul}` );
    console.log(`${num1} / ${num2} = ${div}` );
    console.log(`${num1} % ${num2} = ${mod}` );
}
else {
    console.log("Invalid entries please refresh");
}