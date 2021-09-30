
function dec2bin(dec) {
    return (dec >>> 0).toString(2);
  }
  
  console.log(dec2bin(50));
  console.log(dec2bin(-325)); 
  console.log(dec2bin(678)); 
  console.log(dec2bin(-10));