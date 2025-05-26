// Define the Event class
class Event {
  constructor(name, date, category, seats) {
    this.name = name;
    this.date = date;
    this.category = category;
    this.seats = seats;
  }

  getDetails() {
    console.log(`📅 ${this.name} (${this.category}) on ${this.date} - Seats: ${this.seats}`);
  }

  registerUser() {
    if (this.seats > 0) {
      this.seats--;
      console.log(`🎟️ Registered for ${this.name}. Seats left: ${this.seats}`);
    } else {
      console.log(`❌ ${this.name} is sold out.`);
    }
  }
}

// Create event instances
const event1 = new Event("Startup Summit", "2025-06-20", "Business", 25);
const event2 = new Event("Live Concert", "2025-07-15", "Music", 0);

// Use methods
event1.getDetails();
event1.registerUser(); // 24
event1.registerUser(); // 23

event2.getDetails();
event2.registerUser(); // ❌ Sold out

// Show updated details
event1.getDetails();
event2.getDetails();
