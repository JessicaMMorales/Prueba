const string = 'Mi nombre es Missael';

function reverseString(str) {
  let arrStr = string.split(' ');
  console.log(arrStr.reverse().join(' '));
}
reverseString(string); 