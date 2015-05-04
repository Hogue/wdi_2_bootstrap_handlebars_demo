var characters = (function(){

  var getCharacters = function(){
    $.getJSON( "lib/characters.json").success(function(response){
      _renderCharacters(response.characters);
    });
  }

  var _renderCharacters = function(characters){
    console.log(characters);
    // your code starts here

    // your code ends here
  }

  return {
    getCharacters: getCharacters
  }

})();

$(document).ready(function(){
  characters.getCharacters();
})




