// Write your code here

// Correct attendee object
const attendee = {
  attendeeId: "T001",
  name: "Alice Smith",
  event: "JavaScript Conference",
  ticketType: "VIP",
  ticketPrice: 150
};

// Logs only the attendee's name
function logAttendeeName(attendee) {
  console.log(attendee.name);
}

// Logs only the ticket price (number)
function logTicketPrice(attendee) {
  console.log(attendee.ticketPrice);
}

// Updates ticketType
function updateTicketType(attendee, newTicketType) {
  if (typeof attendee === "object" && attendee !== null) {
    attendee.ticketType = newTicketType;
  }
  console.log(`Updated Ticket Type: ${newTicketType}`);
}

// Updates ticketPrice
function updateTicketPrice(attendeeObj, newTicketPrice) {
  if (typeof attendee === "object" && attendee !== null) {
    attendee.ticketPrice = newTicketPrice;
  }
  console.log(`Updated Ticket Price: ${newTicketPrice}`);
}

// Removes event property
function removeEventProperty(attendee) {
  if (typeof attendee === "object" && attendee !== null) {
    delete attendee.event;
  }
}

// Adds checkedIn property (default = true)
function addCheckedInProperty(attendee) {
  if (typeof attendee === "object" && attendee !== null) {
    attendee.checkedIn = true;
  }
}

// Export — DO NOT CHANGE
module.exports = {
  attendee,
  logAttendeeName,
  logTicketPrice,
  updateTicketType,
  updateTicketPrice,
  removeEventProperty,
  addCheckedInProperty
};
