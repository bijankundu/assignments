const expect = require("chai").expect;

const isValidCreditCard = require("./../index");

describe("Check isValidCreditCard method", () => {
  it("Should return false if credit card number is invalid", () => {
    const cardNumber = "4388576018402626";

    expect(isValidCreditCard(cardNumber)).to.be.false;
  });

  it("Should return true if credit card number is valid", () => {
    const cardNumber = "6271701225979642";

    expect(isValidCreditCard(cardNumber)).to.be.true;
  });

  it("Should return false if credit card number contains anything other than digits", () => {
    const cardNumber = "6271701225979dfs42";

    expect(isValidCreditCard(cardNumber)).to.be.false;
  });
});
