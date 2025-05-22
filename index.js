const userInputString = prompt(
  "Please enter some froyo flavors separated by commas.",
  "vanilla,vanilla,vanilla,strawberry,coffee,coffee"
);

//split user input into array
const flavor = userInputString.split(",");

//push that array into object and keys
function createFlavorKeys(flavor) {
  const flavorKey = {};
  for (let i = 0; i < flavor.length; i++) {
    flavorKey[flavor[i]] = 0;
  }
  return flavorKey;
}
let flavorKey = createFlavorKeys(flavor);
//increment items based on array members
function addOrder(flavor) {
  for (let i of flavor) {
    if (flavorKey.hasOwnProperty(i)) {
      flavorKey[i] += 1;
    }
  }
  return flavorKey;
}

//combine functions
function userReply() {
  createFlavorKeys(flavor);
  let flavorCount = createFlavorKeys(flavor);
  addOrder(flavor);
  return flavorCount;
}
//create reply
const reply = `You have ordered, ${userReply()}`;
alert(reply);
console.log(userInputString);
console.log(flavor);
console.log(createFlavorKeys(flavor));
console.log(flavorKey);
console.log(flavorKey);
