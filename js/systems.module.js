/**
 * Systems Module
 * 
 * System module is responsibile for knowing which system is currently selected
 */

app.module('Systems', function(module, app) {

    module.addInitializer(function() {
        console.log("INIT: Systems module");
        _sortSystems();
        systemListView = new Views.SystemButtonList({
            collection: app.data.systems
        });
        systemListView.render();
        regions = new Marionette.RegionManager();
        regions.addRegions({
            'system-info': '#system-info',
            'system-list': '#system-list'
        });
        regions.get('system-list').show(systemListView);
        //$('#system-list').empty().append(systemListView.el);
    });

    function _sortSystems() {
        app.data.systems.comparator = _systemCompare;
        app.data.systems.sort();
    }

    function _systemCompare(s) {
        return s.get('company') + ' ' + s.get('name');
    }

    var systemListView;
    var regions;
    var selectedSystem = 0;
    
    // Listen for events
    // -----------------
    
    app.vent.on('select:system', function(sysid) {
        var system = app.data.systems.get(sysid);
        var systemView = new Views.SystemRow({
            model: system
        });
        regions.get('system-info').show(systemView);
    });
    
    app.vent.on('unselect:system', function() {
        regions.get('system-info').close();
    });

    // Views
    // -------

    var Views = {};

    Views.SystemButtonRow = Marionette.ItemView.extend({
        template: window.TPL['system-button-view'],
        tagName: 'div',
        className: 'button-system-view',
        hilight: function(toggle) {
            if (toggle) {
                this.$el.addClass("hilight");
            } else {
                this.$el.removeClass("hilight");
            }
            
        }
    });

    Views.SystemButtonList = Marionette.CollectionView.extend({
        tagName: 'div',
        className: 'button-system-view-container',
        itemView: Views.SystemButtonRow,
        selectedView: false,
        events: {
            'click button': 'buttonClick'
        },
        buttonClick: function(e) {
            e.preventDefault();
            // find the system ID
            var sysid = $(e.target).attr("data-sysid");
            // find the model
            var model = app.data.systems.get(sysid);
            // find its view
            var view = this.children.findByModel(model);
            // deal with sending the event & hilight the view
            if (this.selectedView) {
                this.selectedView.hilight(false);
            }
            if (sysid == selectedSystem) {
                // we should unselected
                app.vent.trigger('unselect:system');
                selectedSystem = 0;
                view.hilight(false);
                this.selectedView = false;
            } else {
                // we are selecting a new system
                selectedSystem = sysid;
                app.vent.trigger("select:system", sysid);
                view.hilight(true);
                this.selectedView = view;
            }
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
            if (this._editView) {
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
                this.$el.after(this._editView.$el);
                // remember our state
                this._openEdit = false;
                var that = this;
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
            data = _.reduce(data, function(m, v) {
                m[v.name] = v.value;
                return m;
            }, {});
            this.model.set('name', data.name);
            this.model.set('release', data.release);
            this.model.set('comments', data.comments);
            if (data.new_company) {
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
