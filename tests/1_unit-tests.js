const chai = require('chai');
let assert = chai.assert;
const ConvertHandler = require('../controllers/convertHandler.js');

let convertHandler = new ConvertHandler();

suite('Unit Tests', function(){

  suite('Number Input', function () {
    // #1 read a whole number input
    test('reads whole number', function () {
      assert.equal(convertHandler.getNum('3'), 3, 'Does not equal 3');
    });
    // #2 read a decimal number input
    test('read a decimal number input', function () {
      assert.equal(convertHandler.getNum('3.5'), 3.5, 'Does not equal 3.5');
    });
    // #3 read a fractional input
    test('read a fractional input', function () {
      assert.equal(convertHandler.getNum('1/2'), 0.5, 'Does not equal 0.5');
    });
    // #4 read a fractional input with a decimal
    test('read a fractional input with a decimal', function () {
      assert.equal(convertHandler.getNum('2.5/2'), 1.25, 'Does not equal 1.25');
    });
    // #5 read a fractional input with a decimal
    test('error on a double-fraction', function () {
      assert.equal(convertHandler.getNum('2/2/3'), 'invalid number', 'Does not throw error on a double-fraction'); 
    });
    // #6 default to a numerical input of 1 
    test('default to a numerical input of 1', function () {
      assert.equal(convertHandler.getNum(''), 1, 'Does not default to a numerical input of 1');   
    });
  });
  suite('Input Unit', function () {
      // #7 read each valid input unit
    test('read each valid input unit', function () {
      assert.equal(convertHandler.getUnit('gal'), 'gal', 'Does not read gal'); 
      assert.equal(convertHandler.getUnit('L'), 'L', 'Does not read L'); 
      assert.equal(convertHandler.getUnit('mi'), 'mi', 'Does not read mi'); 
      assert.equal(convertHandler.getUnit('kg'), 'kg', 'Does not read kg'); 
      assert.equal(convertHandler.getUnit('lbs'), 'lbs', 'Does not read lbs'); 
      assert.equal(convertHandler.getUnit('km'), 'km', 'Does not read km'); 
    });
    // #8 error for an invalid input unit
    test('error for an invalid input unit', function () {
      assert.equal(convertHandler.getUnit('gats'), 'invalid unit', 'Does not read gal'); 
    });
    
  });
  suite('Return Unit', function () {
      // #9 read each valid input unit
    test('return unit for each valid input unit', function () {
      assert.equal(convertHandler.getReturnUnit('gal'), 'L', 'Does not read gal'); 
      assert.equal(convertHandler.getReturnUnit('L'), 'gal', 'Does not read L'); 
      assert.equal(convertHandler.getReturnUnit('mi'), 'km', 'Does not read mi'); 
      assert.equal(convertHandler.getReturnUnit('kg'), 'lbs', 'Does not read kg'); 
      assert.equal(convertHandler.getReturnUnit('lbs'), 'kg', 'Does not read lbs'); 
      assert.equal(convertHandler.getReturnUnit('km'), 'mi', 'Does not read km'); 
    });
    // #10
    test('spelled-out string unit for each valid input unit', function () {
      assert.equal(convertHandler.spellOutUnit('gal'), 'gallons', 'Does not read gal'); 
      assert.equal(convertHandler.spellOutUnit('L'), 'liters', 'Does not read L'); 
      assert.equal(convertHandler.spellOutUnit('mi'), 'miles', 'Does not read mi'); 
      assert.equal(convertHandler.spellOutUnit('kg'), 'kilograms', 'Does not read kg'); 
      assert.equal(convertHandler.spellOutUnit('lbs'), 'pounds', 'Does not read lbs'); 
      assert.equal(convertHandler.spellOutUnit('km'), 'kilometers', 'Does not read km'); 
    });
    
  });
  suite('Convert', function () {
      // #11 correctly convert
    test('correctly convert gal', function () {
      assert.equal(convertHandler.convert(1,'gal'), 3.78541, 'Does not read gal'); 
    });
    // #12 correctly convert
    test('correctly convert L', function () {
      assert.equal(convertHandler.convert(1,'L'), 0.26417, 'Does not read gal'); 
    });
    // #13 correctly convert
    test('correctly convert mi', function () {
      assert.equal(convertHandler.convert(1,'mi'), 1.60934, 'Does not read gal'); 
    });
    // #14 correctly convert
    test('correctly convert kg', function () {
      assert.equal(convertHandler.convert(1,'kg'), 2.20462, 'Does not read gal'); 
    });
    // #15 correctly convert
    test('correctly convert lbs', function () {
      assert.equal(convertHandler.convert(1,'lbs'), 0.45359, 'Does not read gal'); 
    });
    // #16 correctly convert
    test('correctly convert km', function () {
      assert.equal(convertHandler.convert(1,'km'), 0.62137, 'Does not read gal'); 
    });
    
  });
    
});
