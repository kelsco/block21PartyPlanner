// fetching the list of parties and rendering it

const partyList = document.querySelector("#parties");
const partyForm = document.querySelector('#form');

// updated API 
const COHORT = "2408-FTB-MT-WEB-PT";
const event_URL = `https://fsa-crud-2aa9294fe819.herokuapp.com/api/${COHORT}`;
// const RSVP_URL = `https://fsa-crud-2aa9294fe819.herokuapp.com/api/${COHORT}/rsvps`;

const state = {
    eventList: []

}

async function getEvents() {

    try {
        const responseEvent = await fetch(`${event_URL}/events`);
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
        const eventCard = document.createElement('div');
        const dateTime = new Date(p.date)
        const time = dateTime.toLocaleTimeString();
        const date = dateTime.toLocaleDateString();
        eventCard.innerHTML = `<div id="${p.id}">
        <h2>${p.name}</h2>
        <p>${p.description}</p>
        <p>${p.location}</p>
        <p>${date}</p>
        <p>${time}</p>
        <button class="delete" id="${p.id}">Delete</button>
        </div>
   `;
        return eventCard;
    })
    console.log(partyDeck);

    partyList.replaceChildren(...partyDeck)

    document.querySelectorAll(".delete").forEach(button => {
        button.addEventListener('click', (e) => {
            e.preventDefault();
            // console.log(e.target); // Log the target element
            // console.log(e.currentTarget.id); // Log the element that the event is attached to

            deleteParty(e.currentTarget.id);
        })

    }

    )
    return renderEvents;
}

async function addParty() {
    const name = document.querySelector('#eventName').value;
    const location = document.querySelector('#eventLocation').value;
    const dateTime = document.querySelector('#eventDateTime').value;
    const date = new Date(dateTime).toISOString();
    const description = document.querySelector('#eventDescription').value;
    const userInput = {
        name,
        location,
        date,
        description
    }
    try {
        const response = await fetch(`${event_URL}/events`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(userInput)
        })
        return response;
    }
    catch (error) {
        console.error(error);
    }
}

const button = document.querySelector('#button');
button.addEventListener('click', (e) => {
    e.preventDefault();
    addAndRerender();

})

const addAndRerender = async function () {
    const response = await addParty()
    if (response.ok) {
        getEvents();
    }
}

async function deleteParty(id) {
    try {
        const response = await fetch(`${event_URL}/events/${id}`, {
            method: "DELETE",
        });
        getEvents();
    }
    catch (error) {
        console.error(error)
    }
}