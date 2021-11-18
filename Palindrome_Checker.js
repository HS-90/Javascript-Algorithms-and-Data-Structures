function palindrome(str) {
    str = str.toLowerCase()
  
    let str2 = str.split('');
  
    var x = 0;
    while(x < str2.length){
      if(!str2[x].match(/^[0-9a-z]+$/)){
        str2.splice(x,1);
        x = x;
      }else{
        x++;
      }
    }

    return str2.join('') === str2.reverse().join('');
  }
  
  
  
  palindrome("A man, a plan, a canal. Panama");