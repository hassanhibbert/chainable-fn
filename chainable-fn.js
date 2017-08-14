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
    context.returnValue = context.currentValue;
    return context;
  };

  root.Chainable = root.Chainable || setupChainable;

})(window);
