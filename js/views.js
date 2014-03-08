/**
 * Views for the application
 */

app.Views = {};

// Systems
// -------

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

// Games
// -----

app.Views.GameRow = Marionette.ItemView.extend({
	template: window.TPL['game-row'],
	tagName: 'div',
	className: 'row'
});

app.Views.GameList = Marionette.CollectionView.extend({
	tagName: 'div',
	className: 'container-flud',
	itemView: app.Views.GameRow
});

