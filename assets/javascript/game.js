$(document).ready(function() {
  let wins = 0;
  let losses = 0;
  let emeraldValue;
  let diamondValue;
  let amberValue;
  let rubyValue;
  let randomNumber;
  let jewelNumberGenerated;
  let clickTotal = 0;

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
    clickTotal = 0;
    $('#clickTotal').html(clickTotal);
  };

  startGame();

  $('#emerald').on('click', function() {
    clickTotal += emeraldValue;
    $('#clickTotal').html(clickTotal);
    if (clickTotal === randomNumber) {
      wins++;
      startGame();
    } else if (clickTotal > randomNumber) {
      losses++;
      startGame();
    }
  });

  $('#diamond').on('click', function() {
    clickTotal += diamondValue;
    $('#clickTotal').html(clickTotal);
    if (clickTotal === randomNumber) {
      wins++;
      startGame();
    } else if (clickTotal > randomNumber) {
      losses++;
      startGame();
    }
  });

  $('#amber').on('click', function() {
    clickTotal += amberValue;
    $('#clickTotal').html(clickTotal);
    if (clickTotal === randomNumber) {
      wins++;
      startGame();
    } else if (clickTotal > randomNumber) {
      losses++;
      startGame();
    }
  });

  $('#ruby').on('click', function() {
    clickTotal += rubyValue;
    $('#clickTotal').html(clickTotal);
    if (clickTotal === randomNumber) {
      wins++;
      startGame();
    } else if (clickTotal > randomNumber) {
      losses++;
      startGame();
    }
  });
});
