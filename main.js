
//parallaxing with cursor
const bodymouse = document.querySelector('body');
function handleMouseMove(event) {
  const { clientX, clientY } = event;
  const x = clientX / window.innerWidth;
  const y = clientY / window.innerHeight;
  bodymouse.style.backgroundPosition = `${x * 100}% ${y * 100}%`;
}
//end of parallax code
//**
// for windows specific
//**
var ismobile = 1;
if (typeof window.orientation == 'undefined'){
bodymouse.addEventListener('mousemove', handleMouseMove);
ismobile = 0;
}else{
  document.body.classList.add('bodyphone');
}

console.log("test");
let appear_once =0;
var snowstorm = document.getElementById("snowstorm");
snowstorm.loop=true;

var body = document.getElementsByTagName("body")[0];
body.addEventListener("click",changebg);

function changebg(){
    document.body.removeEventListener("click",changebg);
    console.log("what");
    snowstorm.play();
}


