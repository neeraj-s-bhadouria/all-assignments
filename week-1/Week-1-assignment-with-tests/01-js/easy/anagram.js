/*
  Write a function `isAnagram` which takes 2 parameters and returns true/false if those are anagrams or not.
  What's Anagram?
  - A word, phrase, or name formed by rearranging the letters of another, such as spar, formed from rasp.

  Once you've implemented the logic, test your code by running
  - `npm run test-anagram`
*/

//write a program to find if two strings are anagram
function isAnagram(str1, str2) {
  //removing spaces from strings and convering them into lowercase
  str1 = str1.replace(/\s/g, '').toLowerCase();
  str2 = str2.replace(/\s/g, '').toLowerCase();
  if(str1.length == str2.length){
    str1 = str1.split('').sort().join('');
    str2 = str2.split('').sort().join('');
    if(str1 == str2) {
      return true;
    }
    return false;    
  }
  return false;
}

module.exports = isAnagram;
