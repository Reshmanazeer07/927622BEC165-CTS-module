// Array to store events
let events = [];

// Function to add a new event
function addEvent(name, date, category, seats) {
  events.push({ name, date, category, seats });
}

// Closure to track registrations by category
function createRegistrationTracker() {
  const categoryCount = {};

  return function (category) {
    if (!categoryCount[category]) {
      categoryCount[category] = 1;
    } else {
      categoryCount[category]++;
    }
    console.log(`🧾 Total registrations in ${category}: ${categoryCount[category]}`);
  };
}

const trackRegistration = createRegistrationTracker();

// Function to register a user for an event
function registerUser(eventName) {
  const event = events.find(e => e.name === eventName);

  if (event && event.seats > 0) {
    event.seats--;
    console.log(`🎟️ Registered for ${event.name}. Seats left: ${event.seats}`);
    trackRegistration(event.category); // Track registration using closure
  } else {
    console.log(`❌ Cannot register for ${eventName}. Full or not found.`);
  }
}

// Higher-order function to filter events dynamically
function filterEventsByCategory(callback) {
  return events.filter(callback);
}

// Add sample events
addEvent("Food Fest", "2025-06-10", "Food", 50);
addEvent("Code Hackathon", "2025-07-20", "Tech", 20);
addEvent("Music Night", "2025-08-15", "Entertainment", 30);

// Register some users
registerUser("Food Fest");
registerUser("Food Fest");
registerUser("Code Hackathon");

// Filter Tech events
const techEvents = filterEventsByCategory(event => event.category === "Tech");
console.log("💻 Tech Events:", techEvents);
