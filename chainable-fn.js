(function (root) {

  var Chainable = {
    next: function (func) {
      var args = [].slice.call(arguments, 1);
      this.currentValue[0] = func.apply(this, this.currentValue.concat(args));
      return this;
    },
    value: function () {
      return this.currentValue[0];
    }
  };

  var setupChainable = function (value) {
    var context = Object.create(Chainable);
    context.currentValue = [value];
    return context;
  };

  root.Chainable = root.Chainable || setupChainable;

})(window);
