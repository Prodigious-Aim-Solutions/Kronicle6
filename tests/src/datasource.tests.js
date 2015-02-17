import {DataSources} from '../build/lib/DataSources.js';
import {DataSource} from '../build/lib/DataSource.js';
import {ArrayDataSource} from '../build/lib/ArrayDataSource.js';
import should from 'should';

describe('Datasources', () => {
        it('It should contain an array of Datasources', () =>{
            var dataSources = new DataSources();
            dataSources.should.have.property('sources');
        });
});

describe('Datasource', () => {
         var dataSource = new DataSource();
         it('It should have a method login', () =>{            
            dataSource.should.have.property('login');
         });
         it('It should have a method create', () =>{
            //var dataSource = new DataSource();
            dataSource.should.have.property('create');
         });
         it('It should have a method update', () =>{
            //var dataSource = new DataSource();
            dataSource.should.have.property('update');
         });
         it('It should have a method remove', () =>{
            //var dataSource = new DataSource();
            dataSource.should.have.property('remove');
         });
         it('It should have a method get', () =>{
            //var dataSource = new DataSource();
            dataSource.should.have.property('get');
         });
         it('It should have a property name', () =>{
            //var dataSource = new DataSource();
            dataSource.should.have.property('name');
         });
         it('It should have a method onLogin', () =>{
            //var dataSource = new DataSource();
            dataSource.should.have.property('onLogin');
         });
         it('It should have a method onCreate', () =>{
            //var dataSource = new DataSource();
            dataSource.should.have.property('onCreate');
         });
         it('It should have a method onUpdate', () =>{
            //var dataSource = new DataSource();
            dataSource.should.have.property('onUpdate');
         });
         it('It should have a method onRemove', () =>{
            //var dataSource = new DataSource();
            dataSource.should.have.property('onRemove');
         });
         it('It should have a method onGet', () =>{
            //var dataSource = new DataSource();
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