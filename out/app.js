this["TPL"] = this["TPL"] || {};

this["TPL"]["game-create"] = function(obj) {
obj || (obj = {});
var __t, __p = '', __e = _.escape, __j = Array.prototype.join;
function print() { __p += __j.call(arguments, '') }
with (obj) {


function systemDropdown() {
var out = "<select name='sysid' class='form-control'>";
    app.data.systems.sort();
    app.data.systems.each(function(system) {
    var name = system.get('company') + ' ' + system.get('name');
    out += "<option value='" + system.get('id') + "'>" + name + "</option>";
    });
    out += "</select>";
return out;
}

;
__p += '\n<h3>New Game</h3>\n<form method="post" action="/games" class="form-create-game">\n    <div class="form-group">\n        <label>Name <input type="text" name="name" class="form-control"></label>\n    </div>\n    <div class="form-group">\n        <label>System ' +
((__t = ( systemDropdown() )) == null ? '' : __t) +
'</label>\n    </div>\n    <div class="form-group">\n        <label for="comments-game-create">Comments</label>\n        <textarea name="comment" class="form-control" id="comments-game-create"></textarea>\n    </div>\n    <div class="form-group">\n        <label>\n            Release Date\n            <input type="text" name="release" class="form-control">\n        </label>\n    </div>\n    <div class="form-group"><label> <input type="checkbox" name="is_complete"> Is Complete</label></div>\n    <div class="form-group"><label> <input type="checkbox" name="has_case"> Has Case  </label></div>\n    <div class="form-group"><label> <input type="checkbox" name="has_docs"> Has Documents/Manual</label></div>\n    <div class="form-group"><label> <input type="checkbox" name="is_ghit"> Is Greatest Hits</label></div>\n    <div class="form-group"><label> <input type="checkbox" name="is_limited"> Is Limited Edition  </label></div>\n    <div class="form-group"><label> <input type="checkbox" name="is_broken"> Is Broken  </label></div>\n    <div class="form-group">\n        <button type="submit" class="btn-default btn">\n            <i class="glyphicon glyphicon-floppy-disk"></i>\n            Save Changes\n        </button>\n        <button type="button" class="btn-reset btn-default btn">\n            <i class="glyphicon glyphicon-remove"></i>\n            Cancel\n        </button>\n    </div>\n</form>\n';

}
return __p
};

this["TPL"]["game-edit"] = function(obj) {
obj || (obj = {});
var __t, __p = '', __e = _.escape, __j = Array.prototype.join;
function print() { __p += __j.call(arguments, '') }
with (obj) {


    function systemDropdown(sysid) {
	var out = "<select name='sysid' class='form-control'>";
	app.data.systems.each(function(system) {
	    var selected = "";
	    if( system.id == sysid ) {
		selected = " selected='selected'";
	    }
	    var name = system.get('company') + ' ' + system.get('name');
	    out += "<option value='" + system.get('id') + "' " + selected + ">" + name + "</option>";
	});
	out += "</select>";
	return out;
    }

   function checked(x) {
     if( x==1 ) { return " checked='checked'"; }
     return "";
   }
;
__p += '\n<div class="row">\n  <div class="col-sm-4 col-xs-12 well">\n    <form method="post" action="/games/' +
__e( id ) +
'" method="PUT" class="form-edit-game">\n      <div class="form-group">\n\t<label>Name <input type="text" name="name" class="form-control" value="' +
__e( name ) +
'"></label>\n      </div>\n      <div class="form-group">\n        <label>System ' +
((__t = ( systemDropdown(sysid) )) == null ? '' : __t) +
'</label>\n      </div>\n      <div class="form-group">\n\t<label for="comments-game-' +
__e( id ) +
'">Comments</label>\n\t<textarea name="comment" class="form-control" id="comments-game-' +
__e( id ) +
'">' +
__e( comment ) +
'</textarea>\n      </div>\n      <div class="form-group">\n\t<label>\n\t  Release Date\n\t  <input type="text" value="' +
__e( release ) +
'" name="release" class="form-control">\n\t</label>\n      </div>\n      <div class="form-group"><label> <input type="checkbox" name="is_complete" ' +
((__t = ( checked(is_complete) )) == null ? '' : __t) +
'> Is Complete  </label></div>\n      <div class="form-group"><label> <input type="checkbox" name="has_case" ' +
((__t = ( checked(has_case) )) == null ? '' : __t) +
'> Has Case  </label></div>\n      <div class="form-group"><label> <input type="checkbox" name="has_docs" ' +
((__t = ( checked(has_docs) )) == null ? '' : __t) +
'> Has Documents/Manual  </label></div>\n      <div class="form-group"><label> <input type="checkbox" name="is_ghit" ' +
((__t = ( checked(is_ghit) )) == null ? '' : __t) +
'> Is Greatest Hits  </label></div>\n      <div class="form-group"><label> <input type="checkbox" name="is_limited" ' +
((__t = ( checked(is_limited) )) == null ? '' : __t) +
'> Is Limited Edtion  </label></div>\n      <div class="form-group"><label> <input type="checkbox" name="is_broken" ' +
((__t = ( checked(is_broken) )) == null ? '' : __t) +
'> Is Broken  </label></div>\n      <div class="form-group">\n\t<button type="submit" class="btn-default btn">\n\t  <i class="glyphicon glyphicon-floppy-disk"></i>\n\t  Save Changes\n\t</button>\n\t<button type="button" class="btn-cancel btn-default btn">\n\t  <i class="glyphicon glyphicon-remove"></i>\n\t  Cancel\n\t</button>\n      </div>\n    </form>\n  </div>\n</div>\n';

}
return __p
};

this["TPL"]["game-row"] = function(obj) {
obj || (obj = {});
var __t, __p = '', __e = _.escape, __j = Array.prototype.join;
function print() { __p += __j.call(arguments, '') }
with (obj) {


function extras( options ) {
	var statusmap = {
		'has_case': '<span title="Has Case" class="glyphicon glyphicon-ok"></span>',
		'has_docs': '<span title="Has Docs" class="glyphicon glyphicon-book"></span>',
		'is_ghit': '<span title="Greatest hits edition" class="glyphicon glyphicon-star-empty"></span>',
		'is_limited': '<span title="Limited Edition!" class="glyphicon glyphicon-fire"></span>',
		'is_complete': '<span title="Is Compelte" class="glyphicon glyphicon-heart"></span>',
		'is_broken': '<span title="Is Broken" class="glyphicon glyphicon-remove"></span>'
	};
	var output = "";
	_.each( statusmap, function(value,key) {
		if( options[key] == 1 ) {
			output += statusmap[key];
		}
	});
	return output;
}

function showDate( release ) {
    if( release === "0000-00-00" ) {
	return "<i>No release date</i>";
    }
    return moment(release).format( app.config.dateFormat );
}

;
__p += '\n<div class="col-sm-3 game-name">' +
((__t = ( name )) == null ? '' : __t) +
'</div>\n<div class="col-sm-2"> ' +
((__t = ( showDate(release) )) == null ? '' : __t) +
' <br>' +
((__t = ( extras(obj) )) == null ? '' : __t) +
' </div>\n<div class="col-sm-7">\n\t<button type="button" class="btn btn-default btn-sm btn-edit-game">\n\t\t<span class="glyphicon glyphicon-star"></span> Edit\n\t</button>\n\t' +
((__t = ( comment )) == null ? '' : __t) +
'\n</div>\n\n';

}
return __p
};

this["TPL"]["system-create"] = function(obj) {
obj || (obj = {});
var __t, __p = '', __e = _.escape, __j = Array.prototype.join;
function print() { __p += __j.call(arguments, '') }
with (obj) {


function companyDropdown() {
var companies = _.unique(app.data.systems.pluck('company')).sort();
var out ="<select name='company' class='form-control'>";
    _.each(companies, function(company) {
    out += "<option value='" + company + "'>" + company + "</option>";
    });
    out += '</select>';
return out;
}
;
__p += '\n<h3>New System</h3>\n\n<form method="post" action="/system" class="form-create-system" role="form">\n    <div class="form-group">\n        <label>Company\n            ' +
((__t = ( companyDropdown() )) == null ? '' : __t) +
'\n        </label>\n        <br>\n        <label>Or, new company:\n            <input type="text" name="new_company" class="form-control">\n        </label>\n    </div>\n    <div class="form-group">\n        <label>System Name\n            <input type="text" name="name" class="form-control">\n        </label>\n    </div>\n    <div class="form-group">\n        <label>Release\n            <input type="text" name="release" class="form-control">\n        </label>\n    </div>\n    <div class="form-group">\n        <label for="comments">Comments</label>\n        <textarea name="comments" class="form-control"></textarea>\n    </div>\n    <div class="form-group">\n        <button type="submit" class="btn-default btn">\n            <i class="glyphicon glyphicon-floppy-disk"></i>\n            Save Changes\n        </button>\n        <button type="button" class="btn-reset btn-default btn">\n            <i class="glyphicon glyphicon-remove"></i>\n            Cancel\n        </button>\n    </div>\n</form>';

}
return __p
};

this["TPL"]["system-edit"] = function(obj) {
obj || (obj = {});
var __t, __p = '', __e = _.escape, __j = Array.prototype.join;
function print() { __p += __j.call(arguments, '') }
with (obj) {


function companyDropdown(selectedCompany) {
    var companyList = app.data.systems.pluck('company');
    companyList = _.unique(companyList);
    companyList = _.sortBy(companyList);
    var options = _.reduce(companyList, function(memo, company) {
	var extra = "";
	if( company == selectedCompany ) {
	    extra = " selected='selected'";
	}
	memo += "<option" + extra + ">" + company + "</option>";
	return memo;
    }, "");
    return "<select name='company' class='form-control'>" + options + "</select>";
}

;
__p += '\n<div class="row">\n  <div class="col-sm-6 col-xs-12">\n    <form method="post" action="/system" class="form-edit-system" role="form">\n      <div class="form-group">\n\t<label>Company\n\t  ' +
((__t = ( companyDropdown(company) )) == null ? '' : __t) +
'\n\t</label>\n\t<br>\n\t<label>Or, new company:\n\t  <input type="text" name="new_company" class="form-control">\n\t</label>\n      </div>\n      <div class="form-group">\n\t<label>System Name\n\t  <input type="text" name="name" class="form-control" value="' +
__e( name ) +
'">\n\t</label>\n      </div>\n      <div class="form-group">\n\t<label>Release\n\t  <input type="text" name="release" class="form-control" value="' +
__e( release ) +
'">\n\t</label>\n      </div>\n      <div class="form-group">\n\t<label for="comments">Comments</label>\n\t<textarea name="comments" class="form-control">' +
__e( comments ) +
'</textarea>\n      </div>\n      <div class="form-group">\n\t<button type="submit" value="Edit System" class="btn btn-default">\n\t  <i class="glyphicon glyphicon-floppy-disk"></i> Save Changes\n\t</button>\n      </div>\n    </form>\n  </div>\n</div>\n';

}
return __p
};

this["TPL"]["system-row"] = function(obj) {
obj || (obj = {});
var __t, __p = '', __e = _.escape, __j = Array.prototype.join;
function print() { __p += __j.call(arguments, '') }
with (obj) {

 // name company release comments ;
__p += '\n<div class="row">\n  <div class="col-sm-8">\n    <button type="button" class="btn btn-default btn-sm edit">\n      <span class="glyphicon glyphicon-star"></span> Edit\n    </button>\n    <strong>' +
__e( company ) +
' ' +
__e( name ) +
'</strong>\n  </div>\n  <div class="col-sm-4">' +
__e( moment(release).format(app.config.dateFormat) ) +
'</div>\n</div>\n<div class="row">\n  <div class="col-sm-11 col-sm-offset-1">' +
__e( comments ) +
'</div>\n</div>\n\n';

}
return __p
};
/**
 * Nick's Game App
 */

var app = new Marionette.Application();

app.addInitializer( function() {
    console.log("APP has started");
});

app.Models = {
    Game: Backbone.Model.extend({
	defaults: {
	    name: "--",
	    release: "0000-00-00",
	    sysid: -1,
	    comment: "",
	    has_case: 0,
	    has_docs: 0,
	    is_complete: 0,
	    is_ghit: 0,
	    is_broken: 0,
	    is_limited: 0
	},
	urlRoot: '/games'
    }),
    System: Backbone.Model.extend({
	defaults: {
	    name: "--",
	    company: "",
	    comments: "",
	    num: 0,
	    release: "0000-00-00"
	},
	urlRoot: '/systems'
    })
};

app.Collections = {
    Systems: Backbone.Collection.extend({
	url: '/systems',
	comparator: function(s) {
	    return s.get('company') + s.get('name');
	},
	model: app.Models.System
    }),
    Games: Backbone.Collection.extend({
	url: '/games',
	comparator: 'sysid',
	model: app.Models.Game
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
    app.data.systems.sort();
    app.data.games.sort();
}

/*
  Application Config
*/

app.config = {
    dateFormat: 'MMMM Do, YYYY',
    dateFormatSave: 'YYYY-MM-DD'
};

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

/**
 * Games Module
 */

app.module('Games', function( module, app ) {

    module.addInitializer( function() {
	console.log("INIT: games module");
	var dreamcastGames = new app.Collections.Systems( app.data.games.where({sysid: "10"}) );
	gameListView = new Views.GameList({
	    collection: app.data.games
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
	modelEvents: {
		redraw: 'redrawRequest'
	},
	redrawRequest: function() {
		console.log("-- the model wants to be re-drawn. I will re-render");
		this.render();
	},
	clickEditButton: function(e) {
	    e.preventDefault();
	    if( this._editView ) {
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
		this.$el.after( this._editView.$el );
		this._editView.el.scrollIntoView();
		var that=this;
		this.listenToOnce( this._editView, 'done', function() {
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
		if( $form.find(elname).prop('checked') ) {
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

/**
 * Systems Module
 */

app.module('Systems', function( module, app ) {

    module.addInitializer( function() {
	console.log("INIT: Systems module");
	_sortSystems();
	systemListView = new Views.SystemList({
	    collection: app.data.systems
	});
	systemListView.render();
	$('#system-list').empty().append(systemListView.el);
    });

    function _sortSystems() {
	app.data.systems.comparator = _systemCompare;
	app.data.systems.sort();
    }

    function _systemCompare(s) {
	return s.get('company') + ' ' + s.get('name');
    }
    
    var systemListView;

    // Views
    // -------

    var Views = {};

    Views.SystemRow = Marionette.ItemView.extend({
	template: window.TPL['system-row'],
	tagName: 'div',
	className: 'container-fluid system-row',
	events: {
	    'click button.edit': 'clickEditButton'
	},
	_editView: false,
	clickEditButton: function(e) {
	    if( this._editView ) {
		// the edit view is already open. lets close it
		this._editView.close();
		this._editView = null;
		console.log("Close edit form");
	    } else {
		// create & open the edit view
		console.log("Open edit form");
		this._editView = new Views.SystemEdit({
		    model: this.model
		});
		this._editView.render();
		this.$el.after( this._editView.$el );
		// remember our state
		this._openEdit = false;
		var that=this;
		that.listenToOnce(this._editView, 'done', function() {
		    that._editView.close();
		    that._editView = null;
		    that.render();
		    console.log("Close edit form, it is done");
		});
	    }
	}
    });

    Views.SystemList = Marionette.CollectionView.extend({
	tagName: 'div',
	className: 'container-fluid',
	itemView: Views.SystemRow
    });

    Views.SystemEdit = Marionette.ItemView.extend({
	tagName: 'div',
	className: 'container-fluid well system-edit-container',
	template: window.TPL['system-edit'],
	events: {
	    'submit .form-edit-system': 'formSave'
	},
	formSave: function(e) {
	    e.preventDefault();
	    console.log("Save button was clicked!");
	    var data = this.$el.find('form').serializeArray();
	    // convert to simple name => value
	    data = _.reduce(data, function(m,v) { m[v.name] = v.value; return m}, {});
	    this.model.set('name', data.name);
	    this.model.set('release', data.release);
	    this.model.set('comments', data.comments);
	    if( data.new_company ) {
		this.model.set('company', data.new_company);
	    } else {
		this.model.set('company', data.company);
	    }
	    this.model.save();
	    this.trigger('done');
	    this.$el.slideUp(500);
	}
    });

});

