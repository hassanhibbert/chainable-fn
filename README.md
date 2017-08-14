# chainable-fn
A small utility to create chainable methods with pure functions

Example

```javascript
// Example functions
var add = function (a, b) { return a + b };
var multiply = function (a, b) { return a * b };
var subtract = function (a, b) { return a - b };
var divide = function (a, b) { return a / b };
var square = function (a) { return a * a };

// Usage
var value = Chainable(4)
  .next(add, 5)
  .next(subtract, 3)
  .next(multiply, 10)
  .next(divide, 2)
  .next(square)
  .value();

console.log(value); // 900
```
