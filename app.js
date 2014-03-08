this["TPL"] = this["TPL"] || {};

this["TPL"]["game-row"] = function(obj) {
obj || (obj = {});
var __t, __p = '', __e = _.escape, __j = Array.prototype.join;
function print() { __p += __j.call(arguments, '') }
with (obj) {


function extras( options ) {
	var statusmap = {
		'has_case': '<span title="Has Case" class="glyphicon glyphicon-ok"></span>',
		'has_docs': '<span title="Has Docs" class="glyphicon glyphicon-book"></span>',
		'is_ghit': '<span title="Greatest hits edition" class="glyphicon glyphicon-star-empty"></span>',
		'is_limited': '<span title="Limited Edition!" class="glyphicon glyphicon-fire"></span>',
		'is_complete': '<span title="Is Compelte" class="glyphicon glyphicon-heart"></span>',
		'is_broken': '<span title="Is Broken" class="glyphicon glyphicon-remove"></span>'
	};
	var output = "";
	_.each( statusmap, function(value,key) {
		if( options[key] == 1 ) {
			output += statusmap[key];
		}
	});
	return output;
}
;
__p += '\n<div class="col-xs-12">' +
((__t = ( extras(this) )) == null ? '' : __t) +
'</div>\n\n';

}
return __p
};

this["TPL"]["system-row"] = function(obj) {
obj || (obj = {});
var __t, __p = '', __e = _.escape, __j = Array.prototype.join;
function print() { __p += __j.call(arguments, '') }
with (obj) {

 // name company release comments ;
__p += '\n\n<div class="col-sm-3">' +
__e( company ) +
' ' +
__e( name ) +
'</div>\n<div class="col-sm-9">' +
__e( release ) +
'</div>\n<div clsss="col-sm-12">' +
__e( comments ) +
'</div>\n\n\n';

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

app.data.systems.fetch();
app.data.games.fetch();

/**
 * Views for the application
 */

app.Views = {};

// Systems
// -------

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

// Games
// -----

app.Views.GameRow = Marionette.ItemView.extend({
	template: window.TPL['game-row'],
	tagName: 'div',
	className: 'row'
});

app.Views.GameList = Marionette.CollectionView.extend({
	tagName: 'div',
	className: 'container-flud',
	itemView: app.Views.GameRow
});



/**
 * Systems Module
 */

app.module('Systems', function( module, app ) {

	module.addInitializer( function() {
		app.data.systems.sort();
		systemListView = new app.Views.SystemList({
			collection: app.data.systems
		});
		systemListView.render();
		$('#system-list').empty().append(systemListView.el);
	});
	
	var systemListView;
		
});

