/* W02-Task - Profile Home Page */

/* Step 1 - Setup type tasks - no code required */

/* Step 2 - Variables */
let fullName = "Rebeca Murcia";
let currentYear ="2023";
let profilePicture ="images/profile.JPG";

/* Step 3 - Element Variables */
const nameElement = document.getElementById("name");
const foodElement = document.getElementById("food");
const yearElement = document.querySelector("#year");
const imageElement = document.querySelector("img"); 

/* Step 4 - Adding Content */
nameElement.innerHTML = `<strong>${fullName}</strong}`;
currentYear.innerHTML = `${currentYear}`;
imageElement.setAttribute ("src", profilePicture);
imageElement.setAttribute ("alt", "Profile image of ${profilePicture}");

/* Step 5 - Array */
const favFoods =["arepas", "enchiladas", "pumpkin pie", "sushi"];
console.log (favFoods);
foodElement.textContent = favFoods;
let singleFav = "avocado toast";
favFoods.push("avocado toast");
foodElement.innerHTML += `<br>${favFoods}`;
favFoods.shift();
foodElement.innerHTML += `<br>${favFoods}`;
favFoods.pop();
foodElement.innerHTML += `<br>${favFoods}`;











