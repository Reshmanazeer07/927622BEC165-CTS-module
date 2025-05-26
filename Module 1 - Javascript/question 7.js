// Array of event objects
const events = [
  { name: "Food Carnival", date: "2025-06-10", category: "Food" },
  { name: "Tech Talks", date: "2025-07-01", category: "Tech" },
  { name: "Rock Night", date: "2025-08-15", category: "Music" }
];

// Get the container div
const container = document.getElementById("event-container");

// Loop through events and create cards
events.forEach(event => {
  // Create card div
  const card = document.createElement("div");
  card.style.border = "1px solid #ccc";
  card.style.padding = "10px";
  card.style.margin = "10px 0";
  card.style.borderRadius = "5px";
  card.style.backgroundColor = "#f9f9f9";

  // Create and append content
  const title = document.createElement("h3");
  title.innerText = event.name;

  const date = document.createElement("p");
  date.innerText = `📅 Date: ${event.date}`;

  const category = document.createElement("p");
  category.innerText = `📂 Category: ${event.category}`;

  // Append elements to card
  card.appendChild(title);
  card.appendChild(date);
  card.appendChild(category);

  // Append card to container
  container.appendChild(card);
});
