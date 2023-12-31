/* LESSON 3 - Programming Tasks */

/* FUNCTIONS */
/* Function Definition - Add Numbers */
function add (number1, number2){
return number1 + number2;
}
function addNumbers (){
let addNumber1 = Number(document.querySelector("#add1").value);
let addNumber2 = Number(document.querySelector("#add2").value);

document.querySelector("#sum").value = add(addNumber1, addNumber2);
}
document.querySelector('#addNumbers').addEventListener("click", addNumbers);


/* Function Expression - Subtract Numbers */
function subtract (subtract1, subtract2) {
    return subtract1 - subtract2;
}
const subtractNumbers = function (){
    let subtract1 = Number(document.querySelector("#subtract1").value);
    let subtract2 = Number(document.querySelector("#subtract2").value);

document.querySelector("#difference").value = subtract(subtract1,subtract2);
}
document.querySelector("#subtractNumbers").addEventListener("click", subtractNumbers);


/* Arrow Function - Multiply Numbers */
function mutltiply (factor1, factor2){
    return factor1 * factor2 ;
}
const multiplyNumbers = () => {
    let factor1 = Number(document.querySelector('#factor1').value);
    let factor2 = Number(document.querySelector('#factor2').value);

    document.querySelector("#product").value = multiply(factor1, factor2);
}
document.querySelector('#multiplyNumbers').addEventListener('click', multiplyNumbers)


/* Open Function Use - Divide Numbers */
function divide (dividend, divisor){
    return dividend/divisor;
}
const divideNumbers = function (){
    let dividend = Number(document.querySelector("#dividend").value);
    let divisor = Number(document.querySelector("#divisor").value);

document.querySelector("#quotient").value = divide(dividend,divisor);
}
document.querySelector("#divideNumbers").addEventListener("click", divideNumbers);


/* Decision Structure */
document.querySelector("#getTotal").addEventListener("click",getTotal);

let calculateTotal() {
    let subtotalImput = document.querySelector("#subtotal");
    let subtotal = parseFloat(subtotalImput);
    let member= Number(document.querySelector('#member').value);

    if (member == true) {
        let discountedTotal = subtotal -(subtotal * .15);
    } else {
        discounted = subtotal;
    }
    const totalSpam = document.getElementById("total");
    totalSpam.textContent = `${discountedTotal.toFixed(2)}`;

}


/* ARRAY METHODS - Functional Programming */
/* Output Source Array */
let numbersArray = [1,2,3,4,5,6,7,8,9,10,11,12,13];

document.querySelector('#array') = numbersArray;
/* Output Odds Only Array */
document.queryselector("#odds").innerHTML = numbersArray.filter(number => number % 1 === 0);

/* Output Evens Only Array */
document.querySelector("#evens").innerHTML = numbersArray.filter(number => number % 2 === 0);
/* Output Sum of Org. Array */
document.querySelector('#sumOfArray').innerHTML = numbersArray.reduce((sum, number) => sum + number);
/* Output Multiplied by 2 Array */
document.querySelector ("#multiplied").innerHTML = numbersArray.map(number => number * 2);
/* Output Sum of Multiplied by 2 Array */
document.querySelector ("#sumOfMultiplied").innerHTML = numbersArray.map(number => number * 2);
