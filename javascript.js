click_counter = function(number) {
	var counter = number;
	count = function() {
		counter = counter + 1;
		alert(counter);
		}
	return count;
	}
