var e = document.createElement("script");
e.src = "https://ajax.googleapis.com/ajax/libs/jquery/1.4.4/jquery.min.js";
e.type = "text/javascript";
document.getElementsByTagName("head")[0].appendChild(e);

var deal = jQuery.noConflict();
var width = deal(window).width(); 
var height = deal(widow).width();

console.log(widtth + ' ' + height);
