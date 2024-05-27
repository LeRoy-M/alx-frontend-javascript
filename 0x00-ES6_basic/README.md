## 0x00. ES6 Basics

**0. Const or let?** `[0-constants.js]` >> Javascript script that modifies functions `taskFirst` and `taskNext` to instantiate variables using `const` and `let` in the functions respectively.

**1. Block Scope** `[1-block-scoped.js]` >> Javascript script that modifies the variables inside the function taskBlock so that the variables aren’t overwritten inside the conditional block.

**2. Arrow functions** `[2-arrow.js]` >> Javascript script where the standard function is rewritten to use ES6's arrow syntax of the function `add`, to be an anonymous function.

**3. Parameter defaults** `[3-default-parameter.js]` >> Javascript script where the internals of the given function are condensed to 1-line without changing the name of each function/ variable (by defining default parameter values for the function parameters).

**4. Rest parameter syntax for functions** `[4-rest-parameter.js]` >> Javascript script that modifies the given function to return the number of arguments passed to it using the rest parameter syntax.

**5. The wonders of spread syntax** `[5-spread-operator.js]` >> Javascript script that uses spread syntax to concatenate 2 arrays and each character of a string by modifying the given function, into a 1-line long function.

**6. Take advantage of template literals** `[6-string-interpolation.js]` >> Javascript script with the return statement rewritten to use a template literal so as to substitute the defined variables.

**7. Object property value shorthand syntax** `[7-getBudgetObject.js]` >> Javascript script where the function's `budget` object is modified to simply use the keyname instead.

**8. No need to create empty objects before adding in properties** `[8-getBudgetCurrentYear.js]` >> Javascript script where the `getBudgetForCurrentYear` function is rewritten to use ES6 computed property names on the `budget` object.

**9. ES6 method properties** `[9-getFullBudget.js]` >> Javascript script where the `getFullBudgetObject` function is rewritten to use ES6 method properties in the `fullBudget` object.

**10. For...of Loops** `[10-loops.js]` >> JavaScript script where the `appendToEachArrayValue` function is rewritten to use ES6’s `for...of` operator, and handles `var` which is not ES6-friendly.

**11. Iterator** `[11-createEmployeesObject.js]` >> JavaScript script where a function named `createEmployeesObject` is written, which receives the following two arguments:

- `departmentName` (String)
- `employees` (Array of Strings)

The function then returns an object with the following format:

{
     $departmentName: [
          $employees,
     ],
}

**12. Let's create a report object** `[12-createReportObject.js]` >> JavaScript script where a function named `createReportObject` is written, whose parameter `employeesList` is the return value of the previous function `createEmployeesObject`.

**13. Iterating through report objects** `[100-createIteratorObject.js]` >> JavaScript script where a function named `createIteratorObject` is written, that will take into argument a report object created with the previous function `createReportObject`.

**14. Iterate through object** `[101-iterateThroughObject.js]` >> JavaScript script where a function named `iterateThroughObject` is written, that has its function parameter `reportWithIterator` as the return value from `createIteratorObject`.
