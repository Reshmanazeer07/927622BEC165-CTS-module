const form = document.getElementById("eventForm");
const eventList = document.getElementById("eventList");

form.addEventListener("submit", function (e) {
  e.preventDefault(); // Prevent page reload

  const name = document.getElementById("eventName").value;
  const seats = document.getElementById("eventSeats").value;

  if (!name || !seats) {
    alert("Please fill out all fields.");
    return;
  }

  // Create event card
  const card = document.createElement("div");
  card.style.border = "1px solid #ccc";
  card.style.padding = "10px";
  card.style.margin = "10px 0";
  card.style.borderRadius = "5px";

  const title = document.createElement("h4");
  title.innerText = name;

  const seatText = document.createElement("p");
  seatText.innerText = `🎟️ Seats: ${seats}`;

  card.appendChild(title);
  card.appendChild(seatText);

  eventList.appendChild(card);

  // Clear form
  form.reset();
});
