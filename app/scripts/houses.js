var houses = (function(){

  var getHouses = function(){
    $.getJSON( "lib/houses.json").success(function(response){
      _renderHouses(response.houses);
    });
  }

  var _renderHouses = function(houses){
    // your code starts here
    var template = Handlebars.compile($('#house-index').html());
    $('#content').html(template({
          houses: houses
    }));
    // your code ends here
  }

  return {
    getHouses: getHouses
  }

})();


$(document).ready(function(){
  houses.getHouses();
})


