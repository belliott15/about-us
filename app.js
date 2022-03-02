// import functions
import { people } from './data.js';
console.log(people, 'people');
// grab DOM elements
const selectEL = document.querySelector('.select');
console.log(selectEL);
const pronounsEl = document.querySelector('.pronouns');
const nameEl = document.querySelector('.name');
const favPlaceEl = document.querySelector('.favPlace');
const hobbiesEl = document.querySelector('.hobbies');
// set event listeners 
selectEL.addEventListener('change', (event) => {
    console.log('user click');
});

function renderPerson(index) {
    contain.classList.add(`${people[index].name}`);
    nameEl.textContent = 'Name: ' + people[index].name;
    pronounsEl.textContent = 'Pronouns: ' + people[index].pronouns;
    favPlaceEl.textContent = 'Favorite Place: ' + people[index].favorite_place;

    for (let hobby of people[index].hobbies) {
        const li = document.createElement('li');
        li.textContent = hobby;
        hobbiesEl.appendChild(li);
    }
}
    // get user input
    // use user input to update state 
    // update DOM to reflect the new state
