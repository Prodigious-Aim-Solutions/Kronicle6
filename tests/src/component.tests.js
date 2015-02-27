import {Component} from '../build/lib/Component.js';
import should from 'should';

describe('Component', () => {
        var view = new Component({
            name: 'main', 
            template: () => { return "<div></div>"; }, 
            components: []
        });
        it('It should contain a property name which is a string', () =>{            
            view.should.have.property('name').and.be.type('string');
        });
        it('It should contain a method render which returns a string', () =>{            
            view.should.have.property('render');
            view.render().should.be.type('string');
        });
        it('It should contain a property template', () =>{            
            view.should.have.property('template');
        });
        it('It should contain a property components which is an array', () =>{            
            view.should.have.property('components').and.be.an.Array;
        });
});