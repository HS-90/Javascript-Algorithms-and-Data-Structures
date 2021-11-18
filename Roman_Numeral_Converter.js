function convertToRoman(num) {
    let key = {1:'I', 5:'V', 10:'X', 50:'L', 100:'C', 500:'D', 1000:'M'}
    
    let t = '' 
    let key_val = Object.keys(key);
    
    
    if(num < 1000){
   
    for(let x = 0; x < key_val.length-1;x++){
      if(num >= key_val[x] && num < key_val[x+1]){
        if(num.toString()[0]=='4'){
          t += key[key_val[x]];
          t += key[key_val[x+1]]
          
          //recursive call
          t += convertToRoman(num-(key_val[x+1]-key_val[x]));
          
        }else if(num.toString()[0]=='9'){
          t += key[key_val[x-1]];
          t += key[key_val[x+1]];
   
          //recursive call
          t += convertToRoman(num-(key_val[x+1]-key_val[x-1]));
          
        
        }else{
          t += key[key_val[x]];
          
          //recursive call
          t+= convertToRoman(num-key_val[x]);
   
        }}}
       
    }else{
      t+='M';
   
      t+= convertToRoman(num-1000);
    }
    return t;
   }
   
   convertToRoman(1100);