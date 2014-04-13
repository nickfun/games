/**
 * Creation Module
 */

app.module('Create', function( module, app ) {
    
    module.addInitializer( function() {
	console.log("INIT: Create module");
	_drawForms();
    });
    
    module.addInitializer( function() {
        /**
         * Caution! This is a hack, think of a better way to do this :)
         */
        $('.btn-toggle-creation-view').click(function() {
            $('.creation-container').toggleClass('hidden');
        });
    })

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
	    'submit form': 'formSubmit',
            'click .btn-reset': 'resetForm'
	},
        resetForm: function(e) {
            f = this.$el.find('form')[0];
            f.reset();
        },
	formSubmit: function(e) {
	    e.preventDefault();
	    console.log("Create a new game!!!!!!");
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
	    // set model with data from the form
	    var model = new app.Models.Game();
	    var $form = this.$el.find('.form-create-game');
	    _.each(checkboxes, function(cboxName) {
		var elname = '[name=' + cboxName + ']';
		var value;
		if( $form.find(elname).prop('checked') ) {
		    value = "1";
		} else {
		    value = "0";
		}
		model.set(cboxName, value);
	    }, this);
	    _.each(inputs, function(inputName) {
		var elname = '[name=' + inputName + ']';
		var value = $form.find(elname).val();
		model.set(inputName, value);
	    }, this);
	    //console.log("Save this:", model.attributes);
	    var thisview = this;
	    model.save({}, {
		success: function(model, response, options) {
		    app.data.games.add( model );
		    thisview.render(); // or clear?
		    console.log("Game was saved to the server", model.get('name'));
		}
	    });
	}
    });

    // Create a System
    oViews.CreateSystem = Marionette.ItemView.extend({
	tagName: 'div',
	className: 'col-sm-6 col-xs-12',
	template: window.TPL['system-create'],
        events: {
            'submit form': 'submitForm',
            'click .btn-reset': 'resetForm'
        },
        submitForm: function(e) {
            e.preventDefault();
            var data = Backbone.Syphon.serialize(this);
            console.log('data is', data);
        },
        resetForm: function(e) {
            var form = this.$el.find('form')[0];
            form.reset();
        }
    });

});
