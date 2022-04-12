const isValidCreditCard = (cardNumber = "") => {
  //invalid if it contains something other than digis
  if (!/^[\d]+$/.test(cardNumber)) return false;

  let isSecond = false;
  let digitSum = 0;

  for (let i = cardNumber.length - 1; i >= 0; i--) {
    let digit = Number(cardNumber[i]);

    if (isSecond) digit *= 2;

    //if double digit number then this line will extract the first digit
    digitSum += parseInt(digit / 10, 10);

    digitSum += digit % 10;

    isSecond = !isSecond;
  }

  return digitSum % 10 == 0;
};

const cardNo = "3566000020000410";

console.log(isValidCreditCard(cardNo)); //returns true;

module.exports = isValidCreditCard;
