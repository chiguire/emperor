
$(function() {

  var emperor = function() {
    
    // Game States
    addingPlayersGameState: "ADDING_PLAYERS_GAME_STATE",
    playerNominatesGameState: "PLAYER_NOMINATES_GAME_STATE",
    redHerringNominatesGameState: "RED_HERRING_NOMINATES_GAME_STATE",
    playGameState: "PLAY_GAME_STATE",

    gameStart: function() {
      return {
        players: [],
        state: this.addingPlayersGameState
      };
    },

    addPlayerName: function(gameState, playerName) {
      // Check name is not already in list
      gameState.players.push({
        name: playerName,
        nominates: ""
      });
    }

    removePlayerName: function(gameState, playerName) {
      var players = gameState.players;
      var playerIndex = players.indexOf(playerName);
      //if playerIndex == -1 throw exception
      //split players
      gameState.players = players;
    }

    nominatePlayer: function(gameState, playerName, nominates) {
      var 
    }
  }();
  console.log('hello world :o');
  
  $.get('/dreams', function(dreams) {
    dreams.forEach(function(dream) {
      $('<li></li>').text(dream).appendTo('ul#dreams');
    });
  });

  $('form').submit(function(event) {
    event.preventDefault();
    var dream = $('input').val();
    $.post('/dreams?' + $.param({dream: dream}), function() {
      $('<li></li>').text(dream).appendTo('ul#dreams');
      $('input').val('');
      $('input').focus();
    });
  });

});

