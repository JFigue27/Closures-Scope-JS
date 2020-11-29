// const moneyBox = (coins) => {
//   var saveCoins = 0;
//   saveCoins += coins;

//   console.log(`MoneyBox: $${saveCoins}`);
// };

// moneyBox(5);
// moneyBox(10);

const moneyBox = () => {
  var saveCoins = 0;
  const counsCoins = (coins) => {
    saveCoins += coins;
    console.log(`MoneyBox: $${saveCoins}`);
  };

  return counsCoins;
};

let myMoneyBox = moneyBox();

myMoneyBox(4);
myMoneyBox(6);
myMoneyBox(10);
