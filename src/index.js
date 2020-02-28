module.exports = function reverse (n) {
    const reverseInt = (n) =>
    let str = String(n);
    let result ='';
    if(str[0] =='-'{
       result = '-' +result;
       console.log (result);}
str= String (Math.abs(n));
sonsole.log (str);

for (let i = str.length; i>0; i--){
    console.log (result);
    result += str[i-1];
    console.log (result);
}
return Number (result);
        
 }
             
          
