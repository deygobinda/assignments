/*
  Implement a function `isPalindrome` which takes a string as argument and returns true/false as its result.
  Note: the input string is case-insensitive which means 'Nan' is a palindrom as 'N' and 'n' are considered case-insensitive.
*/

function isPalindrome(str) {
  // Convert the string to lowercase and remove non-alphanumeric characters
  let cleanedStr = str.toLowerCase().replace(/[^a-z0-9]/g, '');

  // Compare the cleaned string to its reverse
  return cleanedStr === cleanedStr.split('').reverse().join('');
}


module.exports = isPalindrome;
