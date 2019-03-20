// script adaptado do original de autoria de Nicholas C. Zacas
CookieUtil = {
	get: function(name) {
	var cookieName = encodeURIComponent(name) + "=",
		cookieStart = document.cookie.indexOf(cookieName),
		cookieValue = null;
		
	if(cookieStart > -1) {
		var cookieEnd = document.cookie.indexOf(";", cookieStart);
		if (cookieEnd == -1) {
			cookieEnd = document.cookie.length; 
		}
		cookieValue = decodeURIComponent(document.cookie.substring(cookieStart + cookieName.length, cookieEnd));
	}	
		return cookieValue;
		},
		
	set: function(name,value) {
		document.cookie =  encodeURIComponent(name) + "=" + encodeURIComponent(value);
		},
		
	unset: function (name) {
		this.set(name, "");
		}
}
		