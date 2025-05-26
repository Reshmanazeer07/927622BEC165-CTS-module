// ✅ Match exact filename (case & spaces)
import { Event } from './question 14 Eventmodule.js';

// Create event instances
const event1 = new Event("AI Conference", "2025-08-10", "Tech", 3);
const event2 = new Event("Poetry Reading", "2025-09-01", "Literature", 1);

// Use methods
event1.getDetails();
event1.registerUser();
event1.registerUser();

event2.getDetails();
event2.registerUser();
event2.registerUser(); // Should show "sold out"

