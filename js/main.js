/**
 * todo : voting application
 */

let input = prompt("Enter your age");
let ageInput = +input;

if (ageInput >= 130) {
  console.log("Over age, tumi morar jonno ready hou");
} else if (ageInput > 0 && ageInput < 18) {
  console.log("Under age, ");
} else if (ageInput >= 18 && ageInput <= 80) {
  console.log("Perfect age");
} else if (ageInput > 80 && ageInput < 130) {
  console.log("Vote dite parbe");
} else if (ageInput <= 0) {
  console.log("Wrong input");
} else {
  console.log("Invalid input");
}