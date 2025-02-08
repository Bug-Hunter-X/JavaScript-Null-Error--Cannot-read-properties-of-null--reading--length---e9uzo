# JavaScript Null Error: Cannot read properties of null (reading 'length')

This repository demonstrates a common JavaScript error and its solution.  The error occurs when attempting to access a property of a null or undefined object.

## The Bug (bug.js)
The `foo` function attempts to get the length of `x`. If `x` is `null` this will throw an error.

## The Solution (bugSolution.js)
The solution involves adding a check to see if `x` is `null` before trying to access the `.length` property.  If `x` is `null`, the function returns 0.  Otherwise it returns the length of `x`.

This illustrates the importance of defensive programming in JavaScript to handle potential null or undefined values gracefully.