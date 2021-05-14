"use strict";

var httpMocks = require("node-mocks-http");
var ctrl = require("./helloWorld.controller");

describe("Controller: helloWorld", function () {
  var req, res;

  beforeEach(function () {
    req = httpMocks.createRequest();
    res = httpMocks.createResponse();
  });

  it("should send the hello world object back", function () {

    //Arrange
    spyOn(res, "json");
    var expectedResult = {
      "hello": "world"
    };

    //Act
    ctrl.helloWorld(req, res);

    //Assert
    expect(res.json).toHaveBeenCalledTimes(1);
    expect(res.json).toHaveBeenCalledWith(expectedResult)

  });


});
