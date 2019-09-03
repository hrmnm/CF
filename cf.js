(function(){
  $("#menu_bar").click(function(){
    $("#sidebar").slideToggle();
    return false;
  });
  $(window).resize(function(){
    var win = $(window).width();
    var p = 480;
    if(win > p){
      $("#menu").show();
    }
  });
});
