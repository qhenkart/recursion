// this is what you would do if you liked things to be easy:
// var stringifyJSON = JSON.stringify;

// but you don't so you're going to write it from scratch:
'use strict';
var stringifyJSON = function(obj, stringified){

	if (stringified === undefined) stringified = '';
	if (obj === null || typeof obj === 'number' || typeof obj === 'boolean' ){
		stringified += obj;
	}else if (typeof obj === 'string') {
		stringified += '"' + obj + '"';
	}else if (obj.constructor === Array){
		stringified += '[';
		obj.forEach(function(x,index){
			if (index > 0 && index < obj.length) stringified+=',';
			stringified += stringifyJSON(x);
			//stringified += ',';
		});
		stringified += ']';
	}else if (obj.constructor === Object){
		stringified += '{';
		var counter = 0;
		for (var key in obj){
			if (obj[key] === undefined || typeof obj[key] === 'function') {
				return "{}";
			}

			var temp = Object.keys(obj);
			if (counter > 0 && counter < temp.length) stringified +=',';
			stringified += '"' +key +'"'+ ':';
			stringified += stringifyJSON(obj[key]);
			//stringified += ',';
			counter ++;
		}
		stringified +='}';
	}
	return stringified;
};