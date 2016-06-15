$(document).ready(function(){
	console.log("Ready");	
});

$(window).load(function() {
	CreateSVG (); 
});

$(window).resize(function(){ 
	if($(window).width() > 768){
		document.body.style.height  = window.innerHeight+"px";
		document.getElementById("bottomDiv").removeChild (svgElem);     
		CreateSVG ();
	}
});
var svgElem;
var start = true;
function CreateSVG () {		
	var xmlns = "http://www.w3.org/2000/svg";
	var boxWidth = window.innerWidth;
	var boxHeight = 364;
	
	var _h = (boxHeight-document.getElementsByClassName("iconLayer")[0].clientHeight*2);

	svgElem = document.createElementNS (xmlns, "svg");
	svgElem.setAttributeNS (null, "viewBox", "0 0 " + boxWidth + " " + boxHeight);
	svgElem.setAttributeNS (null, "width", boxWidth);
	svgElem.setAttributeNS (null, "height", boxHeight);
	svgElem.style = "position: relative;z-index=1";

	var offsetX = 128;
	var offsetY = 145;
	var maxRow = Math.ceil(window.innerWidth/(offsetX/2));
	var maxCol = 10;

	var gencolor = generateColor('#2c4ff9','#93a5ff',maxCol);	
	for(var col=0; col<maxCol; col++){
		var rowCount = 0;
		for(var row=0; row<maxRow; row++){
			var tmp = offsetX * rowCount;	
	
			var p1 = tmp;
			var p2 = col * offsetY/2 - offsetY/4*col;
			var p3 = p1;
			var p4 = offsetY/2 * (col+1) - offsetY/4*col;
			var p5 = tmp - offsetX/2;
			var p6 = offsetY/4 + col*offsetY/2 - offsetY/4*col;
			
			if(row%2 == 0){
				p5 = tmp + offsetX/2;				
				rowCount++;				
			}						
			if(col%2 == 0){
			var coords = "M "+p1+", "+p2;
				coords += " L"+p3+" "+p4;
				coords += " L"+p5+" "+p6;
				coords += " Z";	
			}else{
				var coords = "M "+p1+", "+p6;
				coords += " L"+p5+" "+p4;
				coords += " L"+p5+" "+p2;
				coords += " Z";	
			}						
			
			var _color = "#"+gencolor[col];
			var path = document.createElementNS (xmlns, "path");			
			path.setAttributeNS (null, 'stroke', _color);
			path.setAttributeNS (null, 'stroke-width', 1);
			path.setAttributeNS (null, 'd', coords);			
			path.setAttributeNS (null, 'fill', _color);						
			
			var _r = Math.floor(getRandomArbitrary(0,2));
			if(_r != 0){
				if(start)
					$(path).hide();
				path.setAttributeNS (null, 'opacity', col/maxCol);
			}else{
				path.setAttributeNS (null, 'opacity', 0);
			}	
			svgElem.appendChild (path);
		}
	}		
	document.getElementById("bottomDiv").appendChild (svgElem);   
	$("#bottomDiv").viewportChecker({
		offset: 300,
		callbackFunction: function () {
		    for (var i = 0; i < $(svgElem)[0].childNodes.length; i++) {
		        $($(svgElem)[0].childNodes[i]).delay(($(svgElem)[0].childNodes.length - 1) * 3 - i * 3).fadeIn();
			}
		}
	});
	start = false;
}

function getRandomArbitrary(min, max) {
  return Math.random() * (max - min) + min;
}

function hex (c) {
  var s = "0123456789abcdef";
  var i = parseInt (c);
  if (i == 0 || isNaN (c))
    return "00";
  i = Math.round (Math.min (Math.max (0, i), 255));
  return s.charAt ((i - i % 16) / 16) + s.charAt (i % 16);
}

/* Convert an RGB triplet to a hex string */
function convertToHex (rgb) {
  return hex(rgb[0]) + hex(rgb[1]) + hex(rgb[2]);
}

/* Remove '#' in color hex string */
function trim (s) { return (s.charAt(0) == '#') ? s.substring(1, 7) : s }

/* Convert a hex string to an RGB triplet */
function convertToRGB (hex) {
  var color = [];
  color[0] = parseInt ((trim(hex)).substring (0, 2), 16);
  color[1] = parseInt ((trim(hex)).substring (2, 4), 16);
  color[2] = parseInt ((trim(hex)).substring (4, 6), 16);
  return color;
}

function generateColor(colorStart,colorEnd,colorCount){
	// The beginning of your gradient
	var start = convertToRGB (colorStart);    
	// The end of your gradient
	var end   = convertToRGB (colorEnd);    
	// The number of colors to compute
	var len = colorCount;
	//Alpha blending amount
	var alpha = 0.0;
	var saida = [];	
	for (i = 0; i < len; i++) {
		var c = [];
		alpha += (1.0/len);		
		c[0] = start[0] * alpha + (1 - alpha) * end[0];
		c[1] = start[1] * alpha + (1 - alpha) * end[1];
		c[2] = start[2] * alpha + (1 - alpha) * end[2];
		saida.push(convertToHex (c));
		
	}
	return saida;	
}