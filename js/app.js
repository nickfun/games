/**
 * Nick's Game App
 */

var app = new Marionette.Application();

app.addInitializer( function() {
    console.log("APP has started");
    $('h1').text('Hello world!');
    
    $('div').one('click', function() {
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

}
 