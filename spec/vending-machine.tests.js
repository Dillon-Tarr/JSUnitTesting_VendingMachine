describe('VendingMachine constructor', function() {// SUITE
  let vendingMachine;
  beforeEach(function() {
    vendingMachine = new VendingMachine();
  });
  it('creates a vending machine with 5 candy bar objects', function() { // SPEC
    let expectedValue = 5;
    let actualValue = vendingMachine.candyBars.length;
    
    expect(actualValue).toBe(expectedValue);
  });
  it('creates a vending machine with 5 bag of chips objects', function() { // SPEC
    let expectedValue = 5;
    let actualValue = vendingMachine.bagsOfChips.length;
    
    expect(actualValue).toBe(expectedValue);
  });
});

describe('VendingMachine calculateReturnChange', function() {
  let vendingMachine;
  beforeEach(function() {
    vendingMachine = new VendingMachine();
  });
  // money passed in is greater than the cost of the item
  it('when amount of money passed in is greater than the price of item, correct change is returned', function() {
    expect(vendingMachine.calculateReturnChange(.5, 1)).toBe(.5);
  });
  // money passed in equal to the cost of the item
  // money passed in is less than the cost of the item
});