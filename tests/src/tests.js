import {Core} from '../build/Core.js';
import {Module} from '../build/Module.js';
import {Kronicle} from '../build/Kronicle.js';
import should from 'should';

describe('Module', () => {
         it('It should have a method initialize', () =>{
            var mod = new Module();
            mod.should.have.property('initialize');
         })
});

describe('Core', () => {
         it('It should accept a property addedModules', () => {
            var mod = new Module();
            var core = new Core(new Array(mod));
            core.should.have.property('addedModules');
         })
});

describe('Kronicle', () => {
         it('It should have a method initialize', () =>{
            var mod = new Module();
            var kronicle = new Kronicle({modules: [mod]});
            kronicle.should.have.property('initialize');
         });

         it('It should have a method beforeModulesLoad', () =>{
            var mod = new Module();
            var kronicle = new Kronicle({modules: [mod]});
            kronicle.should.have.property('beforeModulesLoad');
         });

         it('It should have a method moduleLoaded', () =>{
            var mod = new Module();
            var kronicle = new Kronicle({modules: [mod]});
            kronicle.should.have.property('moduleLoaded');
         });

         it('It should have a method afterModulesLoad', () =>{
            var mod = new Module();
            var kronicle = new Kronicle({modules: [mod]});
            kronicle.should.have.property('afterModulesLoad');
         });

         it('It should have a method ready', () =>{
            var mod = new Module();
            var kronicle = new Kronicle({modules: [mod]});
            kronicle.should.have.property('ready');
         });

        it('It should have a property core', () =>{
            var mod = new Module();
            var kronicle = new Kronicle({modules: [mod]});
            kronicle.should.have.property('ready');
         });

});