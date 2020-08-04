JSResult
/********Refactored Code (without Comments)*********/

// const pal = valueInQuestion => valueInQuestion.toString().split("").reverse().join("")===valueInQuestion.toString();

// let answer = 0;

// for (let num = 999; num >= 0; num--) {
//   for (let num2 = 999; num2 >= 0; num2--) {
//     if (pal(num * num2) && num * num2 >= answer) {
//       answer = num * num2;
//       console.log(num, num2);
//     }
//   }
// }
// console.log(answer);

/********Code with Comments*********/
const pal = function (numberInQuestion) {
  /********Function pal() returns true or false based on whether initial number is palindrome*********/

  /********Converts Number to "String"*********/
  let numberString = numberInQuestion.toString();

  /********Puts String into Array*********/
  let numbersInArray = numberString.split("");

  /********Reverse the Indexes of the Array*********/
  let reverseNumbersInArray = numbersInArray.reverse();

  /********Joins all the values of the array together*********/
  let reverseString = reverseNumbersInArray.join("");

  /********Returns Comparison of the reverse string and inital number converted to string*********/
  if (Number(reverseString) === numberInQuestion) {
    return true;
  } else {
    return false;
  }

  /********(return Number(reverseString) === numberInQuestion?true:false)*********/

  /********Function pal() returns true or false based on whether initial number is palindrome*********/
};

/********This will soon be my answer variable*********/
let answer = 0;

/********For Loop starting at 999 and ends at 0*********/
for (let num = 999; num >= 0; num--) {
  /********Nested For Loop starting at 999 and ends at 0*********/
  for (let num2 = 999; num2 >= 0; num2--) {
    /********Verifies if num*num2 is a palindrome and if it is greater than my current answer*********/
    if (pal(num * num2) && num * num2 >= answer) {
      /********If True, ReAssign my answer variable, and console log the two numbers I used to get the answer*********/
      answer = num * num2;

      console.log(num, num2);
    }
  }
}

console.log(answer);

console.log(Jim);



Resources1×0.5×0.25×Rerun
