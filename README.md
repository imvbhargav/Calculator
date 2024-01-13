# freeCodeCamp's Frontend Development Libraries Certification Project.
## JavaScript Calculator
### Tests passed: 16/16
#### Technology Stack
1. You can use any mix of HTML, JavaScript, CSS, Bootstrap, SASS, React, Redux, and jQuery to complete this project. You should use a frontend framework (like React for example) because this section is about learning frontend frameworks. Additional technologies not listed above are not recommended and using them is at your own risk. We are looking at supporting other frontend frameworks like Angular and Vue, but they are not currently supported. We will accept and try to fix all issue reports that use the suggested technology stack for this project. Happy coding!

#### Tests
1. My calculator should contain a clickable element containing an "=" (equal sign) with a corresponding id="equals"
2. My calculator should contain 10 clickable elements containing one number each from 0-9, with the following corresponding IDs: id="zero", id="one", id="two", id="three", id="four", id="five", id="six", id="seven", id="eight", and id="nine"
3. My calculator should contain 4 clickable elements each containing one of the 4 primary mathematical operators with the following corresponding IDs: id="add", id="subtract", id="multiply", id="divide"
4. My calculator should contain a clickable element containing a "." (decimal point) symbol with a corresponding id="decimal"
5. My calculator should contain a clickable element with an id="clear"
6. My calculator should contain an element to display values with a corresponding id="display"
7. At any time, pressing the clear button clears the input and output values, and returns the calculator to its initialized state; 0 should be shown in the element with the id of "display" 214ms
8. As I input numbers, I should be able to see my input in the element with the id of "display" 202ms
9. In any order, I should be able to add, subtract, multiply and divide a chain of numbers of any length, and when I hit "=", the correct result should be shown in the element with the id of "display" 423ms
10. When inputting numbers, my calculator should not allow a number to begin with multiple zeros. 217ms
11. When the decimal element is clicked, a "." should append to the currently displayed value; two "." in one number should not be accepted 625ms
12. I should be able to perform any operation (+, -, *, /) on numbers containing decimal points 840ms
13. If 2 or more operators are entered consecutively, the operation performed should be the last operator entered (excluding the negative (-) sign. 638ms
14. Pressing an operator immediately following "=" should start a new calculation that operates on the result of the previous evaluation 425ms
15. My calculator should have several decimal places of precision when it comes to rounding (note that there is no exact standard, but you should be able to handle calculations like "2 / 7" with reasonable precision to at least 4 decimal places) 203ms
***
#### Additional Goal:
##### The Odin Project's Javascript Calculator.
Here are some use cases (abilities your project needs to have):

1. Your calculator is going to contain functions for all of the basic math operators you typically find on calculators, so start by creating functions for the following items and testing them in your browser’s console.
     - add
     - subtract
     - multiply
     - divide
1. A calculator operation will consist of a number, an operator, and another number. For example, 3 + 5. Create three variables for each of the parts of a calculator operation. Create a variable for the first number, the operator, and the second number. You’ll use these variables to update your display later.
1. Create a new function operate that takes an operator and 2 numbers and then calls one of the above functions on the numbers.
1. Create a basic HTML calculator with buttons for each digit, each of the above functions and an “Equals” key.
     - Do not worry about wiring up the JS just yet.
     - There should also be a display for the calculator. Go ahead and fill it with some dummy numbers so it looks correct.
     - Add a “clear” button.
1. Create the functions that populate the display when you click the number buttons. You should be storing the ‘display value’ in a variable somewhere for use in the next step.
1. Make the calculator work! You’ll need to store the first number and second number that are input into the calculator, utilize the operator that the user selects, and then operate() on the two numbers when the user presses the “=” key.
     - You should already have the code that can populate the display, so once operate() has been called, update the display with the ‘solution’ to the operation.
     - This is the hardest part of the project. You need to figure out how to store all the values and call the operate function with them. Don’t feel bad if it takes you a while to figure out the logic.
1. Gotchas: watch out for and fix these bugs if they show up in your code:
     - Users should be able to string together several operations and get the right answer, with each pair of numbers being evaluated at a time. For example, 12 + 7 - 5 * 3 = should yield 42. An example of the behavior we’re looking for would be this student solution.
     - Your calculator should not evaluate more than a single pair of numbers at a time. Example: you press a number button (12), followed by an operator button (+), a second number button (7), and finally a second operator button (-). Your calculator should then do the following: first, evaluate the first pair of numbers (12 + 7), second, display the result of that calculation (19), and finally, use that result (19) as the first number in your new calculation, along with the next operator (-).
     - You should round answers with long decimals so that they don’t overflow the screen.
     - Pressing = before entering all of the numbers or an operator could cause problems!
     - Pressing “clear” should wipe out any existing data.. make sure the user is really starting fresh after pressing “clear”
     - Display a snarky error message if the user tries to divide by 0… and don’t let it crash your calculator!
1. Extra credit
     - Users can get floating point numbers if they do the math required to get one, but they can’t type them in yet. Add a . button and let users input decimals! Make sure you don’t let them type more than one though: 12.3.56.5. It is hard to do math on these numbers. (disable the decimal button if there’s already one in the display)
     - Make it look nice! This is a great project to practice your CSS skills. At least make the operations a different color from the keypad buttons.
     - Add a “backspace” button, so the user can undo if they click the wrong number.
     - Add keyboard support! You might run into an issue where keys such as (/) might cause you some trouble. Read the MDN documentation for event.preventDefault to help solve this problem.
***
### NOTE: _This app does not fulfill all conditions of The Odin Project as the main focus is on freeCodeCamp, The Odin Project is just a addtional_
***

[Deployed with GitHub Pages](https://imvbhargav/github.io/Calculator)
