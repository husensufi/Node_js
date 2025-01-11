//Converting the JS object onto JSON

const Employee = {
    name: 'aaa',
    age: 25,
    address: 'Raichur'
};
console.log(Employee);

const emp = JSON.stringify(Employee);
console.log(emp);

