function telephoneCheck(str) {
    let val = str.split('')
  
    val = val.filter(x => x!=' ');
  
    if(val.filter(Number).length = 10 && val[3]=='-' && val[7]=='-'){
      return true;
    }
  
    if((val.filter(Number).length >= 11 && val.filter(Number)[0] != '1') || val.filter(Number).length < 10){
      return false;
    }

    
    if (val.length > 14 || val.length < 10){
      return false;
    }
  
    if (val.length > 10 && (val[0] != '1' && val[0] != '(')){
        return false
    }
  
    if ((val.includes('(') && !val.includes(')')) || (val.includes(')') && !val.includes('(')) || (val.indexOf(')') < val.indexOf('(')) || (val.indexOf(')') - val.indexOf('(') > 4)){
      return false;
    }
  
    return true;
  } 
  
  telephoneCheck("555-555-5555");