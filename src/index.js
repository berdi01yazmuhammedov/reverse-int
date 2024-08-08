module.exports = function reverse (n) {
    let numbers = n.toString().split('');
    numbers = numbers.reverse();
    numbers = numbers.join('');
    return parseInt(numbers);
  
}
