import {View} from '../build/lib/View.js';
import {Component} from '../build/lib/Component.js';
import should from 'should';

describe('View', () => {
        var view = new View({
            name: 'main', 
            template: () => { return "<div></div>"}, 
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
        it('It should contain a method addComponents which takes an array of components and registers them to this.components', () =>{            
            view.should.have.property('addComponents');
            view.addComponents([new Component({
                name: 'Test',
                template: (data) => { return "data" },
            })]);
            view.components['Test'].should.exist;
        });
        it('It should contain a method addComponent which takes a component and registers them to this.components', () =>{            
            view.should.have.property('addComponent');
            view.addComponent(new Component({
                name: 'Test',
                template: (data) => { return "data" },
            }));
            view.components['Test'].should.exist;
        });
});