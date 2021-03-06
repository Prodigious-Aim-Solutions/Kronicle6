import {DataSources} from '../build/lib/DataSources.js';
import {DataSource} from '../build/lib/DataSource.js';
import {ArrayDataSource} from '../build/lib/ArrayDataSource.js';
import should from 'should';

describe('Datasources', () => {
    
    it('It should contain an array of Datasources', () => { 
        let dataSources = new DataSources();
        dataSources.should.have.property('sources');
    });
    it('It should take an array of datasources that are accessed through souces', () => {
        let dataSources = new DataSources([new DataSource({source: new ArrayDataSource(), name: 'ArrayDataSource'})]);
        dataSources.sources.should.have.property('ArrayDataSource');
    });
});

describe('Datasource', () => {
    var dataSource = new DataSource();
    it('It should have a method login', () =>{            
        dataSource.should.have.property('login');
    });
    it('It should have a method create which takes an item and a callback(not required)', (done) =>{
        dataSource.should.have.property('create');
        dataSource.create('test');
        dataSource.create('test', () =>{
            done();
        });
    });
    it('It should have a method update which takes an item and a callback(not required)', (done) =>{
        dataSource.should.have.property('update');
        dataSource.update('test');
        dataSource.update('test', () =>{
            done();
        });
    });
    it('It should have a method remove which takes an item and a callback(not required)', (done) =>{
        dataSource.should.have.property('remove');
        dataSource.remove('test');
        dataSource.remove('test', () =>{
            done();
        });
    });
    it('It should have a method get which takes an item and a callback(not required)', (done) =>{
        dataSource.should.have.property('get');
        dataSource.get('test');
        dataSource.get('test', () =>{
            done();
        });
    });
    it('It should have a property name', () =>{
        dataSource.should.have.property('name');
    });
    it('It should have a method onLogin', () =>{
        dataSource.should.have.property('onLogin');
    });
    it('It should have a method onCreate', () =>{
        dataSource.should.have.property('onCreate');
    });
    it('It should have a method onUpdate', () =>{
        dataSource.should.have.property('onUpdate');
    });
    it('It should have a method onRemove', () =>{
        //var dataSource = new DataSource();
        dataSource.should.have.property('onRemove');
    });
    it('It should have a method onGet', () =>{
        dataSource.should.have.property('onGet');
    });
});

describe('ArrayDataSource', () => {
    var arraySource = new ArrayDataSource();
    it('It should be able to add a new item through create', (done) => {
        arraySource.create({_id: 1, data: 'Hello World!'}, (err, item) =>{
            (err === null).should.be.true;
            item.data.should.be.equal('Hello World!');
            done();
        });
    });
    it('It should be able to update an item through update', (done) => {
        arraySource.update({_id: 1, data: 'Hellow World Update!'}, (err, item) =>{
            (err === null).should.be.true;
            item.data.should.be.equal('Hellow World Update!');
            done();
        });
    });
    it('It should be able to get an item through get', (done) => {
        arraySource.get(1, (err, item) =>{
            (err === null).should.be.true;
            item.data.should.be.equal('Hellow World Update!');
            done();
        });
    });
    it('It should be able to delete an item through remove', (done) => {
        arraySource.remove(1, (err, item) =>{
            (err === null).should.be.true;
            item.should.equal(0);
            done();
        });
    });
});