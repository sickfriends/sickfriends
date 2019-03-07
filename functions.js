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
    scrollDeltaL = (fromTop - startPos) * -0.18; // left logo speed
    scrollDeltaR = (fromTop - startPos) * 0.18; // right logo speed
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
