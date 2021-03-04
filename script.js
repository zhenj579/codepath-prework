const cluePauseTime = 333; //how long to pause in between clues
const nextClueWaitTime = 1000; //how long to wait before starting playback of the clue sequence


var pattern = [];
var progress = 0; 
var gamePlaying = false;
var tonePlaying = false;
var volume = 0.5;
var guessCounter = 0;
var clueHoldTime = 1000; // how long to hold each clue's light/sound
const maxPatternSize = 8;
var mistakes = 0;
var timer = null;
var duration = 120000 // 120s

function generatePattern()
{
  for(let i = 0; i < maxPatternSize; i++)
    {
      var maxVal = 6; // last button number = 5
      var minVal = 1; // first button number = 1
      var btn = Math.floor(Math.random() * (maxVal - minVal) + minVal); // get number from 1 <= x < 6 (1 to 5)
      pattern.push(btn);
    }
}

function startGame() {
  //initialize game variables
  progress = 0;
  gamePlaying = true;
  clueHoldTime = 1000;
  mistakes = 0;
  duration = 120000;
  pattern = [];
  
  
  //generate pattern
  generatePattern();
  
  // --debug-- print contents of pattern
  for(let i = 0; i < maxPatternSize; i++)
  {
   console.log(pattern[i]);
  }
 
  // swap the Start and Stop buttons
  document.getElementById("startBtn").classList.add("hidden");
  document.getElementById("stopBtn").classList.remove("hidden");
  playClueSequence();
}

function stopGame() {
  gamePlaying = false;
  // swap the Start and Stop buttons
  document.getElementById("stopBtn").classList.add("hidden");
  document.getElementById("startBtn").classList.remove("hidden");  
}

function lightButton(btn) {
  document.getElementById("button"+btn).classList.add("lit");
}

function clearButton(btn){
  document.getElementById("button"+btn).classList.remove("lit")
}

function playSingleClue(btn) {
  if(gamePlaying) {
    clearInterval(timer);
    lightButton(btn);
    playMyAudio(btn);
    setTimeout(clearButton, clueHoldTime, btn);
  }
}

function playClueSequence(){
  guessCounter = 0;
  let delay = nextClueWaitTime; //set delay to initial wait time
  if(clueHoldTime - 200 > 200)
    {
      clueHoldTime -= 200; // reduce clueHoldTime by 150ms every clue sequence iteration
    }
  for(let i=0;i<=progress;i++){ // for each clue that is revealed so far
    console.log("play single clue: " + pattern[i] + " in " + delay + "ms")
    setTimeout(playSingleClue,delay,pattern[i]);// set a timeout to play that clue
    console.log("duration: " + duration);
    delay += clueHoldTime;
    setTimeout(countDown, delay);
    delay += cluePauseTime;
    
  }
}

function guess(btn){
  console.log("user guessed: " + btn);
  if(!gamePlaying){
    return;
  }

  if(pattern[guessCounter] == btn) {
    if(guessCounter == progress) {
      if(progress == pattern.length - 1)
        {
          winGame();
        }
      else
        {
          progress++;
          playClueSequence();
        }
    }
    else
      {
        guessCounter++;
      }
  }
  else {
    mistakes++;
  }
    if(mistakes >= 2)
    {
      loseGame();
    }
  console.log("mistakes: " + mistakes);

  // add game logic here
}

function loseGame(){
  stopGame();
  alert("Game Over. You lost.");
}

function winGame(){
  stopGame();
  alert("Game Over. You won!");
}

function playMyAudio(btn) {
  document.getElementById("audio"+btn).play();
}

function tick()
{
  document.getElementById("display").innerHTML = "Time left: " + duration/1000 + " seconds";
  if(gamePlaying)
    {
    if(duration <= -1000)
    {
      clearInterval(timer);
      loseGame();
    }
    else
        {
          duration-=1000;
        }
    }
}

function countDown()
{
  timer = setInterval(tick, 1000);
}

