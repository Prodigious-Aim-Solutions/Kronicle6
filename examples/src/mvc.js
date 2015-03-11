import {Kronicle} from '../build/Kronicle.js';
import {DataSource} from '../build/lib/DataSource.js';
import {DataSources} from '../build/lib/DataSources.js';
import {ArrayDataSource} from '../build/lib/ArrayDataSource.js';
import {View} from '../build/lib/View.js';
import {Controller} from '../build/lib/Controller.js';
import {Component} from '../build/lib/Component.js';

var dataSources = new DataSources([new DataSource({source: new ArrayDataSource(), name: 'ArrayDataSource'})]);
dataSources.sources.ArrayDataSource.create('test', () =>{
    console.log('test created')
});
var listController = new Controller({
    name: 'ListItems',
    view: new View({
        name: 'ListItems',
        template: (data) => { return "<ul>{list}</ul>".replace('{list}', data); },
        components: [
            new Component({
                name: 'ListItem',
                template: (data) => { return "<li>{data}</li>".replace('{data}', data); },
                components: []
            })
        ],
        render: (err, data) => {
            var output ="";
            if(data) {
                for(var i in data){
                    output += this.components.modules.ListItemComp.render(data[i]);
                }
                return output;
            }
        }
    }),
    model: dataSources.sources.ArrayDataSource,
    initialize: function () {
        console.log('Initialize Controller');
        this.model.onCreate(this.view.render);
        this.model.onUpdate(this.view.render);
        this.model.onRemove(this.view.render);
        this.model.onGet(this.view.render);
        dataSources.sources.ArrayDataSource.create('test');
    }
});
var controllers = [listController]; //need controller collection wrapper, maybe router?
var kronApp = new Kronicle().build({modules:[dataSources, listController]});

export { kronApp };