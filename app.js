// import functions

import { people } from './data.js';

// grab DOM elements

const selectEL = document.querySelector('.select');
const pronounsEl = document.querySelector('.pronouns');
const nameEl = document.querySelector('.name');
const favPlaceEl = document.querySelector('.favPlace');
const hobbiesEl = document.querySelector('.hobbies');
const contain = document.querySelector('.contain');

// set event listeners 

selectEL.addEventListener('change', (event) => {
    const selected = event.target.value;
    hobbiesEl.innerHTML = ' ';
    contain.classList.remove('Elliott', 'Beau');
    return selected === 'one' ? renderPerson(0) : renderPerson(1);
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
