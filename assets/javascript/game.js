$(document).ready(function() {
  let wins = 0;
  let losses = 0;
  let emeraldValue;
  let diamondValue;
  let amberValue;
  let rubyValue;
  let randomNumber;
  let jewelNumberGenerated;
  let clickValue = 0;

  const generateRandomNumber = function() {
    randomNumber = Math.floor(Math.random() * (120 - 19)) + 19;
  };

  const generateJewelNumber = function() {
    jewelNumberGenerated = Math.floor(Math.random() * (12 - 1)) + 1;
  };

  const startGame = function() {
    generateRandomNumber();
    generateJewelNumber();
    emeraldValue = jewelNumberGenerated;
    generateJewelNumber();
    diamondValue = jewelNumberGenerated;
    generateJewelNumber();
    amberValue = jewelNumberGenerated;
    generateJewelNumber();
    rubyValue = jewelNumberGenerated;
    $('#randomNumber').html(randomNumber);
    $('#wins').html(wins);
    $('#losses').html(losses);
    clickValue = 0;
    console.log(`Emerald: ${emeraldValue}`);
    console.log(`Diamond: ${diamondValue}`);
    console.log(`Amber: ${amberValue}`);
    console.log(`Ruby: ${rubyValue}`);
  };

  startGame();

  $('#emerald').on('click', function() {
    clickValue += emeraldValue;
    console.log(clickValue);
    if (clickValue === randomNumber) {
      wins++;
      startGame();
    } else if (clickValue > randomNumber) {
      losses++;
      startGame();
    }
  });

  $('#diamond').on('click', function() {
    clickValue += diamondValue;
    console.log(clickValue);
    if (clickValue === randomNumber) {
      wins++;
      startGame();
    } else if (clickValue > randomNumber) {
      losses++;
      startGame();
    }
  });

  $('#amber').on('click', function() {
    clickValue += amberValue;
    console.log(clickValue);
    if (clickValue === randomNumber) {
      wins++;
      startGame();
    } else if (clickValue > randomNumber) {
      losses++;
      startGame();
    }
  });

  $('#ruby').on('click', function() {
    clickValue += rubyValue;
    console.log(clickValue);
    if (clickValue === randomNumber) {
      wins++;
      startGame();
    } else if (clickValue > randomNumber) {
      losses++;
      startGame();
    }
  });
});
