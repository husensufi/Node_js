const hello = (name) => {
  console.log(`Your Name is ${name}`);
};

const world = (a, b, hello) => {
  var res = a + b;

  hello("Husen");
  console.log("Result ", res);
};

world(23, 45, hello);
