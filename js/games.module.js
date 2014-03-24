/**
 * Games Module
 */

app.module('Games', function( module, app ) {

    module.addInitializer( function() {
	console.log("INIT: games module");
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
	className: 'row game-row',
	events: {
	    'click .btn-edit-game': 'clickEditButton'
	},
	clickEditButton: function(e) {
	    e.preventDefault();
	    if( this._editView ) {
		// the view is open. Close it
		this._editView.close();
		this._editView = null;
		console.log("Close game edit view");
	    } else {
		// Open the Edit View
		this._editView = new Views.GameEdit({
		    model: this.model
		});
		this._editView.render();
		this.$el.after( this._editView.$el );
		var that=this;
		this.listenToOnce( this._editView, 'done', function() {
		    that._editView.close();
		    that._editView = null;
		    that.render();
		    console.log("game edit view closed, it is done");
		});
	    }
	}
    });

    Views.GameEdit = Marionette.ItemView.extend({
	template: window.TPL['game-edit'],
	tagName: 'div',
	className: 'container-fluid well system-edit-container',
	events: {
	    'submit .form-edit-game': 'formSave',
	    'click .btn-cancel': 'btnCancel'
	},
	formSave: function(e) {
	    e.preventDefault();
	    console.log('Save button was clicked for a Game!');
	    this.trigger('done');
	},
	btnCancel: function(e) {
	    e.preventDefault();
	    console.log("CANCEL edit game");
	    this.trigger('done');
	}
    });

    Views.GameList = Marionette.CollectionView.extend({
	tagName: 'div',
	className: 'container-fluid',
	itemView: Views.GameRow
    });

});
