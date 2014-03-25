/**
 * Games Module
 */

app.module('Games', function( module, app ) {

    module.addInitializer( function() {
	console.log("INIT: games module");
	gameListView = new Views.GameList({
	    collection: new app.Collections.Systems( app.data.games.where({sysid: "10"}) )
	});
	gameListView.render();
	$('#game-list').empty().append(gameListView.el);
    });
    
    var gameListView;
    
    // Views
    // =====
    
    var Views = {};
    
    // A single game row
    // -----------------
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

    // Edit one game
    // -------------
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
	    var checkboxes = [
		'is_complete',
		'has_case',
		'has_docs',
		'is_ghit',
		'is_limited',
		'is_broken'
	    ];
	    var inputs = [
		'name',
		'sysid',
		'release',
		'comment'
	    ];
	    // update our model with data from the form
	    console.log("Current Value", this.model.attributes);
	    var $form = this.$el.find('.form-edit-game');
	    _.each(checkboxes, function(cboxName) {
		var elname = '[name=' + cboxName + ']';
		var value;
		if( $form.find(elname).prop('checked') ) {
		    value = "1";
		} else {
		    value = "0";
		}
		this.model.set(cboxName, value);
		console.log(cboxName,value);
	    }, this);
	    _.each(inputs, function(inputName) {
		var elname = '[name=' + inputName + ']';
		var value = $form.find(elname).val();
		this.model.set(inputName, value);
		console.log(inputName,value);
	    }, this);
	    console.log("new values", this.model.attributes);
	    console.log('Save button was clicked for a Game!');
	    this.trigger('done');
	},
	btnCancel: function(e) {
	    e.preventDefault();
	    console.log("CANCEL edit game");
	    this.trigger('done');
	}
    });

    // List of games
    // -------------
    Views.GameList = Marionette.CollectionView.extend({
	tagName: 'div',
	className: 'container-fluid',
	itemView: Views.GameRow
    });

});
