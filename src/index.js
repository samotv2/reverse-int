module.exports = function reverse (n) {
  
    result=0;
while (n) {
    result *= 10;
    result += n % 10;
    result = Math.floor(n / 10);
}
 
return result;
}

