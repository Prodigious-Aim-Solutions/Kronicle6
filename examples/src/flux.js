import {Kronicle} from '../build/Kronicle.js';
import {DataSource} from '../build/lib/DataSource.js';
import {DataSources} from '../build/lib/DataSources.js';
import {ArrayDataSource} from '../build/lib/ArrayDatasource';
import {View} from '../build/lib/View.js'
    
var dataSources = new DataSources([new DataSource(new ArrayDataSource(), 'ArrayDataSource')]);

// TODO: implement FLUX example in Kronicle6
// ex: https://github.com/facebook/flux/blob/master/src/Dispatcher.js
var itemDispatcher = new Dispatcher();

itemDispatcher.register((action) =>{
    switch(action){
        case actions.CREATE:
            dataSources.sources.ArrayDataSource.create('test', (err, item) =>{
                //
            });
            return;
        case actions.UPDATE: return;
        case actions.DELETE: return;
        case actions.GET: return;
        default: return;
    }
});

itemDispatcher.dispatch({
        action: 'CREATE',
        item:item
});

