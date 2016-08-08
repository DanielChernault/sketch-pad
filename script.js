
var gridsize = 960;
var gridinit = 16;
var objectinit = gridsize/gridinit - 2;

//Draw a div grid, inside a container div
function drawGrid(g, os){
  for(var n=0; n<g; n++){
    for(var i=0; i<g; i++){
      $(document).ready(function(){
        $('.container').prepend('<div class="object"></div>');
          $('.object').css("width", os);
          $('.object').css("height", os);
      });
    };
  };
};

//Clear the current grid configuration
function clearGrid(){
    $('.object').remove();
  };


//Starting Jquery 
$(document).ready(function(){

  drawGrid(gridinit, objectinit);

//User create new Grid
  $('button').on('click',function(){
    var grid = prompt("Please enter a gridsize");
    var objectsize = gridsize/grid - 2;
    clearGrid();
    drawGrid(grid, objectsize);
  });

//Change grid color
  $(document).on('mouseover', '.object', function(){
    $(this).addClass('objectColor');
  });

});