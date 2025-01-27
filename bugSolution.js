function foo(a, b) {
  a = a === undefined ? 0 : a; // Use default value if undefined
  b = b === undefined ? 0 : b; // Use default value if undefined

  if (a === null || b === null) {
    console.warn('Null value(s) detected, returning 0.');
    return 0;
  }

  // ... rest of your function code ...
  return a + b; // Example calculation
}