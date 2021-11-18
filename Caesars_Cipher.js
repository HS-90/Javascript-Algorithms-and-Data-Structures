function rot13(str) {
    let alph = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split('');
    let str2 = str.split(''); 
    
    for(let x in str2){
      if(str2[x].match(/[a-z]/i)){
        let start = alph.indexOf(str2[x]);
        str2[x] = alph[(start+13)%26];
      }
    }
    return str2.join('');
  }
  
  rot13("SERR PBQR PNZC");