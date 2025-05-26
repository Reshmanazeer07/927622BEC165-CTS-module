// Event list with seats
const events = [
  { name: "Coding Marathon", date: "2025-06-20", seats: 3 },
  { name: "Open Mic", date: "2025-07-05", seats: 1 },
  { name: "Dance Showdown", date: "2025-08-15", seats: 0 }
];

const container = document.getElementById("event-container");

events.forEach(event => {
  const card = document.createElement("div");
  card.style.border = "1px solid #ccc";
  card.style.padding = "10px";
  card.style.margin = "10px 0";
  card.style.borderRadius = "5px";
  card.style.backgroundColor = "#f0f8ff";

  const title = document.createElement("h3");
  title.innerText = event.name;

  const date = document.createElement("p");
  date.innerText = `📅 Date: ${event.date}`;

  const seats = document.createElement("p");
  seats.innerText = `🎟️ Seats Left: ${event.seats}`;

  const button = document.createElement("button");
  button.innerText = "Register";
  button.style.padding = "5px 10px";
  button.style.marginTop = "5px";

  // Disable button if seats are 0
  if (event.seats === 0) {
    button.disabled = true;
    button.innerText = "Sold Out";
  }

  // Event listener on button
  button.addEventListener("click", () => {
    if (event.seats > 0) {
      event.seats--;
      seats.innerText = `🎟️ Seats Left: ${event.seats}`;

      if (event.seats === 0) {
        button.disabled = true;
        button.innerText = "Sold Out";
      }

      alert(`✅ Registered for ${event.name}`);
    }
  });

  // Append all to card
  card.appendChild(title);
  card.appendChild(date);
  card.appendChild(seats);
  card.appendChild(button);

  // Append card to container
  container.appendChild(card);
});
