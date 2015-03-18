// # MVC Example
// This is a very simple example of an MVC web app built with Kronicle6 for use in node.js

import {Kronicle} from '../build/Kronicle.js';
import {DataSource} from '../build/lib/DataSource.js';
import {DataSources} from '../build/lib/DataSources.js';
import {ArrayDataSource} from '../build/lib/ArrayDataSource.js';
import {View} from '../build/lib/View.js';
import {Controller} from '../build/lib/Controller.js';
import {Component} from '../build/lib/Component.js';


// Create a DataSources object that contains an ArrayDataSource and push a test item on to it.
var dataSources = new DataSources([new DataSource({source: new ArrayDataSource(), name: 'ArrayDataSource'})]);
dataSources.sources.ArrayDataSource.create('test', () => {
    console.log('test created');
});

// Create a simple list Controller with the name ListItems.
var listController = new Controller({
    name: 'ListItems',
    // View for Controller is also called ListItems, will be ListItemsView internally.
    // Will render a ul containing ListItem components.
    // Add a new Component called ListItem with a simple template to render the item as an li.
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
    // Connect the ArrayDataSource as model
    model: dataSources.sources.ArrayDataSource,
    //Initialize and set to re-render each time the onCreate, onUpdate, onRemove, onGet events are triggered
    initialize: function () {
        this.model.onCreate(this.view.render);
        this.model.onUpdate(this.view.render);
        this.model.onRemove(this.view.render);
        this.model.onGet(this.view.render);
    }
});

// Create a new Kronicle app called kronApp that has the dataSources and listController accessible internally
var kronApp = new Kronicle().build({modules:[dataSources, listController]});

//Export for use
export { kronApp };