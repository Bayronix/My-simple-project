// function countHoursAndMinutes(hours) {
//   const countHours = parseInt(hours / 60);
//   const countMinutes = hours % 60;
//   return `hours: ${countHours}, minutes: ${countMinutes}`;
// }

// console.log(countHoursAndMinutes(145));

// function isPalindrome(str) {
//   const reversed = str.split("").reverse().join("");
//   if (str === reversed) {
//     return true;
//   } else {
//     return false;
//   }
// }

// console.log(isPalindrome("hello"));

function isPrime(number) {
  if (number <= 1) {
    return false;
  }
  for (let i = 2; i <= Math.sqrt(number); i++) {
    if (number % i === 0) {
      return false;
    }
  }
  return true;
}

console.log(isPrime(2));
