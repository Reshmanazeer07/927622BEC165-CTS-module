// Use const for event name and date
const eventName = "Music Fest 2025";
const eventDate = "June 15, 2025";

// Use let for seat count (it will change)
let seatsAvailable = 50;

// Display event info using template literals
console.log(`📅 Event: ${eventName}`);
console.log(`📍 Date: ${eventDate}`);
console.log(`🎟️ Seats Available: ${seatsAvailable}`);

// Simulate a registration
seatsAvailable--; // one seat booked

// Show updated seat count
console.log(`✅ One user registered.`);
console.log(`🎟️ Seats Remaining: ${seatsAvailable}`);
