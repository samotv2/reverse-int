module.exports = function reverse (n) {
    var res = 0;
   
     while( n !=0) {
            res *= 10;
            res += n % 10;
            n /= 10;

        }
    
        
        return (Math.abs(res));
 }
             
          
