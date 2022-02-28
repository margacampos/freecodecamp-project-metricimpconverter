'use strict';

const expect = require('chai').expect;
const ConvertHandler = require('../controllers/convertHandler.js');

module.exports = function (app) {
  
  let convertHandler = new ConvertHandler();
  
  app.get('/api/convert',(req, res)=>{
    let {input} = req.query;
    
    const initNum = convertHandler.getNum(input);
    const initUnit = convertHandler.getUnit(input);
      
      function whiteSpaces(arg) {
        let whiteRegex = /[\s]+/;
        return whiteRegex.test(input);
      }

      if (initNum === "invalid number" && initUnit === "invalid unit" || input === "" || whiteSpaces(input)) {
        console.log(input,' inv number and unit')
        res.json('invalid number and unit');
      } 
      if(initNum==='invalid number'){
        console.log(input, ' invalid number')
        res.json('invalid number');
      }
      
      if(initUnit==='invalid unit'){
        console.log(input,' invalid unit')
        res.json('invalid unit');
      }
      const returnNum = convertHandler.convert(initNum, initUnit);
      const returnUnit = convertHandler.getReturnUnit(initUnit);
      const returnUnitString = convertHandler.spellOutUnit(returnUnit);
      const initUnitString = convertHandler.spellOutUnit(initUnit);
      const string = convertHandler.getString(initNum, initUnitString, returnNum, returnUnitString);
        
      console.log(input, ' correct')
      res.json({ initNum: initNum, initUnit: initUnit, returnNum: returnNum, returnUnit: returnUnit, string: string });
      
    
  });

};

