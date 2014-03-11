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
var __t, __p = '', __e = _.escape;
with (obj) {
__p += '<div class="col-xs-12 col-lg-3">Name: </div>\n<div class="col-xs-12 col-lg-3"><input type="text" placeholder="name of system"> </div>\n<div class="col-xs-12 col-lg-3">Company: </div>\n<div class="col-xs-12 col-lg-3"><select><option>Sony</option><option>Nintendo</option> </div>\n';

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