/**
 * Views for the application
 */

app.Views = {};

app.Views.SystemRow = Marionette.ItemView.extend({
	template: window.TPL['system-row'],
	tagName: 'div',
	className: 'row'
});

app.Views.SystemList = Marionette.CollectionView.extend({
	tagName: 'div',
	className: 'container-fluid',
	itemView: app.Views.SystemRow
});
