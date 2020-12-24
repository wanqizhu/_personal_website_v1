$(document).ready(function(){
    // fix header to top upon scrolling
	var menu = $('#menu');
	var menuPosition = menu.offset();
	var placeholder = $('<div id="temp"></div>').width(menu.width()).height(menu.height());
	var isAdded = false;
    var bufferHeight = 140;
	$(window).scroll(function () {
        console.log($(window).scrollTop(), menuPosition.top, menuPosition.top - bufferHeight);
	    if ($(window).scrollTop() >= menuPosition.top && !isAdded) {
			menu.addClass('sticky');
	    	menu.before(placeholder);
	    	isAdded = true;
            $('.head').hide('fast');
		}else if ($(window).scrollTop() < menuPosition.top - bufferHeight && isAdded){
			menu.removeClass('sticky');
	        $('#temp').remove();
	        isAdded = false;
            $('.head').show('fast');
	    }
	});
    
    
    $("#nameCollapsed").on('click', function() {
      $("html, body").animate({ scrollTop: 0 }, "slow");
    });
});