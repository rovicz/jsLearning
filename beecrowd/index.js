var input = require('fs').readFileSync('./dev/stdin/file.txt', 'utf8');
var lines = input.split('\n');

var numberOne = parseInt(lines.shift())
var numberTwo = parseInt(lines.shift())



console.log('X = ' + (numberOne + numberTwo))





