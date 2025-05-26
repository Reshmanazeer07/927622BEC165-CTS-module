// Array of events
const events = [
  { name: "Music Night", date: "2025-06-20", seats: 30 },
  { name: "Tech Expo", date: "2024-05-01", seats: 10 }, // past event
  { name: "Art Workshop", date: "2025-07-10", seats: 0 }, // no seats
  { name: "Dance Battle", date: "2025-08-01", seats: 25 }
];

// Get today's date
const today = new Date();

// Loop through and display only upcoming events with seats
events.forEach((event) => {
  const eventDate = new Date(event.date);

  if (eventDate > today && event.seats > 0) {
    console.log(`✅ ${event.name} on ${event.date} - Seats: ${event.seats}`);
    
    // Simulate registration
    try {
      registerUser(event);
    } catch (error) {
      console.error(`❌ Registration failed for ${event.name}: ${error.message}`);
    }

  } else {
    console.log(`❌ ${event.name} is not available (Past or Full).`);
  }
});

// Registration function with error handling
function registerUser(event) {
  if (event.seats <= 0) {
    throw new Error("No seats available");
  }
  event.seats--;
  console.log(`🎟️ Registered for ${event.name}. Seats left: ${event.seats}`);
}
