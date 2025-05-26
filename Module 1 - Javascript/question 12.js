const container = document.getElementById("eventList");

async function loadEvents() {
  try {
    // fetch from local JSON with space in filename
    const response = await fetch("question 11 events.json");

    if (!response.ok) {
      throw new Error("Failed to fetch events.");
    }

    const data = await response.json();
    console.log(data); // Debug: show data in console

    data.forEach(event => {
      const card = document.createElement("div");
      card.style.border = "1px solid #ccc";
      card.style.margin = "10px 0";
      card.style.padding = "10px";
      card.style.borderRadius = "5px";
      card.style.backgroundColor = "#f9f9f9";

      card.innerHTML = `
        <h3>${event.name}</h3>
        <p>📅 ${event.date}</p>
        <p>📂 ${event.category}</p>
      `;

      container.appendChild(card);
    });
  } catch (error) {
    container.innerText = `❌ Error: ${error.message}`;
    console.error(error);
  }
}

loadEvents();

