/**
 * Systems Module
 */

app.module('Systems', function( module, app ) {

	module.addInitializer( function() {

		systemListView = new app.Views.SystemList({
			collection: app.data.systems
		});
		systemListView.render();

		$('#system-list').empty().append(systemListView.el);
	});
	
	var systemListView;
	console.log("HELLO");
		
});

