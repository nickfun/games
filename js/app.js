/**
 * Nick's Game App
 */

var app = new Marionette.Application();

app.addInitializer( function() {
    console.log("APP has started");
});

app.Models = {
    Game: Backbone.Model.extend({
	defaults: {
	    name: "--",
	    release: "0000-00-00",
	    sysid: -1,
	    comment: "",
	    has_case: 0,
	    has_docs: 0,
	    is_complete: 0,
	    is_ghit: 0,
	    is_broken: 0,
	    is_limited: 0
	},
	urlRoot: '/games'
    }),
    System: Backbone.Model.extend({
	defaults: {
	    name: "--",
	    company: "",
	    comments: "",
	    num: 0,
	    release: "0000-00-00"
	},
	urlRoot: '/systems'
    })
};

app.Collections = {
    Systems: Backbone.Collection.extend({
	url: '/systems',
	comparator: 'release',
	model: app.Models.System
    }),
    Games: Backbone.Collection.extend({
	url: '/games',
	comparator: 'sysid',
	model: app.Models.Game
    })
};

app.on('initialize:before', function() {
    console.log("Consuming bootstraped data");
    consumeBootstrap( window.__bootstrap );
});

function consumeBootstrap( boot ) {
    app.data = {
	systems: new app.Collections.Systems(),
	games: new app.Collections.Games()
    };
    app.data.systems.add( boot.systems );
    app.data.games.add( boot.games );
    app.data.systems.sort();
    app.data.games.sort();
}
