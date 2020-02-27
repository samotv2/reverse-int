module.exports = function reverse (n) {
    var res = 0;
        
        while(n) {
            res *= 10;
            res = res + n % 10;
            n= Math.floor(n/10);
        }
        
        return (Math.abs(res));
 }
             
          
