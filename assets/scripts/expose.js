// expose.js

window.addEventListener('DOMContentLoaded', init);

function init() {
  // TODO
  const horn_image=document.querySelector('img[alt="No image selected');
  const selectHorn=document.getElementById('horn-select');
  const audio=document.querySelector('audio');
  const volume_slide=document.getElementById('volume');
  const volume_icon=document.querySelector("#volume-controls img");
  const button=document.querySelector('button');
  

  selectHorn.addEventListener('change',()=>updateHorn(selectHorn.value, horn_image, audio));
  volume_slide.addEventListener('input',()=>updateVolume(volume_slide.value, volume_icon,audio));
  button.addEventListener('click',()=>playSound(audio, selectHorn.value));

}

function updateHorn(horn_type, imageElement, audioElement){
  
  if(horn_type=='air-horn'){
    imageElement.src="assets/images/air-horn.svg";
    audioElement.src="assets/audio/air-horn.mp3";
  }
  else if(horn_type=="car-horn"){
    imageElement.src="assets/images/car-horn.svg";
    audioElement.src="assets/audio/car-horn.mp3";
  }
  else if(horn_type=="party-horn"){
    imageElement.src="assets/images/party-horn.svg";
    audioElement.src="assets/audio/party-horn.mp3";
  }
  else{
    imageElement.src="assets/images/no-image.svg";
    audioElement.src="";
  }
}

function updateVolumn(volume, iconElement, audioElement){
  const volumn_level=parseInt(volume);
  if(volumn_level==0){
    iconElement.src="assets/icons/volume-level-0.svg";
  }
  else if(volumn_level<33){
    iconElement.src="assets/icons/volume-level-1.svg";
  }
  else if(volumn_level<67){
    iconElement.src="assets/icons/volume-level-2.svg";
  }
  else{
    iconElement.src="assets/icons/volume-level-3.svg";
  }
  audioElement.volume=volumn_level/100.0;
}

function playSound(audioElement, horn_type){
  audioElement.play();
  if(horn_type==='party-horn'){
    const jsConfetti=new JSConfetti();
    jsConfetti.addConfetti({
      emojis: ['🌈', '⚡️', '💥', '✨', '💫', '🌸'],
   })
  }
}