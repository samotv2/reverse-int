module.exports = function reverse (n) {
    var y = 0;
for(; n; n = Math.floor(n / 10)) {
    y *= 10;
    y += n % 10;
}
console.log(y);}