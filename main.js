//1. Create two variables, assign them numeric values, and print their multiplication result.
let number1 = 5 
let number2 = 6 
let result = number1 * number2
console.log(result)

// 2. Create a variable to store your age and print a message using template literals that includes your age.
let firstName = "Bryant"
let lastName = "Facenda"
let age = 22 
console.log(`Hi, my name is ${firstName} ${lastName} and i am ${age} years old`)

//3. Create three boolean variables and use logical operators to print the result of, at least, two different conditions.
let iamHunger = true
let iamGoing = false
let iWantCoffee = false
let result1 = iamHunger && iamGoing
let result2 = iamHunger || iamGoing
let result3 = !iWantCoffee
console.log(result1)
console.log(result2)
console.log(result3)

//4. Create a little script that initialize a numeric variable, then increment it by 1, and finally, compare it with the value of pi (3.14).
let x = 4
x++
const pi = 3.14

console.log(x <= pi)

//End of the code




// new class 7/11/2025

//Exercises of class

 /**1. Declare two variables, a = 10 and b = 3.
 * Calculate the remainder when a is divided by b and store it
 * in a variable called remainder.
 * */

 let a = 10
 let b = 3

 const remainder = a % b

 console.log(remainder)

/** 2.Declare a variable age = 25.
 * Write an expression using a comparison operator to check if age
 * is greater than or equal to 18. Store the result in a variable calle
 * isAdult.
 */

let age2 = 25 
let isAdult = age >= 18 

console.log(`Is the person of legal age?${isAdult}`)


/**3. Declare a boolean variable isRaining = false.
 * Use the logical NOT operator (!) to reverse its value and store
 * the result in shouldStayInside.
 * */

 let isRaining = false
 let shouldStayInside = !isRaining

 console.log(shouldStayInside)


 /** 4. Declare a variable counter = 5. Use the post-increment operator (++)
 * once. What is the value of counter after the operation?
 * */

 let counter = 5  

 counter++

 console.log(counter)

 /**5. A configuration setting is valid if its status is a boolean OR its level
 * is a number greater than 50. Declare status = null and level = 75. Write a
 * single expression to check the validity and store the boolean result in
 * isValidConfig
 * */

 let status = null
 let level = 75

 const isValidConfig = typeof(status) == "boolean"

 console.log(`la configuracion es valida? ${isValidConfig || level > 50}`)

 /**6. Calculate the result of the expression: (5 * 4) + (20 / 5) - 3
 * WITHOUT executing the script.
 * 
 * resul = 21
 * */


 /**7. Declare numString = "5" and numInt = 5. Compare them first using the
 * loose equality operator (==) and then using the strict equality operator
 * (===). Store the results in looseResult and strictResult.*/

let numString = "5"
let numInt = 5

const strictResult = numString == numInt 

console.log(`The comparation of numStrig and numInt is ${strictResult}`)

/**8. Determine the final value of x after the following operations:
 * let x = 10;
 * x = x * 2 + 5 % 3;
 * 
 * resul is 22
 * WITHOUT executing the script.*/



/**10. Determine if an integer year = 2024 is a leap year using only operators.
 * Other forms of code are not allowed. :)*/ 

let year = 2024

let oP = year % 4

let leap = oP == 0

console.log(`The ${year} is a leap?, ${leap}`)


