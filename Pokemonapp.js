var app = angular.module("Pokemonapp", []);
app.controller("GameController", ['$scope', '$timeout', function ($scope, $timeout) {

  var words = ["Bulbasaur", "Ivysaur", "Squirtle", "Pikachu", "Vulpix", "Jigglypuff", "Charmander", "Raichu"];
  var selectedWord = '';

  $scope.incorrectLetterChoosen = [];
  $scope.correctLetterChoosen = [];
  $scope.guesses = 6;
  $scope.displayWord = '';
  $scope.input = { letter: '' };

  var selectRandom = function () {
    var index = Math.floor(Math.random() * words.length);
    return words[index];
  };

  var newGame = function () {
    $scope.incorrectLetterChoosen = [];
    $scope.correctLetterChoosen = [];
    $scope.guesses = 6;
    $scope.displayWord = '';
    selectedWord = selectRandom();
    $scope.selectedWord = selectedWord;
    var tempStarWord = '';
    for (var i = 0; i < selectedWord.length; i++) {
      tempStarWord += '*';
    }
    $scope.displayWord = tempStarWord;
  };

  $scope.letterChoosen = function () {
    if (!$scope.input.letter) {
      return;
    }

    for (var i = 0; i < $scope.correctLetterChoosen.length; i++) {
      if ($scope.correctLetterChoosen[i].toLowerCase() === $scope.input.letter.toLowerCase()) {
        $scope.input.letter = "";
        return;
      }
    }

    for (var j = 0; j < $scope.incorrectLetterChoosen.length; j++) {
      if ($scope.incorrectLetterChoosen[j].toLowerCase() === $scope.input.letter.toLowerCase()) {
        $scope.input.letter = "";
        return;
      }
    }

    var correct = false;
    for (var k = 0; k < selectedWord.length; k++) {
      if (selectedWord[k].toLowerCase() === $scope.input.letter.toLowerCase()) {
        $scope.displayWord = $scope.displayWord.slice(0, k) + $scope.input.letter.toLowerCase() + $scope.displayWord.slice(k + 1);
        correct = true;
      }
    }

    if (correct) {
      $scope.correctLetterChoosen.push($scope.input.letter.toLowerCase());
    } else {
      $scope.guesses--;
      $scope.incorrectLetterChoosen.push($scope.input.letter.toLowerCase());
    }

    $scope.input.letter = "";

    if ($scope.guesses === 0) {
      alert("you lost !");
      newGame();
    }
    if ($scope.displayWord.indexOf("*") === -1) {
      alert("you win !");
      newGame();
    }
  };

  newGame();
}]);
