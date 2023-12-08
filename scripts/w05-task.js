/* W05: Programming Tasks */

/* Declare and initialize global variables */
const templesElement = documet.getElementById("#temples");
let templeList = [];
const url = "https://byui-cse.github.io/cse121b-ww-course/resources/temples.json";

/* async displayTemples Function */
const displayTemples = (data) => {
data.forEach((temple) => {
    let article = document.createElement("article");
    let h3 = document.createElement("h3");
    let img = document.createElement("img");
    h3.textContent = temple.templeName;
    img.setAttribute("src", temple.imageUrl);
    img.setAttribute("alt", temple.imageUrl);
    
    article.appendChild(h3);
    article.appendChild(img);
    templesElement.appendChild (article);
})
}
/* async getTemples Function using fetch()*/
const getTemples = async (url) =>{
    const response = await fetch(url);
    if (response.ok) {
        templeList = await response(json);
        displayTemples(templeList);
    }
}

/* reset Function */
const reset = ()=>{
    templesElement.innerHTML = "";
}

/* sortBy Function */
const sortBy = (temples) =>{
    reset();
    const filter = document.querySelector("#sotrBy").value;
    let templeFilteredList;
    switch (filter) {
        case "utah":
            templeFilteredList = temples.filter((temple)=> {return temple.location.includes("Utah")});
            console.log(templeFilteredList);
            break;
            case "notutah":
            templeFilteredList = temples.filter((temple)=>{return !temple.location.includes("Utah")});
            break;
            case "older":
            templeFilteredList = temples.filter((temple)=>{
                const dedicated = new Date(temple.dedicated)
                return dedicated < new Date(1950, 0, 1)
            });
            break;
            case "alphabetically":
                templeFilteredList = temples.sort((a,b)=>{
                    if (a.templeName > b. templeName) {
                        return 1;
                    }    else if (a. templeName < b. templeName) {
                            return -1;
                    } else return 0;
                });
                break;
                case "all":
                    templeFilteredList = temples;
                    break;
    }
    displayTemples(templeFilteredList);
}
getTemples();

/* Event Listener */
document.querySelector("#sortBy").addEventListener("change", ()=>{sortBy (templeList)});