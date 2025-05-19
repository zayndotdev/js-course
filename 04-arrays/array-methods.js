const contacts = [
  { name: "Zayn", phone: "123-456-7890" },
  { name: "Ali", phone: "987-654-3210" },
  { name: "Noor", phone: "555-555-5555" },
  { name: "Hassan", phone: "111-222-3333" },
];

// Step 2: Add a new contact
contacts.push({ name: "Fatima", phone: "999-888-7777" });

// convert the array elements to uppercase
const upperCaseContacts = contacts.map((contact) => ({
  name: contact.name.toUpperCase(),
  phone: contact.phone,
}));

const aContacts = contacts.filter(
  (contact) => contact.name.startsWith("A") || contact.name.startsWith("Z")
);

console.log(upperCaseContacts);
console.log(aContacts);
