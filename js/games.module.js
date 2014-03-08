/**
 * Games Module
 */

app.module('Games', function( module, app ) {

	module.addInitializer( function() {
//		debugger;
		// get list of games for ONE system
		var temp = app.data.games.where({sysid: app.data.systems.last().get('id')});
		myGameList = new Backbone.Collection( temp );

		gameListView = new app.Views.GameList({
			collection: app.data.games
		});
		gameListView.render();
		$('#game-list').empty().append(gameListView.el);
	});
	
	var gameListView;
	var myGameList;
});

