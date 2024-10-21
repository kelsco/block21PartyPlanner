// fetching the list of parties and rendering it

const partyList = document.querySelector("#parties");
const partyForm = document.querySelector('#form');

// updated API 
const COHORT = "2408-FTB-MT-WEB-PT";
const event_URL = `https://fsa-crud-2aa9294fe819.herokuapp.com/api/${COHORT}/events`;
// const RSVP_URL = `https://fsa-crud-2aa9294fe819.herokuapp.com/api/${COHORT}/rsvps`;

const state = {
    eventList: []

}

async function getEvents() {
    
    try {
        const responseEvent = await fetch(event_URL);
        const jsonEvent = await responseEvent.json();
        state.eventList = jsonEvent.data;
        console.log(state.eventList);
    }
    catch (error) {
        console.error(error)
    }
    renderEvents(state.eventList);
}
getEvents();

function renderEvents(party) {
   const partyDeck = party.map(p => {
        const eventCard = document.createElement('li');
        const dateTime = new Date(p.date)
        const time = dateTime.toLocaleTimeString();
        const date = dateTime.toLocaleDateString();
   eventCard.innerHTML = `
        <h2>${p.name}</h2>
        <p>${p.description}</p>
        <p>${p.location}</p>
        <p>${date}</p>
        <p>${time}</p>
   `;
   return eventCard;
   })
    
   partyList.replaceChildren(...partyDeck)

}

