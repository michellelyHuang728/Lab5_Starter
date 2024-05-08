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
  });
  
  function speak(){
    const utter=new SpeechSynthesisUtterance(text.value);
    const selectedOption = voice_select.options[voice_select.selectedIndex];
    const voiceName = selectedOption.getAttribute('data-name');
    utter.voice = voices.find(voice => voice.name === voiceName);
    utter.onstart = function () {
      image.src = 'assets/images/open-mouth.png';
    };
    utter.onend = function () {
      image.src = 'assets/images/smiling.png';
    };
    synth.speak(utter);
  }
}