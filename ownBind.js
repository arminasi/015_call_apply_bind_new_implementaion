"use strict"

Function.prototype.fakeCall = function (self, ...args) {
    self.fn = this;
    return self.fn(args);
}

Function.prototype.fakeBind = function(_contetxt){
    const args = Array.from(arguments).slice(1);
    const self = this;
    return function(){
        return self.fakeCall(_contetxt, ...args)
    }
  }