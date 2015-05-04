var characters = (function(){

  var getCharacters = function(){
    $.getJSON( "lib/characters.json").success(function(response){
      _renderCharacters(response.characters);
    });
  }

  var _renderCharacters = function(characters){
    // your code starts here
    var template = Handlebars.compile($('#character-index').html());
    $('#content').html(template({
          characters: characters
    }));
    // your code ends here
  }

  return {
    getCharacters: getCharacters
  }

})();

$(document).ready(function(){
  characters.getCharacters();
})




