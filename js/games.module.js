/**
 * Games Module
 */

app.module('Games', function( module, app ) {

	module.addInitializer( function() {
		debugger;
		// get list of games for ONE system
		var temp = app.data.games.where({sysid: app.data.systems.last().get('id')});
		gameListView = new Backbone.Collection( temp );

		gameListView = new app.Views.GameList({
			collection: myGameList
		});
		gameListView.render();
		$('#game-list').empty().append(systemListView.el);
	});
	
	var gameListView;
	var myGameList;
});

