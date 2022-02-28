function ConvertHandler() {
  
  this.getNum = function(input) {
    let result;
    if(/\d/.test(input)){
      if(/(?<![/.])(\d+\.\d+\/\d+\.\d+|\d+\.\d+\/\d+|\d+\.\d+|\d+\/\d+\.\d+|\d+\/\d+)(?![/.])/.test(input)){
        result=input.match(/(\d+\.\d+\/\d+\.\d+|\d+\.\d+\/\d+|\d+\.\d+|\d+\/\d+\.\d+|\d+\/\d+)/)[0]; 
      }else if(/[/.]+/.test(input)){
        result ='invalid number';
      }else{
        result = input.match(/\d+/)[0];
      }
    }else{
      result=1;
    }
    
    if(/\//.test(result)){
      const nums = result.split('/');
      result = Math.floor((nums[0]/nums[1])*100000)/100000;
    }

    return result;
  };
  
  this.getUnit = function(input) {
    let unit=/([a-z]+)/i.test(input)?input.match(/([a-z]+)/i)[0]:'invalid unit';
    let lowerUnit = unit==='L'?unit:unit==='l'?unit.toUpperCase():unit.toLowerCase();
    let result;
    if(lowerUnit!=='gal'&& lowerUnit!=='L'&& lowerUnit!=='lbs' && lowerUnit!=='kg' && lowerUnit!=='mi'&& lowerUnit!=='km'){
      result='invalid unit';
    }else{
      result = lowerUnit;
    }

    return result;
  };
  
  
  this.getReturnUnit = function(initUnit) {
    let result;
    switch(initUnit){
      case 'gal':
        result='L';
        break;
      case 'lbs':
        result='kg';
        break;
      case 'mi':
        result='km';
        break;
      case 'km':
        result='mi';
        break;
      case 'kg':
        result='lbs';
        break;
      case 'L':
        result='gal';
        break;
      default:
        result='invalid unit';
        break;
    }
    return result;
  };

  this.spellOutUnit = function(unit) {
    let result;
    switch(unit){
      case 'gal':
        result='gallons';
        break;
      case 'lbs':
        result='pounds';
        break;
      case 'mi':
        result='miles';
        break;
      case 'km':
        result='kilometers';
        break;
      case 'kg':
        result='kilograms';
        break;
      case 'L':
        result='liters';
        break;
      default:
        result='invalid unit';
        break;
    }
    return result;
  };
  
  this.convert = function(initNum, initUnit) {
    const galToL = 3.78541;
    const lbsToKg = 0.453592;
    const miToKm = 1.60934;
    let result;
    
    switch(initUnit){
      case 'gal':
        result=Math.floor(initNum*galToL*100000)/100000;
        break;
      case 'lbs':
        result=Math.floor(initNum*lbsToKg*100000)/100000;
        break;
      case 'mi':
        result=Math.floor(initNum*miToKm*100000)/100000;
        break;
      case 'km':
        result=Math.floor((initNum/miToKm)*100000)/100000;
        break;
      case 'kg':
        result=Math.floor((initNum/lbsToKg)*100000)/100000;
        break;
      case 'L':
        result=result=Math.floor((initNum/galToL)*100000)/100000;;
        break;
      default:
        result='invalid unit';
        break;
    }
    

    return result;
  };
  
  this.getString = function(initNum, initUnit, returnNum, returnUnit) {
    let result=`${initNum} ${initUnit} converts to ${returnNum} ${returnUnit}`;

    return result;
  };
  
}

module.exports = ConvertHandler;

  
  this.getString = function(initNum, initUnit, returnNum, returnUnit) {
    let result;
    
    return result;
  };
  
}

module.exports = ConvertHandler;
