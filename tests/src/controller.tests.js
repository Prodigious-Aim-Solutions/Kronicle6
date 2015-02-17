import {Controller} from '../build/lib/Controller.js';
import {View} from '../build/lib/View.js';
import {DataSource} from '../build/lib/DataSource.js';
import {ArrayDataSource} from '../build/lib/ArrayDataSource.js';
import should from 'should';

describe('Controller', () => {
        var controller = new Controller({
            name: 'Main',
            view: new View('Main'),
            dataSource: new DataSource(new ArrayDataSource(), 'ArrayDataSource')
        });
        it('It should contain a property model', () => {            
            controller.should.have.property('model');
        });
        it('It should contain a property view', () => {            
            controller.should.have.property('view');
        });
});