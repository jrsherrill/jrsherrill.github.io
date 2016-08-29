var wordArray = ['father', 'technician', 'developer', 'submariner', 'gamer', 'gym-nerd'];
var styles = ['dark', 'light', ' bright', 'light2', 'shiny', 'awesome'];
var current = 0;
var oldE;

cycleWords();
setInterval(function(){cycleWords();}, 3000);

function cycleWords() {
  var e = document.createElement("SPAN");
  var text = document.createTextNode(wordArray[current]);
  var old = document.getElementById("word");
  console.log(old);
  old.className = "animated fadeOut";
  e.appendChild(text);
  e.className = "animated fadeIn " + styles[current];
  e.setAttribute("id", "word");
  var words = document.getElementById("words");
  setTimeout(function() {
    words.replaceChild(e,old);
  }, 1000);

  if (current < 5) current++;
  else current = 0;
}