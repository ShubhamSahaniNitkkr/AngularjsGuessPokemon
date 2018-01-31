var app = angular.module("Pokemonapp",[]);
app.controller("GameController",['$scope','$timeout',function($scope,$timeout){

var words =["Bulbasaur","Ivysaur","Squirtle","Pikachu","Vulpix","Jigglypuff","Charmander","Raichu"];
$scope.incorrectLetterChoosen=[];
$scope.correctLetterChoosen=[];
$scope.guesses=6;
$scope.displayWord='';
$scope.input = {
  letter :''
}

var selectRandom = function(){
  var index = Math.round(Math.random()*words.length);
  console.log(index);
  if(index > words.length-1)
  index=0;
  return words[index];
}

var newGame = function(){
  $scope.incorrectLetterChoosen=[];
  $scope.correctLetterChoosen=[];
  $scope.guesses=6;
  $scope.displayWord='';
  selectedWord = selectRandom();
  $scope.selectedWord=selectedWord;
  var tempStarWord ='';
  for (var i = 0; i < selectedWord.length; i++) {
    tempStarWord+='*';
  }
  $scope.displayWord=tempStarWord;

}

$scope.letterChoosen = function(){
  for (var i = 0; i < $scope.correctLetterChoosen.length; i++) {
    if($scope.correctLetterChoosen[i].toLowerCase() ==$scope.input.letter.toLowerCase())
    {
      $scope.input.letter ="";
      return;
    }
  }

  for (var i = 0; i < $scope.incorrectLetterChoosen.length; i++) {
    if($scope.incorrectLetterChoosen[i].toLowerCase() ==$scope.input.letter.toLowerCase())
    {
      $scope.input.letter ="";
      return;
    }
  }
  var correct = false;
  for (var i = 0; i < selectedWord.length; i++) {
    if(selectedWord[i].toLowerCase() ==$scope.input.letter.toLowerCase()){
      $scope.displayWord= $scope.displayWord.slice(0,i)+$scope.input.letter.toLowerCase()+$scope.displayWord.slice(i+1) ;
        correct = true;
    }
  }
  if(correct)
  {
    $scope.correctLetterChoosen.push($scope.input.letter.toLowerCase());
  }
  else {
    if($scope.input.letter !="")
    {
      $scope.guesses--;
      $scope.incorrectLetterChoosen.push($scope.input.letter.toLowerCase());
    }
  }
  $scope.input.letter="";
  if($scope.guesses==0)
  {
    alert("you lost !");
    newGame();
  }
  if($scope.displayWord.indexOf("*")==-1)
  {
    alert("you win !");
    newGame();
  }
}



$scope.heading = {
  "color" : "#7bd69b",
  "font-size" : "60px",
  "padding" : "5px"
}
$scope.desc = {
  "font-size" : "17px",
  "color" : "red"

}

$scope.body = {
  "color" : "grey",
  "font-size" : "25px",
  "padding-top" : "10px",
  "text-align":"center"
}
$scope.incorrecttext = {
  "color":"red"
}

$scope.correcttext = {
  "color":"green"
}

$scope.remainttext = {
  "color":"yellow"
}

$scope.oremainttext = {
  "color":"#800080"
}


$scope.inputs = {
"font-size":"50px",
"height":"40px",
"font-size":"20px",
"width":"112px",
"border-radius":"10px"
}
$scope.submit={
  "height":"46px",
  "font-size":"20px",
  "width":"112px",
  "border-radius":"10px",
  "color":"grey"
}

$scope.title={
  "color":"#0db5b5"
}

newGame();

}]);
