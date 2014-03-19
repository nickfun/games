this["TPL"] = this["TPL"] || {};

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

;
__p += '\n<div class="col-sm-3">' +
((__t = ( name )) == null ? '' : __t) +
'</div>\n<div class="col-sm-2">' +
((__t = ( release )) == null ? '' : __t) +
' ' +
((__t = ( extras(obj) )) == null ? '' : __t) +
' </div>\n<div class="col-sm-7">\n\t<button type="button" class="btn btn-default btn-sm">\n\t\t<span class="glyphicon glyphicon-star"></span> Edit\n\t</button>\n\t' +
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


function companyDropdown() {
    var companyList = app.data.systems.pluck('company');
    companyList = _.unique(companyList);
    companyList = _.sortBy(companyList);
    var options = _.reduce(companyList, function(memo, company) {
	memo += "<option>" + company + "</option>";
	return memo;
    }, "");
    return "<select name='company'>" + options + "</select>";
}

;
__p += '\n<form method="post" action="/system" class="edit-system">\n<div class="row">\n  <div class="col-xs-12 col-sm-3">Name: </div>\n  <div class="col-xs-12 col-sm-3"><input type="text" name="name" value="' +
__e( name ) +
'"> </div>\n  <div class="col-xs-12 col-sm-3">Company: </div>\n  <div class="col-xs-12 col-sm-3">' +
((__t = ( companyDropdown() )) == null ? '' : __t) +
' or new: <input type="text" name="new_company"> </div>\n</div>\n<div class="row">\n  <div class="col-xs-12 col-sm-3">Release: </div>\n  <div class="col-xs-12 col-sm-3"><input type="text" name="release" value="' +
__e( release ) +
'"> </div>\n  <div class="col-xs-12 col-sm-3">Comments: </div>\n  <div class="col-xs-12 col-sm-3"><input type="text" name="comments" value="' +
__e( comments ) +
'"> </div>\n</div>\n<div class="row">\n    <div class="col-xs-12 col-sm-3">Submit</div>\n    <div class="col-xs-12 col-sm-3">\n    <button type="button" class="btn btn-default btn-sm btn-save">\n    <span class="glyphicon glyphicon-floppy-saved"></span> Save\n    </button></div>\n</div>\n</form>\n';

}
return __p
};

this["TPL"]["system-row"] = function(obj) {
obj || (obj = {});
var __t, __p = '', __e = _.escape, __j = Array.prototype.join;
function print() { __p += __j.call(arguments, '') }
with (obj) {

 // name company release comments ;
__p += '\n\n<div class="col-sm-3">\n\t<button type="button" class="btn btn-default btn-sm edit">\n\t\t<span class="glyphicon glyphicon-star"></span> Edit\n\t</button>\n\t<strong>' +
__e( company ) +
' ' +
__e( name ) +
'</strong>\n</div>\n<div class="col-sm-9">' +
__e( release ) +
'</div>\n<div clsss="col-sm-12">' +
__e( comments ) +
'</div>\n\n\n';

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
	className: 'row game-row'
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
    console.log("HELLO");

    // Views
    // -------

    var Views = {};

    Views.SystemRow = Marionette.ItemView.extend({
	template: window.TPL['system-row'],
	tagName: 'div',
	className: 'row system-row',
	events: {
	    'click button.edit': 'clickEditButton'
	},
	_openEdit: false,
	_editView: false,
	clickEditButton: function(e) {
	    if( this._editView ) {
		// the edit view is already open. lets close it
		this._editView.close();
		this._editView = null;
		// remember state
		this._openEdit = true;
	    } else {
		// create & open the edit view
		this._editView = new Views.SystemEdit({
		    model: this.model
		});
		this._editView.render();
		this.$el.after( this._editView.$el );
		// remember our state
		this._openEdit = false;
		var that=this;
		this._editView.on('done', function() {
		    that._editView.close();
		    that._openEdit = false;
		    that.model.fetch({
			success: function(model, response, options) {
			    that.render();
			}
		    });
		});
	    }
	    // TODO some kind of system to dispose of the view when done  
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
	    'click .btn-save': 'clickSave'
	},
	clickSave: function(e) {
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

