var coordX = 0;
var coordY = 0;

document.onmousedown = function(e)
{
//    coordX = (e && e.pageX)? e.pageX : window.event.x;
//    coordY = (e && e.pageY)? e.pageY : window.event.y;
}
document.onmouseover = function(e)
{
/*
 if (e.pageX == null)
   {
      // IE case
      var d= (document.documentElement && 
              document.documentElement.scrollLeft != null) ?
             document.documentElement : document.body;
      coordX= e.clientX + d.scrollLeft;
      coordY= e.clientY + d.scrollTop;
   }
   else
   {
      // all other browsers
      coordX= e.pageX;
      coordY= e.pageY;
   }
 */
   	coordX = (e && e.pageX)? e.pageX : window.event.x+document.body.scrollLeft;
  	coordY = (e && e.pageY)? e.pageY : window.event.y+document.body.scrollTop;;
}

