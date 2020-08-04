const DivisorChecker = (a) =>
  // !(a%20 + a%19 + a%18 + a%17 + a%16 + a%15 + a%14 + a%13 + a%12 + a%11)

  !(a % 20) &&
  !(a % 19) &&
  !(a % 18) &&
  !(a % 17) &&
  !(a % 16) &&
  !(a % 15) &&
  !(a % 14) &&
  !(a % 13) &&
  !(a % 12) &&
  !(a % 11) &&
  !(a % 10) &&
  !(a % 9) &&
  !(a % 8) &&
  !(a % 7) &&
  !(a % 5) &&
  !(a % 6) &&
  !(a % 4) &&
  !(a % 3) &&
  !(a % 2);

// Here's examples of my function working
// console.log(DivisorChecker(89)) /* Should Return False */
// console.log(DivisorChecker(2*3*4*5*6*7*8*9*10*11*12*13*14*15*16*17*18*19*20)) /* Should Return True */

let answer = 0;

for (let i = 2; !DivisorChecker(i - 1); i++) {
  if (DivisorChecker(i)) {
    answer += i;
  }
}

console.log(answer);

// while (!DivisorChecker(answer)) {
//   answer++;
// }

// console.log(answer);
