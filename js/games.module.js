/**
 * Games Module
 */

app.module('Games', function( module, app ) {

    module.addInitializer( function() {
	gameListView = new Views.GameList({
	    collection: app.data.games
	});
	gameListView.render();
	$('#game-list').empty().append(gameListView.el);
    });
    
    var gameListView;
    
    var Views = {};
    
    Views.GameRow = Marionette.ItemView.extend({
	template: window.TPL['game-row'],
	tagName: 'div',
	className: 'row'
    });
    
    Views.GameList = Marionette.CollectionView.extend({
	tagName: 'div',
	className: 'container-flud',
	itemView: Views.GameRow
    });

});
