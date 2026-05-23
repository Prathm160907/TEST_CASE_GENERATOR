// // /**
// //  * Add two numbers
// //  * @param {number} a
// //  * @param {number} b
// //  * @returns {number}
// //  */
// // export function add(a, b) {
// //   return a + b;
// // }

// // /**
// //  * Divide a by b. Throws if b is zero.
// //  */
// // export function divide(a, b) {
// //   if (b === 0) {
// //     throw new Error("Cannot divide by zero");
// //   }
// //   return a / b;
// // }

// // /**
// //  * Check if a string is a palindrome
// //  * @param {string} text
// //  */
// // export const isPalindrome = (text) => {
// //   const cleaned = text.toLowerCase().replace(/\s/g, "");
// //   return cleaned === cleaned.split("").reverse().join("");
// // };

// // /**
// //  * Fetch user from API
// //  * @param {string} userId
// //  */
// // export async function fetchUser(userId) {
// //   if (!userId) throw new Error("userId is required");
// //   const res = await fetch(`https://api.example.com/users/${userId}`);
// //   if (!res.ok) throw new Error(`HTTP error: ${res.status}`);
// //   return res.json();
// // }

// // export function avr(a, b) {
// //   return (a + b) / 2;
// // }
// const numbers = [1, 2, 3, 2, 4, 5, 5, 6];

// const duplicates = numbers.filter((item, index) => {
//     // Return true if the current item exists elsewhere in the array
//     return numbers.indexOf(item) !== index;
// });

// // To get only unique duplicates (no repeats in results):
// const uniqueDuplicates = [...new Set(duplicates)];

// console.log(uniqueDuplicates); // [2, 5]
// public class Utils {

//     public static int add(int a, int b) {
//         return a + b;
//     }

//     public static int divide(int a, int b) {
//         if (b == 0) throw new ArithmeticException("Cannot divide by zero");
//         return a / b;
//     }

//     public static boolean isPalindrome(String text) {
//         String cleaned = text.toLowerCase().replaceAll("\\s", "");
//         String reversed = new StringBuilder(cleaned).reverse().toString();
//         return cleaned.equals(reversed);
//     }
// }