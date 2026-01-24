function scrollToWeek(){
  document.getElementById('week').scrollIntoView({behavior:'smooth'})
}

/* ---------------- MUSIC TOGGLE ---------------- */
const music = new Audio('https://cdn.pixabay.com/audio/2022/10/14/audio_1f1f7c4f5b.mp3');
music.loop = true;
let playing = false;

function toggleMusic(btn){
  if(!playing){ music.play(); btn.innerText = 'Mute 🔇'; }
  else{ music.pause(); btn.innerText = 'Play Music 🎵'; }
  playing = !playing;
}

/* ---------------- TODAY HIGHLIGHT ---------------- */
const days = ['rose','propose','chocolate','teddy','promise','hug','kiss','valentine'];
const today = new Date().getDate();
if(today >= 7 && today <= 14){
  document.querySelector(`.${days[today-7]}`)?.classList.add('today');
}

/* ---------------- TYPEWRITER NOTE ---------------- */
const noteText = "Love is choosing the same heart, every single day.";
let i = 0;
const note = document.getElementById('typeNote');
function type(){ if(i < noteText.length){ note.innerHTML += noteText.charAt(i); i++; setTimeout(type,60); }}
type();

/* ---------------- FLOATING HEARTS ---------------- */
setInterval(()=>{
  const heart=document.createElement('div')
  heart.innerHTML=['💖','💘','💝','💕','❤️'][Math.floor(Math.random()*5)]
  heart.style.position='fixed'
  heart.style.left=Math.random()*100+'vw'
  heart.style.bottom='-20px'
  heart.style.fontSize='20px'
  heart.style.animation=`float ${4+Math.random()*3}s linear`
  document.body.appendChild(heart)
  setTimeout(()=>heart.remove(),7000)
},500)

const style=document.createElement('style')
style.innerHTML=`@keyframes float{from{transform:translateY(0);opacity:1}to{transform:translateY(-110vh);opacity:0}}`
document.head.appendChild(style)