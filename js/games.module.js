/**
 * Games Module
 */

app.module('Games', function(module, app) {

    module.addInitializer(function() {
        console.log("INIT: games module");
//	var dreamcastGames = new app.Collections.Systems( app.data.games.where({sysid: "10"}) );
//	gameListView = new Views.GameList({
//	    collection: app.data.games
//	});
//	gameListView.render();
//	$('#game-list').empty().append(gameListView.el);
    });

    app.vent.on('select:system', function(sysid) {
        if (sysid == currentSystemShown) {
            // hide the view
            gameListView.close();
            $('#game-list').empty();
            // forget we showed this system
            currentSystemShown = -1;
        } else {
            var systemGames = new app.Collections.Systems(app.data.games.where({sysid: sysid}));
            gameListView = new Views.GameList({
                collection: systemGames
            });
            gameListView.render();
            $('#game-list').empty().append(gameListView.el);
            gameListView.el.scrollIntoView();
            currentSystemShown = sysid;
        }
    })

    // Private vars

    var gameListView;
    var currentSystemShown = -1;

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
        modelEvents: {
            redraw: 'redrawRequest'
        },
        redrawRequest: function() {
            console.log("-- the model wants to be re-drawn. I will re-render");
            this.render();
        },
        clickEditButton: function(e) {
            e.preventDefault();
            if (this._editView) {
                // the view is open. Close it
                this._editView.close();
                this._editView = null;
                console.log("Close game edit view");
                this.el.scrollIntoView();
            } else {
                // Open the Edit View
                this._editView = new Views.GameEdit({
                    model: this.model
                });
                this._editView.render();
                this.$el.after(this._editView.$el);
                this._editView.el.scrollIntoView();
                var that = this;
                this.listenToOnce(this._editView, 'done', function() {
                    that._editView.close();
                    that._editView = null;
                    that.render();
                    console.log("game edit view closed, it is done");
                    this.el.scrollIntoView();
                });
            }
        }
    });

    // Edit one game
    // -------------
    Views.GameEdit = Marionette.ItemView.extend({
        template: window.TPL['game-edit'],
        tagName: 'div',
        className: 'container-fluid system-edit-container',
        events: {
            'submit .form-edit-game': 'formSave',
            'click .btn-cancel': 'btnCancel'
        },
        formSave: function(e) {
            var originalData = _.clone(this.model.attributes);
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
            var $form = this.$el.find('.form-edit-game');
            _.each(checkboxes, function(cboxName) {
                var elname = '[name=' + cboxName + ']';
                var value;
                if ($form.find(elname).prop('checked')) {
                    value = "1";
                } else {
                    value = "0";
                }
                this.model.set(cboxName, value);
            }, this);
            _.each(inputs, function(inputName) {
                var elname = '[name=' + inputName + ']';
                var value = $form.find(elname).val();
                this.model.set(inputName, value);
            }, this);
            console.log('Save button was clicked for a Game!');
            var that = this;

            this.model.save({}, {
                success: function() {
                    console.log("Game was saved!");
                },
                error: function() {
                    console.warn("Game was not saved!!!!!");
                    console.warn("Resetting data!!!!");
                    that.model.set(originalData);
                    that.model.trigger('redraw');
                }
            });
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
