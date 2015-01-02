
function popitup(url) {
				newwindow=window.open(url,'afterfm','menubar=1,resizable=0,width=350,height=610');
				if (window.focus) {newwindow.focus()}
				return false;
			}
function popitupKGNU(url) {
	newwindow=window.open(url,'kgnu','menubar=1,resizable=0,width=350,height=350');
	if (window.focus) {newwindow.focus()}
	return false;
}

//fix problem where Android menu doesn't treat hovers correctly
$(function() {
	var ua = navigator.userAgent.toLowerCase();
	var isAndroid = ua.indexOf("android") > -1; //&& ua.indexOf("mobile");
	if(isAndroid) {
		$("#cssmenu > ul > li > a").click(function(e) {
			if ($(this).parent().children("ul").length > 0 && $(this).parent().is(":not(.hover)")) {
				$(this).parent().addClass("hover");
				e.stopPropagation();
				e.preventDefault();
			}
		});
		$("body").click(function() {
			$("#cssmenu > ul > li.hover").removeClass("hover");
		});
	}
});