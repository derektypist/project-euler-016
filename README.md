# Project Euler 016 - Power Digit Sum

2<sup>15</sup> = 32768 and the sum of its digits is 3 + 2 + 7 + 6 + 8 = 26.

The aim is to find the sum of the digits of the number 2<sup>exponent</sup> using
HTML Forms and JavaScript.

Information at [Project Euler 016](https://projecteuler.net/problem=16)

## UX

**Getting Started**

Enter a whole number between 1 and 2000 in the input field and click on the Submit Button.  You will see the number entered as well as the sum of the digits of 2 to the power of the number, unless you have made an invalid input.  For example, if you entered 15, you would expect the sum of digits to be 26, as 2 to the power of 15 is 32768.  Click on the Reset Button to clear the information or to start again.

**User Stories**

As a user, I expect to get an error message, if I do any of:

- Not enter anything in the input field
- Entering a number less than 1 or greater than 2000
- Entering text other than a number
- Entering a number, but it is not an integer

As a user, I expect the function `powerDigitSum(15)` to return a number.

As a user, I expect the function `powerDigitSum(15)` to return 26.

As a user, I expect the function `powerDigitSum(128)` to return 166.

As a user, I expect the function `powerDigitSum(1000)` to return 1366.

**Information Architecture**

The function `powerDigitSum(exponent)` returns a number, where `exponent` is also a number.