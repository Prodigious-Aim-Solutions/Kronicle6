import {Core} from '../build/Core.js';
import {Module} from '../build/Module.js';
import {Kronicle} from '../build/Kronicle.js';
import should from 'should';

describe('Module', () => {
    it('It should have a method initialize', () =>{
        var mod = new Module();
        mod.should.have.property('initialize');
    });
});

describe('Core', () => {
    it('It should accept a property addedModules', () => {
        var mod = new Module();
        var core = new Core(new Array(mod));
        core.should.have.property('addedModules');
    })
    it('addedModules should be an object that allows users to reference modules by name', () => {
        var mod = new Module({name: "test"});
        var core = new Core(new Array(mod));
        core.should.have.property('addedModules').which.is.an.Object;
        core.addedModules.test.should.exists;
    });
});

describe('Kronicle', () => {
    var mod = new Module({name: 'test'});
    var kronicle = new Kronicle().build({modules: [mod]});
    
    it('It should have a method initialize', () => {
        kronicle.should.have.property('initialize');
    });

    it('It should have a method beforeModulesLoad', () => {
        
        kronicle.should.have.property('beforeModulesLoad');
    });

    it('It should have a method moduleLoaded', () => {
        kronicle.should.have.property('moduleLoaded');
    });

    it('It should have a method afterModulesLoad', () =>{
        kronicle.should.have.property('afterModulesLoad');
    });

    it('It should have a method ready', () => {
        kronicle.should.have.property('ready');
    });

    it('It should have a method ready', () => {
        kronicle.should.have.property('ready');
    });
    
    it('It should have a method start which takes a callback that receives an object which contains loadedModules', (done) => {    
        kronicle.should.have.property('start');
        kronicle.start((app) =>{
            app.should.exist;
            app.should.have.property('test');
            done();
        });
    });
    
    it('It should have a method build', () => {
        kronicle.should.have.property('build');
    });

    it('It should have a property core', () => {
        kronicle.should.have.property('ready');
    });

});