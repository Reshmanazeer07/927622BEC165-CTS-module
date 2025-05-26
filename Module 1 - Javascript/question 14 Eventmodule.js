// ✅ Make sure filename matches this exactly: question 14 Eventmodule.js

export class Event {
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

