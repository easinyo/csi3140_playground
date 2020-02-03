
window.onload = function()
{
  var roller = document.getElementById("roller");
  roller.addEventListener(
    "click", 
    function () {
      Dice.showDice("dice1", Dice.roll());
      Dice.showDice("dice2", Dice.roll());
      Dice.showDice("dice3", Dice.roll());
      Dice.showDice("dice4", Dice.roll());
      Dice.showDice("dice5", Dice.roll());
    }, 
    false);

  Dice.showDice("dice1", 0);
  Dice.showDice("dice2", 0);  
  Dice.showDice("dice3", 0);  
  Dice.showDice("dice4", 0);  
  Dice.showDice("dice5", 0);  

}
