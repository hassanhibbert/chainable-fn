(function (root) {

  var Chainable = {
    next: function (func) {
      var args = [].slice.call(arguments, 1);
      this.returnValue = func.apply(this, this.currentValue.concat(args));
      this.currentValue = [this.returnValue];
      return this;
    },
    value: function () {
      return this.returnValue;
    }
  };

  var setupChainable = function (value) {
    var context = Object.create(Chainable);
    context.currentValue = [value];
    context.returnValue = null;
    return context;
  };

  root.Chainable = root.Chainable || setupChainable;

})(window);

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