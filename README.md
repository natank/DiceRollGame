# DiceRollGame
Implementation of roll the dice game for two players
# GAME RULES
- The game has 2 players, playing in rounds
- In each turn, a player rolls a dice as many times as he whishes 
  Each result gets added to his ROUND score.
 - BUT, if the player rolls a 2, al his ROUND scrore gets lost. 
    After that, it's the next player's turn
 - The player can choose to 'Hold', WHIC MEANS THAT HIS round SCORE GETS ADDED TO HIS GLOBAL score.
   After that, it's the next player's turn.
 - The first player to reach 100 points on GLOBAL score wins the game.
 
 # ENTITIES
 Player1 , Player2: Name, score, current, rolls
 Dice - Roll()
 Game - Players, Winner, Round
 Events - SwitchPlayers
 
 # UI CONTROLS
 Buttons - start game, Roll, HOLD, Reset
 Text - Score, Round, Player's name, 
 
