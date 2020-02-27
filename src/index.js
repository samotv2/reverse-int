module.exports = function reverse (n) {
    var res = 0;
   
   while (Math.abs(n/10)>0)
   {
            a =n%10;
            n=Math.floor(n/10);
            res=res*10+a;
        }
    
        
        return (Math.abs(res));
 }
             
          
