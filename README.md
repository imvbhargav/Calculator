# freeCodeCamp's Frontend Development Libraries Certification
## JavaScript Calculator
### Tests passed: 16/16
#Technology Stack
1. You can use any mix of HTML, JavaScript, CSS, Bootstrap, SASS, React, Redux, and jQuery to complete this project. You should use a frontend framework (like React for example) because this section is about learning frontend frameworks. Additional technologies not listed above are not recommended and using them is at your own risk. We are looking at supporting other frontend frameworks like Angular and Vue, but they are not currently supported. We will accept and try to fix all issue reports that use the suggested technology stack for this project. Happy coding!
#Tests
1. My calculator should contain a clickable element containing an "=" (equal sign) with a corresponding id="equals"
2. My calculator should contain 10 clickable elements containing one number each from 0-9, with the following corresponding IDs: id="zero", id="one", id="two", id="three", id="four", id="five", id="six", id="seven", id="eight", and id="nine"
3. My calculator should contain 4 clickable elements each containing one of the 4 primary mathematical operators with the following corresponding IDs: id="add", id="subtract", id="multiply", id="divide"
4. My calculator should contain a clickable element containing a "." (decimal point) symbol with a corresponding id="decimal"
5. My calculator should contain a clickable element with an id="clear"
6. My calculator should contain an element to display values with a corresponding id="display"
7. At any time, pressing the clear button clears the input and output values, and returns the calculator to its initialized state; 0 should be shown in the element with the id of "display"214ms
8. As I input numbers, I should be able to see my input in the element with the id of "display"202ms
9. In any order, I should be able to add, subtract, multiply and divide a chain of numbers of any length, and when I hit "=", the correct result should be shown in the element with the id of "display"423ms
10. When inputting numbers, my calculator should not allow a number to begin with multiple zeros.217ms
11. When the decimal element is clicked, a "." should append to the currently displayed value; two "." in one number should not be accepted625ms
12. I should be able to perform any operation (+, -, *, /) on numbers containing decimal points840ms
13. If 2 or more operators are entered consecutively, the operation performed should be the last operator entered (excluding the negative (-) sign.638ms
14. Pressing an operator immediately following "=" should start a new calculation that operates on the result of the previous evaluation425ms
15. My calculator should have several decimal places of precision when it comes to rounding (note that there is no exact standard, but you should be able to handle calculations like "2 / 7" with reasonable precision to at least 4 decimal places)203ms
