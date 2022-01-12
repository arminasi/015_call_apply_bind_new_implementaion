"use strict"

Function.prototype.fakeCall = function (self, ...args) {
    self.fn = this;
    return self.fn(args);
}