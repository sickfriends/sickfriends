window.onbeforeunload = function () {
  window.scrollTo(0, 0);
}

var left = document.getElementById('l');
var right = document.getElementById('r');
var title = document.getElementById('title');

var onScroll = (function(){
  var startPos;
  function run(){
    var fromTop = window.pageYOffset, 
        rect = left.getBoundingClientRect(),
        scrollDelta;
    // check if element is in viewport
    if( (rect.top - window.innerHeight) <= 0 && rect.bottom > 0 )
       startPos = startPos === undefined ? fromTop : startPos;
    else{
      startPos = 0;
      return;
    }   
    scrollDeltaL = (fromTop - startPos) * -0.25; // left logo speed
    scrollDeltaR = (fromTop - startPos) * 0.25; // right logo speed
    scrollDeltaTop = (fromTop - startPos) * -0.35; // header / title speed moving up
    left.style.transform = `translateX(${scrollDeltaL}px)`;
    right.style.transform = `translateX(${scrollDeltaR}px)`;
    title.style.transform = `translateY(${scrollDeltaTop}px) rotate(${scrollDeltaTop}deg)`;
    console.clear();
    console.log(scrollDelta);
  }
  run();
  return run;
})()


window.addEventListener('scroll', onScroll);

var tag = document.createElement('script');
tag.src = 'https://www.youtube.com/iframe_api';
var firstScriptTag = document.getElementsByTagName('script')[0];
firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);
var player;
function onYouTubeIframeAPIReady() {
  player1 = new YT.Player('music1', {
    events: {
      'onReady': onPlayerReady
    }
  });
  player2 = new YT.Player('music2', {
    events: {
      'onReady': onPlayerReady
    }
  });
  player3 = new YT.Player('music3', {
    events: {
      'onReady': onPlayerReady
    }
  });
  player8 = new YT.Player('music8', {
    events: {
      'onReady': onPlayerReady
    }
  });
}
function onPlayerReady(event) {
  document.getElementById('pause1').addEventListener('click', function() {
    player1.pauseVideo();
  });
  document.getElementById('pause2').addEventListener('click', function() {
    player2.pauseVideo();
  });
  document.getElementById('pause3').addEventListener('click', function() {
    player3.pauseVideo();
  });
  document.getElementById('pause8').addEventListener('click', function() {
    player8.pauseVideo();
  });
}
function show(playerID, pauseID) {
    var player = document.getElementById(playerID);
    var pause = document.getElementById(pauseID);
    player.style.display = "block";
    pause.style.display = "block";
}
function hide(playerID, pauseID) {
    var player = document.getElementById(playerID);
    var pause = document.getElementById(pauseID);
    player.style.display = "none";
    pause.style.display = "none";
}
