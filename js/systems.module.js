/**
 * Systems Module
 */

app.module('Systems', function( module, app ) {

    module.addInitializer( function() {
	console.log("INIT: Systems module");
	_sortSystems();
	systemListView = new Views.SystemButtonList({
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
    
    Views.SystemButtonRow = Marionette.ItemView.extend({
        template: window.TPL['system-button-view'],
        tagName: 'div',
        className: 'button-system-view'
    });
    
    Views.SystemButtonList = Marionette.CollectionView.extend({
        tagName: 'div',
        className: 'button-system-view-container',
        itemView: Views.SystemButtonRow,
        events: {
            'click button': 'buttonClick'
        },
        buttonClick: function(e) {
            e.preventDefault();
            var sysid = $(e.target).attr("data-sysid");
            app.vent.trigger("select:system", sysid);
        }
    });

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

