export function Log() {
  return function(target, propertyName): any {

    let val;
    return {
      set: function (value) {
        val = value;
        console.log(`Set ${propertyName} to ${value}`);
      },
      get: function() {
        return val;
      }
    };
  };
}
