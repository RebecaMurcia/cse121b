/* LESSON 3 - Programming Tasks */

/* Profile Object  */
let myProfile = {
    name: "Rebeca Murcia",
    photo: "images/profile.jpg",
    favoriteFoods: [
        "avocado toast",
        "fried eggs",
        "arepas",
        "enchiladas",
        "cheesecake",
    ],
    hobbies: [
        "miniature art",
        "scarpbooking",
        "digital illustration",
        "mending clothes",
    ],
    placesLived: [],
} ;

/* Populate Profile Object with placesLive objects */
myProfile.placesLived.push(
    {
        place: "Guatemala City, Guatemala",
        length: "24 years",
    },
    {
        place: "Los Angeles, CA",
        length: "18 months",
    },
    {
        place: "Provo,UT",
        length: "3 years",
    },
    {
        place: "Brush Prairie, WA",
        length: "9 months"
    },
    {
        place:"Portland, OR",
        length:"1 year",
    },
    );
    

/* DOM Manipulation - Output */

/* Name */
document.querySelector("#name").textContent = myProfile.name;
/* Photo with attributes */
document.getElementById("photo").src="profile.jpg";
document.getElementById("photo").alt="Rebeca Murcia";

/* Favorite Foods List*/
myProfile.favoriteFoods.forEach(food => {
    let li = document.createElement('li');
    li.textContent = food;
    document.querySelector("#favorite-foods").appendChild(li);
});

/* Hobbies List */
myProfile.hobbies.forEach(hobbies => {
    let li = document.createElement('li');
    li.textContent = hobbies;
    document.querySelector("#hobbies").appendChild(li);
});

/* Places Lived DataList */
myProfile.placesLived.forEach(place => {
    let dt = document.createElement ('dt');
    dt.textContent = place.place;
    document.querySelector("#places-lived").appendChild(dt);

    let dd = document.createElement('dd');
    dd.textContent = place.length;
    document.querySelector('#places-lived').appendChild(dd);
})

