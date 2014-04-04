/**
 * Creation Module
 */

app.module('Create', function( module, app ) {
    
    module.addInitializer( function() {
	console.log("INIT: Create module");
	_drawForms();
    });

    // private vars
    // ------------
    var oGameView;
    var oSystemView;

    // private functions
    // -----------------

    function _drawForms() {
	console.log("drawing the create forms!");
	oGameView = new oViews.CreateGame();
	oGameView.render();
	oSystemView = new oViews.CreateSystem();
	oSystemView.render();
	$('#create-forms-container').append(oGameView.el).append(oSystemView.el);
    }

    // Views
    // -----
    var oViews = {};
    
    // Create a Game
    oViews.CreateGame = Marionette.ItemView.extend({
	tagName: 'div',
	className: 'col-sm-6 col-xs-12',
	template: window.TPL['game-create'],
	events: {
	    'submit form': 'formSubmit'
	},
	formSubmit: function(e) {
	    e.preventDefault();
	    console.log("Create a new game!!!!!!");
	}
    });

    // Create a System
    oViews.CreateSystem = Marionette.ItemView.extend({
	tagName: 'div',
	className: 'col-sm-6 col-xs-12',
	template: window.TPL['system-create']
    });

});
