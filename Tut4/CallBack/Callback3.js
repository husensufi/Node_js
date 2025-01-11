const husen = (name, usn) => {
  console.log(`Your Name is ${name}`);
  console.log(`Your USN is ${usn}`);
};
const basha = (address, husen) => {
  husen("Husen Basha", "4SO23MC032");
  console.log(`Your Address is ${address}`);
};
basha("Mudgal", husen);
