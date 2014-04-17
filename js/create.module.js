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
	    
	    // set model with data from the form
	    var model = new app.Models.Game();
            var data = Backbone.Syphon.serialize(this);
            var releaseDate = new moment(data.release);
            data.release = releaseDate.format( app.config.dateFormatSave );
            model.set(data);
	    console.log("Save this:", model.attributes);
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
            if( data.new_company.length > 1 ) {
                data.company = data.new_company;
                data.new_company = undefined;
            }
            var model = new app.Models.System(data);
            console.log('System to be saved is', data);
            var thisView = this;
            model.save({
                success: function(model, response, options) {
                    model.set(id, response.data.id);
                    app.data.systems.add(model);
                    thisView.render();
                    console.log("The system was saved to the server");
                },
                error: function() {
                    console.error("The system could not be saved!");
                }
            });
        },
        resetForm: function(e) {
            var form = this.$el.find('form')[0];
            form.reset();
        }
    });

});
