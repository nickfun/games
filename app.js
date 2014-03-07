this["TPL"] = this["TPL"] || {};

this["TPL"]["system-row"] = function(obj) {
obj || (obj = {});
var __t, __p = '', __e = _.escape, __j = Array.prototype.join;
function print() { __p += __j.call(arguments, '') }
with (obj) {

 // name company release comments ;
__p += '\n\n<div class="col-sm-4">' +
__e( company ) +
' ' +
__e( name ) +
'</div>\n<div class="col-sm-8">' +
__e( release ) +
'</div>\n<div clsss="col-xs-12">' +
__e( comments ) +
'</div>\n';

}
return __p
};
/**
 * Nick's Game App
 */

var app = new Marionette.Application();

app.addInitializer( function() {
    console.log("APP has started");
    $('h1').text('Hello world!');

    $('div').click(function() {
	var w = document.body.clientWidth;
	$('#info').text( w );
	console.log('width is', w);
    });
});

app.Collections = {
	Systems: Backbone.Collection.extend({
		url: '/systems',
		comparator: 'release'
	}),
	Games: Backbone.Collection.extend({
		url: '/games'
	})
};

app.data = {
	systems: new app.Collections.Systems(),
	games: new app.Collections.Games()
};
app.data.systems.comparator = 'company';
app.data.systems.fetch();
app.data.games.fetch();

/**
 * Views for the application
 */

app.Views = {};

app.Views.SystemRow = Marionette.ItemView.extend({
	template: window.TPL['system-row'],
	tagName: 'div',
	className: 'row'
});

app.Views.SystemList = Marionette.CollectionView.extend({
	tagName: 'div',
	className: 'container-fluid',
	itemView: app.Views.SystemRow
});

/**
 * Systems Module
 */

app.module('Systems', function( module, app ) {

	module.addInitializer( function() {
		systemListView = new app.Views.SystemList({
			collection: app.data.systems
		});
		systemListView.render();
		$('#main').empty().append(systemListView.el);
	});
	
	var systemListView;
		
});

