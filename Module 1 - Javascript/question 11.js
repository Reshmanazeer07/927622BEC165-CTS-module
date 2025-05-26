const container = document.getElementById("eventList");

// Updated fetch path to match your file name with spaces
fetch("question 11 events.json")
  .then(response => {
    if (!response.ok) {
      throw new Error("Failed to fetch events.");
    }
    return response.json();
  })
  .then(data => {
    data.forEach(event => {
      const card = document.createElement("div");
      card.style.border = "1px solid #ccc";
      card.style.margin = "10px 0";
      card.style.padding = "10px";
      card.style.borderRadius = "5px";

      const name = document.createElement("h3");
      name.innerText = event.name;

      const date = document.createElement("p");
      date.innerText = `📅 ${event.date}`;

      const category = document.createElement("p");
      category.innerText = `📂 ${event.category}`;

      card.appendChild(name);
      card.appendChild(date);
      card.appendChild(category);
      container.appendChild(card);
    });
  })
  .catch(error => {
    container.innerText = `❌ Error: ${error.message}`;
    console.error(error);
  });

