// Array of events
let events = [
  { name: "Guitar Jam", date: "2025-06-10", category: "Music" },
  { name: "Baking Basics", date: "2025-07-05", category: "Workshop" },
  { name: "Code Bootcamp", date: "2025-08-01", category: "Tech" }
];

// 1. Add a new event using .push()
events.push({ name: "Jazz Night", date: "2025-07-20", category: "Music" });

console.log("✅ All Events:");
console.log(events);

// 2. Use .filter() to get only music events
const musicEvents = events.filter(event => event.category === "Music");
console.log("🎵 Music Events:");
console.log(musicEvents);

// 3. Use .map() to format display card titles
const formattedCards = events.map(event => {
  return `🗓️ ${event.name} – ${event.date}`;
});

console.log("📋 Event Cards:");
console.log(formattedCards);
