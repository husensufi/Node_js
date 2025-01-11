const Student = `{
  "Name": {
    "First Name": "Husen",
    "Last Name": "Basha"
  },
  "age": 22,
  "Address": "Mudgal"
}`;

console.log(Student);

const st = JSON.parse(Student);
console.log(st);

const obj = JSON.stringify(st);
console.log(obj);

//Convering the JSON to js object
