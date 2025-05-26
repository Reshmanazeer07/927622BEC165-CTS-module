const form = document.getElementById("eventForm");
const eventList = document.getElementById("eventList");

// Load events from localStorage on page load
window.onload = function () {
  const storedEvents = JSON.parse(localStorage.getItem("events")) || [];
  storedEvents.forEach(event => renderEvent(event));
};

// Submit handler
form.addEventListener("submit", function (e) {
  e.preventDefault();

  const name = document.getElementById("eventName").value;
  const seats = document.getElementById("eventSeats").value;

  if (!name || !seats) {
    alert("Please fill out all fields.");
    return;
  }

  const newEvent = { name, seats };

  // Save to localStorage
  const existing = JSON.parse(localStorage.getItem("events")) || [];
  existing.push(newEvent);
  localStorage.setItem("events", JSON.stringify(existing));

  // Render the event
  renderEvent(newEvent);

  // Clear the form
  form.reset();
});

// Function to render an event card
function renderEvent(event) {
  const card = document.createElement("div");
  card.style.border = "1px solid #ccc";
  card.style.padding = "10px";
  card.style.margin = "10px 0";
  card.style.borderRadius = "5px";

  const title = document.createElement("h4");
  title.innerText = event.name;

  const seatText = document.createElement("p");
  seatText.innerText = `🎟️ Seats: ${event.seats}`;

  card.appendChild(title);
  card.appendChild(seatText);

  eventList.appendChild(card);
}
