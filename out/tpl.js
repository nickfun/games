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

   function checked(x) {
     if( x==1 ) { return " checked='checked'"; }
     return "";
   }
;
__p += '\n<div class="row">\n  <div class="col-sm-6 col-xs-12">\n    <form method="post" action="/games/' +
__e( id ) +
'" method="PUT" class="form-edit-game">\n      <div class="form-group">\n\t<label>Name <input type="text" name="name" class="form-control" value="' +
__e( name ) +
'"></label>\n      </div>\n      <div class="form-group">\n        <label>System ' +
((__t = ( systemDropdown() )) == null ? '' : __t) +
'</label>\n      </div>\n      <div class="form-group">\n\t<label for="comments-game-' +
__e( id ) +
'">Comments</label>\n\t<textarea name="comment" class="form-control" id="comments-game-' +
__e( id ) +
'">' +
__e( comment ) +
'</textarea>\n      </div>\n      <div class="form-group"><label> <input type="checkbox" name="is_complete" ' +
((__t = ( checked(has_case) )) == null ? '' : __t) +
'> Is Complete  </label></div>\n      <div class="form-group"><label> <input type="checkbox" name="has_case" ' +
((__t = ( checked(has_case) )) == null ? '' : __t) +
'> Has Case  </label></div>\n      <div class="form-group"><label> <input type="checkbox" name="has_docs" ' +
((__t = ( checked(has_case) )) == null ? '' : __t) +
'> Has Documents/Manual  </label></div>\n      <div class="form-group"><label> <input type="checkbox" name="is_ghit" ' +
((__t = ( checked(has_case) )) == null ? '' : __t) +
'> Is Greatest Hits  </label></div>\n      <div class="form-group"><label> <input type="checkbox" name="is_limited" ' +
((__t = ( checked(has_case) )) == null ? '' : __t) +
'> Is Limited Edtion  </label></div>\n      <div class="form-group"><label> <input type="checkbox" name="is_broken" ' +
((__t = ( checked(has_case) )) == null ? '' : __t) +
'> Is Broken  </label></div>\n      <div class="form-group">\n\t<button type="submit" class="btn-default btn">\n\t  <i class="glyphicon glyphicon-floppy-disk"></i>\n\t  Save Changes\n\t</button>\n      </div>\n    </form>\n  </div>\n</div>\n';

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