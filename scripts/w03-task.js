/* LESSON 3 - Programming Tasks */

/* FUNCTIONS */
/* Function Definition - Add Numbers */
function add (number1, number2){
return number1 + number2;
}
function addNumbers (addNumber1, addNumber2){
let addNumber1 = Number(document.querySelector("#add1").value);
let addNumber2 = Number(document.querySelector("#add2").value);

document.querySelector("#sum").value = add(addNumber1, addNumber2);
}
document.querySelector('#adNumbers').addEventListener("click", addNumbers);


/* Function Expression - Subtract Numbers */
const subtractNumbers = function (subtract1, subtract2){
    let subtract1 = Number(document.querySelector("#subtract1").value);
    let subtract2 = Number(document.querySelector("#subtract2").value);

document.querySelector("#difference").value = subtract(subtract1,subtract2);
}
document.querySelector("#subtractNumbers").addEventListener("click", subtractNumbers);


/* Arrow Function - Multiply Numbers */

(factor1, factor2) => {
    let factor1 = Number(document.querySelector('#factor1').value);
    let factor2 = Number(document.querySelector('#factor2').value);

    document.querySelector('#product').value = multiply(factor1, factor2);
}
document.querySelector('#multiplyNumbers').addEventListener('click', multiplyNumbers)


/* Open Function Use - Divide Numbers */


/* Decision Structure */


/* ARRAY METHODS - Functional Programming */
/* Output Source Array */

/* Output Odds Only Array */

/* Output Evens Only Array */

/* Output Sum of Org. Array */

/* Output Multiplied by 2 Array */

/* Output Sum of Multiplied by 2 Array */
