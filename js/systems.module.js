/**
 * Systems Module
 */

app.module('Systems', function( module, app ) {

	module.addInitializer( function() {
		app.data.systems.sort();
		systemListView = new app.Views.SystemList({
			collection: app.data.systems
		});
		systemListView.render();
		$('#main').empty().append(systemListView.el);
	});
	
	var systemListView;
		
});

