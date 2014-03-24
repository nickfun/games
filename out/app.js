this["TPL"] = this["TPL"] || {};

this["TPL"]["game-edit"] = function(obj) {
obj || (obj = {});
var __t, __p = '', __e = _.escape, __j = Array.prototype.join;
function print() { __p += __j.call(arguments, '') }
with (obj) {


    function systemDropdown() {
	var out = "<select name='system' class='form-control'>";
	app.data.systems.each(function(system) {
	    var name = system.get('company') + ' ' + system.get('name');
	    out += "<option value=" + system.get('id') + ">" + name + "</option>";
	});
	out += "</select>";
	return out;
    }
;
__p += '\n<div class="row">\n  <div class="col-sm-6 col-xs-12">\n    <form method="post" action="/games/' +
__e( id ) +
'" method="PUT">\n      <div class="form-group">\n\t<label>Name <input type="text" name="name" class="form-control" value="' +
__e( name ) +
'"></label>\n      </div>\n      <div class="form-group">\n        <label>System ' +
((__t = ( systemDropdown() )) == null ? '' : __t) +
'</label>\n      </div>\n      <div class="form-group">\n\t<label for="comments-game-' +
__e( id ) +
'">Comments</label>\n\t<textarea name="comment" class="form-control" id="comments-game-' +
__e( id ) +
'">' +
__e( comment ) +
'</textarea>\n      </div>\n      <div class="form-group">\n\t<button type="submit" class="btn-default btn">\n\t  <i class="glyphicon glyphicon-floppy-disk"></i>\n\t  Save Changes\n\t</button>\n      </div>\n    </form>\n  </div>\n</div>\n';

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
__p += '\n<div class="col-sm-3">' +
((__t = ( name )) == null ? '' : __t) +
'</div>\n<div class="col-sm-2"> ' +
((__t = ( extras(obj) )) == null ? '' : __t) +
' ' +
((__t = ( showDate(release) )) == null ? '' : __t) +
' </div>\n<div class="col-sm-7">\n\t<button type="button" class="btn btn-default btn-sm btn-edit-game">\n\t\t<span class="glyphicon glyphicon-star"></span> Edit\n\t</button>\n\t' +
((__t = ( comment )) == null ? '' : __t) +
'\n</div>\n\n';

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
'\n\t</label>\n\t<br>\n\t<label>Or, new:\n\t  <input type="text" name="new_company" class="form-control">\n\t</label>\n      </div>\n      <div class="form-group">\n\t<label>System Name\n\t  <input type="text" name="name" class="form-control" value="' +
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

app.Collections = {
	Systems: Backbone.Collection.extend({
		url: '/systems',
		comparator: 'release'
	}),
	Games: Backbone.Collection.extend({
		url: '/games'
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
}

/*
  Application Config
*/

app.config = {
    dateFormat: 'MMMM Do, YYYY'
};

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
	    'submit .form-edit-game': 'formSave'
	},
	formSave: function(e) {
	    e.preventDefault();
	    console.log('Save button was clicked for a Game!');
	    this.trigger('done');
	}
    });

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
	systemListView = new Views.SystemList({
	    collection: app.data.systems
	});
	systemListView.render();
	
	$('#system-list').empty().append(systemListView.el);
    });
    
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

