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
  it('creates a vending machine with 5 pack of gum objects', function() { // SPEC
    let expectedValue = 5;
    let actualValue = vendingMachine.packsOfGum.length;
    
    expect(actualValue).toBe(expectedValue);
  });
});

describe('VendingMachine.calculateReturnChange', function() {
  let vendingMachine;
  beforeEach(function() {
    vendingMachine = new VendingMachine();
  });
  // money passed in is greater than the cost of the item
  it('when amount of money passed in is greater than the price of item, correct change is returned', function() {
    expect(vendingMachine.calculateReturnChange(.5, 1)).toBe(.5);
  });
  // money passed in equal to the cost of the item
  it('when amount of money passed in is equal to the price of item, no change is returned', function() {
    expect(vendingMachine.calculateReturnChange(.5, .5)).toBe(0);
  });
  // money passed in is less than the cost of the item
  it('when amount of money passed in is less than the price of item, no change is returned', function() {
    expect(vendingMachine.calculateReturnChange(.5, .25)).toBe(0);
  });
});

describe('VendingMachine.removeItemFromInventory', function(){
  let vendingMachine;
  beforeEach(function(){
    vendingMachine = new VendingMachine();
  });
  // remove exactly one of the specified item from its row (array)
  it('removes exactly one candy bar object', function(){
    let startingQuantity = vendingMachine.candyBars.length;
    vendingMachine.removeItemFromInventory('candy bar');
    let endingQuantity = vendingMachine.candyBars.length;

    expect(endingQuantity).toEqual(startingQuantity - 1);
  });
  it('removes exactly one bag of chips object', function(){
    let startingQuantity = vendingMachine.bagsOfChips.length;
    vendingMachine.removeItemFromInventory('bag of chips');
    let endingQuantity = vendingMachine.bagsOfChips.length;

    expect(endingQuantity).toEqual(startingQuantity - 1);
  });
  it('removes exactly one pack of gum object', function(){
    let startingQuantity = vendingMachine.packsOfGum.length;
    vendingMachine.removeItemFromInventory('pack of gum');
    let endingQuantity = vendingMachine.packsOfGum.length;
    
    expect(endingQuantity).toEqual(startingQuantity - 1);
  });
});

describe('VendingMachine.addItemBackToInventory', function(){
  let vendingMachine;
  beforeEach(function(){
    vendingMachine = new VendingMachine();
  });
  // add exactly one of the specified item to its row (array)
  it('adds exactly one candy bar object', function(){
    let startingQuantity = vendingMachine.candyBars.length;
    let candyBar = new CandyBar("candy bar", .75);
    vendingMachine.addItemBackToInventory(candyBar);
    let endingQuantity = vendingMachine.candyBars.length;

    expect(endingQuantity).toEqual(startingQuantity + 1);
  });
  it('adds exactly one bag of chips object', function(){
    let startingQuantity = vendingMachine.bagsOfChips.length;
    let bagOfChips = new BagOfChips("bag of chips", .89);
    vendingMachine.addItemBackToInventory(bagOfChips);
    let endingQuantity = vendingMachine.bagsOfChips.length;

    expect(endingQuantity).toEqual(startingQuantity + 1);
  });
  it('adds exactly one pack of gum object', function(){
    let startingQuantity = vendingMachine.packsOfGum.length;
    let packOfGum = new PackOfGum("pack of gum", .15);
    vendingMachine.addItemBackToInventory(packOfGum);
    let endingQuantity = vendingMachine.packsOfGum.length;
    
    expect(endingQuantity).toEqual(startingQuantity + 1);
  });
});

describe('VendingMachine.addMoneyToMachine', function(){
  let vendingMachine;
  beforeEach(function(){
    vendingMachine = new VendingMachine();
  });
  it("adds the specified amount of money to the vending machine's change", function(){
    let startingQuantity = vendingMachine.amountOfMoneyInChange;
    let moneyToAdd = 20.00;
    vendingMachine.addMoneyToMachine(moneyToAdd);
    let endingQuantity = vendingMachine.amountOfMoneyInChange;

    expect(endingQuantity).toEqual(startingQuantity + moneyToAdd);
  });
});