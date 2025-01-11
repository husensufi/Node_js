const myFunc = () => {
  console.log("Hello World");
};
const myFunc2 = (a, myFunc) => {
  console.log("My Function 2", a);
  myFunc();
};
myFunc2(12, myFunc);
