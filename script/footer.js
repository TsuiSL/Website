function CreateSVG(){var t="http://www.w3.org/2000/svg",e=window.innerWidth,r=364;r-2*document.getElementsByClassName("iconLayer")[0].clientHeight;svgElem=document.createElementNS(t,"svg"),svgElem.setAttributeNS(null,"viewBox","0 0 "+e+" "+r),svgElem.setAttributeNS(null,"width",e),svgElem.setAttributeNS(null,"height",r),svgElem.style="position: relative;z-index=1";for(var n=128,i=145,o=Math.ceil(window.innerWidth/(n/2)),a=10,l=generateColor("#2c4ff9","#93a5ff",a),s=0;a>s;s++)for(var u=0,d=0;o>d;d++){var c=n*u,v=c,h=s*i/2-i/4*s,m=v,g=i/2*(s+1)-i/4*s,f=c-n/2,b=i/4+s*i/2-i/4*s;if(d%2==0&&(f=c+n/2,u++),s%2==0){var w="M "+v+", "+h;w+=" L"+m+" "+g,w+=" L"+f+" "+b,w+=" Z"}else{var w="M "+v+", "+b;w+=" L"+f+" "+g,w+=" L"+f+" "+h,w+=" Z"}var E="#"+l[s],N=document.createElementNS(t,"path");N.setAttributeNS(null,"stroke",E),N.setAttributeNS(null,"stroke-width",1),N.setAttributeNS(null,"d",w),N.setAttributeNS(null,"fill",E);var p=Math.floor(getRandomArbitrary(0,2));0!=p?(start&&$(N).hide(),N.setAttributeNS(null,"opacity",s/a)):N.setAttributeNS(null,"opacity",0),svgElem.appendChild(N)}document.getElementById("bottomDiv").appendChild(svgElem),$("#bottomDiv").viewportChecker({offset:300,callbackFunction:function(){for(var t=0;t<$(svgElem)[0].childNodes.length;t++)$($(svgElem)[0].childNodes[t]).delay(3*($(svgElem)[0].childNodes.length-1)-3*t).fadeIn()}}),start=!1}function getRandomArbitrary(t,e){return Math.random()*(e-t)+t}function hex(t){var e="0123456789abcdef",r=parseInt(t);return 0==r||isNaN(t)?"00":(r=Math.round(Math.min(Math.max(0,r),255)),e.charAt((r-r%16)/16)+e.charAt(r%16))}function convertToHex(t){return hex(t[0])+hex(t[1])+hex(t[2])}function trim(t){return"#"==t.charAt(0)?t.substring(1,7):t}function convertToRGB(t){var e=[];return e[0]=parseInt(trim(t).substring(0,2),16),e[1]=parseInt(trim(t).substring(2,4),16),e[2]=parseInt(trim(t).substring(4,6),16),e}function generateColor(t,e,r){var n=convertToRGB(t),o=convertToRGB(e),a=r,l=0,s=[];for(i=0;i<a;i++){var u=[];l+=1/a,u[0]=n[0]*l+(1-l)*o[0],u[1]=n[1]*l+(1-l)*o[1],u[2]=n[2]*l+(1-l)*o[2],s.push(convertToHex(u))}return s}$(window).load(function(){CreateSVG()}),$(window).resize(function(){$(window).width()>768&&(document.body.style.height=window.innerHeight+"px",document.getElementById("bottomDiv").removeChild(svgElem),CreateSVG())});var svgElem,start=!0;