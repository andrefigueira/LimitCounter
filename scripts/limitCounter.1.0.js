/**
* jQuery Limit Counter 1.0
* Developed by: Andre Figueira
* Copyright (c) 2012 Andre Figueira
*
* This script is free software: you can redistribute it and/or modify it 
* under the terms of the GNU General Public License as published by the Free 
* Software Foundation, either version 3 of the License, or (at your option)
* any later version. 
*/ 
$.fn.limitCounter = function(options)
{

	var defaults = {
		limit: 160,
		counterClass: '',
		suffix: 'characters left'
	}
	
	var options = $.extend(defaults, options);

	var el = $(this);
	
	var elementID = el.attr('id');
	var counter = '<span class="characterCounter ' + options.counterClass + '">' + options.limit + ' ' + options.suffix + '</span>';
	
	el.after(counter);
	
	el.on('keyup', function(){
		
		var value = el.val();
		var totalChars = value.length;
		var charsLeft = options.limit - totalChars;
		
		if(totalChars > options.limit) {
			el.val(value.substr(0, options.limit));
		} else {
			if(charsLeft >= 0) {
				el.next('.characterCounter').html(charsLeft + ' ' + options.suffix);
			}
		}

	});
}