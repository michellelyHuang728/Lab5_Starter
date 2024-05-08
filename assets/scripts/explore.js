// explore.js

window.addEventListener('DOMContentLoaded', init);

function init() {
  // TODO
  const synth=window.speechSynthesis;
  const voice_select=document.getElementById('voice-select');
  const button=document.querySelector('button');
  const text=document.getElementById('text-to-speak');
  const image=document.querySelector("#explore img");

  let voices=[];

  function populateVoices(){
    voices=synth.getVoices();
    voices.forEach(voice=>{
      const option=document.createElement('option');
      option.textContent=voice.name+"("+voice.lang+")";
      option.setAttribute('data-lang', voice.lang);
      option.setAttribute('data-name',voice.name);
      voice_select.appendChild(option);
    });
  }

  populateVoices();
  speechSynthesis.onvoiceschanged=function(){
    populateVoices();
  }

  button.addEventListener("click", function(){
    speak();
    open_mouth();
  });
  
  function speak(){
    const utter=new SpeechSynthesisUtterance(text.value);
    let this_select_voice=voice_select.selectedIndex;
    let this_option=voice_select[this_select_voice].value;
    utter.voice=speechSynthesis.getVoices()[this_option];
    // utter.onstart = function () {
    //   image.src = 'assets/images/open-mouth.png';
    // };
    // utter.onend = function () {
    //   image.src = 'assets/images/smiling.png';
    // };
    utter.addEventListener('end', function() {
      image.src = "assets/images/smiling.png";
    });
    speechSynthesis.speak(utter);
  }

  function open_mouth(){
    image.src = "assets/images/smiling-open.png";
  }
}