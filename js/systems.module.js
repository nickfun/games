/**
 * Systems Module
 */

app.module('Systems', function( module, app ) {

    module.addInitializer( function() {
	    
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
	className: 'row',
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
		this.$el.append( this._editView.$el );
		// remember our state
		this._openEdit = false;
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
	className: 'row',
	template: window.TPL['system-edit']
    });
		
});

