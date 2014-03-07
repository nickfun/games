this["TPL"] = this["TPL"] || {};

this["TPL"]["system-row"] = function(obj) {
obj || (obj = {});
var __t, __p = '', __e = _.escape, __j = Array.prototype.join;
function print() { __p += __j.call(arguments, '') }
with (obj) {

 // name company release comments ;
__p += '\n\n<div class="col-sm-4">' +
__e( company ) +
' ' +
__e( name ) +
'</div>\n<div class="col-sm-8">' +
__e( releae ) +
'</div>\n<div clsss="col-xs-12">' +
__e( comments ) +
'</div>\n';

}
return __p
};