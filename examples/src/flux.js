import {Kronicle} from '../build/Kronicle.js';
import {DataSource} from '../build/lib/DataSource.js';
import {DataSources} from '../build/lib/DataSources.js';
import {ArrayDataSource} from '../build/lib/ArrayDatasource';
import {View} from '../build/lib/View.js'
    
var dataSources = new DataSources([new DataSource(new ArrayDataSource(), 'ArrayDataSource')]);

// TODO: implement FLUX example in Kronicle6