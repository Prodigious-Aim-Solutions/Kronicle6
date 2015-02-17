"use strict";

var DataSources = require('../build/lib/DataSources.js').DataSources;
var DataSource = require('../build/lib/DataSource.js').DataSource;
var ArrayDataSource = require('../build/lib/ArrayDataSource.js').ArrayDataSource;
var should = require('should')["default"];


describe("Datasources", function () {
  it("It should contain an array of Datasources", function () {
    var dataSources = new DataSources();
    dataSources.should.have.property("sources");
  });
});

describe("Datasource", function () {
  var dataSource = new DataSource();
  it("It should have a method login", function () {
    dataSource.should.have.property("login");
  });
  it("It should have a method create", function () {
    //var dataSource = new DataSource();
    dataSource.should.have.property("create");
  });
  it("It should have a method update", function () {
    //var dataSource = new DataSource();
    dataSource.should.have.property("update");
  });
  it("It should have a method remove", function () {
    //var dataSource = new DataSource();
    dataSource.should.have.property("remove");
  });
  it("It should have a method get", function () {
    //var dataSource = new DataSource();
    dataSource.should.have.property("get");
  });
  it("It should have a property name", function () {
    //var dataSource = new DataSource();
    dataSource.should.have.property("name");
  });
  it("It should have a method onLogin", function () {
    //var dataSource = new DataSource();
    dataSource.should.have.property("onLogin");
  });
  it("It should have a method onCreate", function () {
    //var dataSource = new DataSource();
    dataSource.should.have.property("onCreate");
  });
  it("It should have a method onUpdate", function () {
    //var dataSource = new DataSource();
    dataSource.should.have.property("onUpdate");
  });
  it("It should have a method onRemove", function () {
    //var dataSource = new DataSource();
    dataSource.should.have.property("onRemove");
  });
  it("It should have a method onGet", function () {
    //var dataSource = new DataSource();
    dataSource.should.have.property("onGet");
  });
});

describe("ArrayDataSource", function () {
  var arraySource = new ArrayDataSource();
  it("It should be able to add a new item through create", function (done) {
    arraySource.create({ _id: 1, data: "Hello World!" }, function (err, item) {
      (err === null).should.be.true;
      item.data.should.be.equal("Hello World!");
      done();
    });
  });
  it("It should be able to update an item through update", function (done) {
    arraySource.update({ _id: 1, data: "Hellow World Update!" }, function (err, item) {
      (err === null).should.be.true;
      item.data.should.be.equal("Hellow World Update!");
      done();
    });
  });
  it("It should be able to get an item through get", function (done) {
    arraySource.get(1, function (err, item) {
      (err === null).should.be.true;
      item.data.should.be.equal("Hellow World Update!");
      done();
    });
  });
  it("It should be able to delete an item through remove", function (done) {
    arraySource.remove(1, function (err, item) {
      (err === null).should.be.true;
      item.should.equal(0);
      done();
    });
  });
});