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
	clickEditButton: function(e) {
	    console.log("Hello from", this.model.get('id'), "in SYSTEM");
	    console.log("el is ", this.$el);
	    window.el=this.$el;
	    var edit = new Views.SystemEdit({
		model: this.model
	    });
	    edit.render();
	    this.$el.append( edit.$el );
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

