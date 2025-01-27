# Unexpected Behavior with Null or Undefined Arguments

This repository demonstrates a common JavaScript bug related to handling null or undefined function arguments.  The `foo` function exhibits unexpected behavior when one or both of its arguments are null or undefined. This can lead to errors or incorrect results.

The bug is explained in detail in `bug.js`, and a solution is provided in `bugSolution.js`. The solution focuses on explicitly checking for null or undefined arguments and handling them appropriately.  This avoids potential unexpected behavior and improves the robustness of the function.

This example highlights the importance of defensive programming in JavaScript, ensuring functions can gracefully handle various input scenarios.