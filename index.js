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
function logAttendeeName(attendeeObj) {
  console.log(attendeeObj.name);
}

// Logs only the ticket price (number)
function logTicketPrice(attendeeObj) {
  console.log(attendeeObj.ticketPrice);
}

// Updates ticketType
function updateTicketType(attendeeObj, newTicketType) {
  if (typeof attendeeObj === "object" && attendeeObj !== null) {
    attendeeObj.ticketType = newTicketType;
  }
}

// Updates ticketPrice
function updateTicketPrice(attendeeObj, newTicketPrice) {
  if (typeof attendeeObj === "object" && attendeeObj !== null) {
    attendeeObj.ticketPrice = newTicketPrice;
  }
}

// Removes event property
function removeEventProperty(attendeeObj) {
  if (typeof attendeeObj === "object" && attendeeObj !== null) {
    delete attendeeObj.event;
  }
}

// Adds checkedIn property (default = true)
function addCheckedInProperty(attendeeObj) {
  if (typeof attendeeObj === "object" && attendeeObj !== null) {
    attendeeObj.checkedIn = true;
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

