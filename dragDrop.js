$(document).ready(function(){

    $('.box').mousedown(function(e){
        var ThisX = e.clientX-$(this).offset().left;
        var ThisY = e.clientY-$(this).offset().top;
        
       $(this).mousemove(function(event){      
           var ParentOffset = $(this).parent().offset();
           var x = event.pageX - ParentOffset.left - ThisX;
           var y = event.pageY - ParentOffset.top - ThisY;
          $(this).offset({top: y, left: x}); 
       });
    });
    
   $('.box').mouseup(function(){
      $('.box').off('mousemove');
      $('.box').css('cursor','default');
   });
    
   $('.box').mouseout(function(){
       $('.box').off('mousemove');
       $('.box').css('cursor','default');
   }); 
      
});

window.onload = function() {
    disableSelection(document.body)
}
 
function disableSelection(target){
if (typeof target.onselectstart!="undefined") //IE 
    target.onselectstart=function(){return false}
else if (typeof target.style.MozUserSelect!="undefined") //Firefox 
    target.style.MozUserSelect="none"
else //All other ie: Opera
    target.onmousedown=function(){return false}
target.style.cursor = "default"
}