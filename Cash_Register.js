function checkCashRegister(price, cash, cid) {
  
    //make lookup of values of different bills
    let unit = {
      'PENNY': 0.01,
      'NICKEL': 0.05,
      'DIME': 0.1,
      'QUARTER': 0.25,
      'ONE': 1,
      'FIVE': 5,
      'TEN': 10,
      'TWENTY':20,
      'ONE HUNDRED': 100,
    }
    
    //the amount of change needed to return
    let chg = Math.round((cash - price)*100)/100;
    
    //make copy of drawer without reference to old array
    let cid2 = JSON.parse(JSON.stringify(cid));
    
    //sort cash in drawer copy with largest bills first
    cid2 = cid2.sort((a,b)=>{
      return unit[b[0]] - unit[a[0]];
    });
    
    let g = {'status':"", 'change':[]};
  
    //keep track of what denomination of bills
    let x = 0;

    while(x<cid2.length){
      let temp = [cid2[x][0],0];
      
      //check if change left is greater than current bill and there are bills available
      while(chg >= unit[cid2[x][0]] & cid2[x][1] > 0){
        
        temp[1]+= Math.round(unit[cid2[x][0]]*100)/100;
        
        chg = chg - Math.round(unit[cid2[x][0]]*100)/100;
        chg = Math.round(chg*100)/100;
        
        cid2[x][1] = cid2[x][1] - Math.round(unit[cid2[x][0]]*100)/100;   
        cid2[x][1] = Math.round(cid2[x][1]*100)/100;
        
      //if change left is less than the current bill or ran out of current bills, increment x by 1
      }if(temp[1]>0){
       temp[1] = Math.round(temp[1]*100)/100; 
  
       g['change'].push(temp);
       x++;
     
     //if the change left is less than current bill increment x by 1
     }else{
       x++;
     }
    }
      
    //if there isnt enough funds or can't return exact change
    if(chg>0){
      g['change'] = [];
      g['status'] = "INSUFFICIENT_FUNDS";
      return g;
    }
  
    else if(chg===0 && cid2.map(x=>x[1]).reduce((a,b)=>a+b,0)===0){
      g['change'] = cid;
      g['status'] = "CLOSED";
  
      return g;
    
    }else{
      g['status'] = "OPEN";
  
      return g;
    }    
    
  }
  
  checkCashRegister(19.5, 20, [["PENNY", 0.5], ["NICKEL", 0], ["DIME", 0], ["QUARTER", 0], ["ONE", 0], ["FIVE", 0], ["TEN", 0], ["TWENTY", 0], ["ONE HUNDRED", 0]]);