(function() {

  var fon = document.getElementById("choose");
  var pl1 = document.getElementById("p1");
  var pl2 = document.getElementById("p2");
  var pl3 = document.getElementById("p3");
  
  var style = fon.style;
  pl1.addEventListener("mouseover", function(){fon.className = "choose1";this.addEventListener("mouseout", function(){fon.className = "choose";});});
  pl2.addEventListener("mouseover", function(){fon.className = "choose2";this.addEventListener("mouseout", function(){fon.className = "choose";});});
  pl3.addEventListener("mouseover", function(){fon.className = "choose3";this.addEventListener("mouseout", function(){fon.className = "choose";});});
  
$(document).ready(function() {
  $("a.scrollto").click(function() {
    var elementClick = $(this).attr("href")
    var destination = $(elementClick).offset().top;
    jQuery("html:not(:animated),body:not(:animated)").animate({
      scrollTop: destination
    }, 800);
    return false;
  });
});
  
})();