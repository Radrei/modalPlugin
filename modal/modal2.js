(function($){
    $.fn.modal = function() {
		$('a').click(function(e) {
			$("#mask").fadeIn(700);
			if ($(this).hasClass('fade')) {
				$("#popup").fadeIn(700);
			}
			else if ($(this).hasClass('ttb')) {
				$("#popupTTB").animate({top: '200px'}, 1000);
			}
			else if ($(this).hasClass('btt')) {
				$("#popupBTT").animate({bottom: '500px'}, 1000);
			}
			else if ($(this).hasClass('ltr')) {
				$("#popupLTR").animate({left: '600px'});
			}
			else if ($(this).hasClass('rtl')) {
				$("#popupRTL").animate({left: '450px'});
			}
			else if ($(this).hasClass('close')) {
				$(".popup").fadeOut();
				$("#mask").hide();
			}
		});
	};
})(jQuery);