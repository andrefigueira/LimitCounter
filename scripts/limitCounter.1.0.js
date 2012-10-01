$.fn.limitCounter = function(options)
{

	var defaults = {
		limit: 160,
		counterClass: '',
		suffix: 'characters left'
	}
	
	var options = $.extend(defaults, options);
	
	//Remove if a character counter already exists
	if($(this).next('.characterCounter').size() > 0){ $('.characterCounter').remove();}
	
	var elementID = $(this).attr('id');
	var counter = '<span rel="' + elementID + '" class="characterCounter ' + options.counterClass + '">' + options.limit + ' ' + options.suffix + '</span>';
	
	$(this).after(counter);
	
	$(this).live('keyup', function(){
		
		var value = $(this).val();
		var totalChars = value.length;
		var charsLeft = options.limit - totalChars;
		
		if(totalChars > options.limit)
		{
		
			$(this).val(value.substr(0, options.limit));
			
		}
		else
		{
		
			if(charsLeft >= 0)
			{
		
				$(this).next('.characterCounter').html(charsLeft + ' ' + options.suffix);
				
			}
			
		}
		
	});

}