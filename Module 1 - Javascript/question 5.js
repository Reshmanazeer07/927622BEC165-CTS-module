// Constructor function for Event
function Event(name, date, category, seats) {
  this.name = name;
  this.date = date;
  this.category = category;
  this.seats = seats;
}

// Add method to register user
Event.prototype.registerUser = function () {
  if (this.seats > 0) {
    this.seats--;
    console.log(`🎟️ Registered for ${this.name}. Seats left: ${this.seats}`);
  } else {
    console.log(`❌ ${this.name} is full. No seats available.`);
  }
};

// Add method to display event details
Event.prototype.getDetails = function () {
  console.log(`📢 ${this.name} (${this.category}) - Date: ${this.date}, Seats: ${this.seats}`);
};

// Create event objects
const event1 = new Event("Startup Meetup", "2025-06-25", "Business", 30);
const event2 = new Event("Comic Con", "2025-09-10", "Entertainment", 0);

// Display details
event1.getDetails();
event2.getDetails();

// Try registering
event1.registerUser(); // Should reduce seats
event2.registerUser(); // Should show full

// Show updated details
event1.getDetails();
event2.getDetails();
