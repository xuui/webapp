(function(){(
function(jQuery){
	$=jQuery.noConflict();
	var $window=$(window),$document=$(document);
	$('article').height(function(index,value){
		return $window.height()-$('header').height()-$('footer').height();
	});
})(jQuery);})();