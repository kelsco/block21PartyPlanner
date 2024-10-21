// // fetching the list of parties and rendering it

// const partyList = document.querySelector("#parties");
// const partyForm = document.querySelector('#form')

// // updated API 
// const COHORT = "2408-FTB-MT-WEB-PT";
// const API_URL = `https://fsa-crud-2aa9294fe819.herokuapp.com/api/${COHORT}/events`;
// // const RSVP_URL = `https://fsa-crud-2aa9294fe819.herokuapp.com/api/${COHORT}/rsvps`;


// // let date = document.getElementById('time-input')

// async function fetchParties() {
//     try {
//         const response = await fetch(API_URL);
//         const data = await response.json(); //fetches full response object
//         console.log(data); //logging response to inspect
//         renderParties(data.data); //access 'data' array within the response
//     }
//     catch (error0){
//         console.error('Error fetching parties:', error);
//     }
// }

// function renderParties(events){
//     partyList.innerHTML = '';

//         events.forEach(e => {
//             const date = new Date(e.data).toLocaleDateString();//format the ISO date
//             const time = new Date(e.date).toLocaleTimeString([], {hour: '2-digit', minute: '2-digit'}); //extract and format the time

//             const li = document.createElement('li');
//             li.innerHTML = `
//                 <h3>${event.name}</h3>
//                 <p>Date: ${date}</p>
//                 <p>Time: ${time}</p>
//                 <p>Location: ${e.location}</p>
//                 <p>Description: ${e.description}</p>
//                 <button data-id="${e.id}">Delete</button>
//             `;
//             partyList.appendChild(li);
//         })


// //Add delete button functionality
// const deleteButtons = doument.querySelectorAll('button[data-id]');
// deleteButtons.forEach(button => {
//     button.addEventListener('click', deleteParty);
// });
// }

// //function to add a new party via user input form submission
// partyForm.addEventListener('submit', async (e) => {
//     e.preventDefault();

//     const name = document.getElementById('name').value;
//     const date = document.getElementById('date').value;
//     const time = document.getElementById('time').value;
//     const location = document.getElementById('location').value;
//     const description = document.getElementById('description').value;

//     //combine date and time into a single ISO 8601 string
//     const newEvent = {
//         name,
//         date: dateTime, //new Date(date.value + time.value).toISOString(),
//         location,
//         description
//     }; 
// //   layout based off API
// console.log("Event to be added:", newEvent);
//  try {
//     const response = await fetch(API_URL, {
//         method: 'POST',
//         headers: {
//             'Content-Type': 'application/json'
//         },
//         body: JSON.stringify(newEvent)

//     });

//     const result = await response.json(); // parse the response
//     console.log('Response from the APIT:', result()); // log API response

//     if (response.ok){
//         console.log("Event added successfully");
//         fetchParties(); //refresh the party list after adding
//         partyForm.reset(); //clear form after submission
//     } else {
//         console.error('Error adding party', result.message || response.statusText);
//     }
//  } catch (error){
//     console.error('Error adding party:', error); }

// });

//  //function to delete a party
//  async function deleteParty(e){
//     const partyID = e.target.getAttribute('date-id');

//     try {
//         //delete request to remove the party from the API
//         const response = await fetch(`${API_URL}/${partyID}`, {
//             method: 'DELETE'
//         });

//         if(response.ok){
//             fetchParties();
//         else{
//             console.error('Error deleting party:',)
//         }
//         }
//     }
//  }





// // const deleteButtons = document.querySelectorAll('button(date-id)');
// //   deleteButtons.forEach (button =>{
// //     button.addEventListener('click', deleteParty);
// //   })

// //   const dateTime = new Date (`${date}T${time}`).toISOString();
  
// //   const newEvent = {
// //     name:,
// //     date: dateTime,
// //     location:,
// //     description:
// //   }