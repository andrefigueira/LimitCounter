## LimitCounter

A very simple lightweight jQuery tooltip plugin for limiting textarea input and counting it :)

### Usage (JavaScript)

    $(document).ready(function(){
    			
    	$('input').limitCounter({
    		limit: 140,
    		counterClass: 'input',
    		suffix: 'characters left'
    	});
    	
    	$('textarea').limitCounter({
    		limit: 140
    	});
    	
    });
    
### Usage (HTML)
    
    <input type="text" name="test2" id="test2" placeholder="Type something in this text input!" />
    <textarea name="test" id="test" placeholder="Type something in this textarea"></textarea>