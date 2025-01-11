const hello = () => {
  console.log("In Function hello");
};
const world = (hello) => {
  hello();
  console.log("In Function world");
};
world(hello);
