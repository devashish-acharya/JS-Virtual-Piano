let synth = new Tone.PolySynth().toMaster();

//musical sounds
var notes = {
    q: "C4", 
    2: "C#4",
    w: "D4",
    3: "D#4",
    e: "E4",
    r: "F4",
    5: "F#4",
    t: "G4",
    6: "G#4",
    y: "A4",
    7: "A#4",
    u: "B4",
    i: "C5",
    9: "C#5",
    o: "D5",
    0: "D#5",
    p: "E5",
    z: "F5",
    s: "F#5",
    x: "G5",
    d: "G#5",
    c: "A5",
    f: "A#5",
    v: "B5"
}

//Key Press Function
function onKeypress(event){
    console.log(event.key);
        const note = notes[event.key];
        synth.triggerAttackRelease(note, "16n");
    document.getElementById(event.key).style.backgroundColor="brown";
    }
function onRelease(event){
        const note = notes[event.key].length;
        let color = note === 2 ? "white" : "black";
        document.getElementById(event.key).style.backgroundColor = color;
        }

//Key Press Event Listeners 
document.addEventListener('keypress', onKeypress)
document.addEventListener('keyup', onRelease)
        
//Mouse Click Function
const container = document.getElementById("container");

container.addEventListener("mousedown", e => {
    const note = e.target.dataset.note
    synth.triggerAttackRelease(note, "16n");
    document.getElementById("whitenote").style.backgroundColor="brown";
  });


//Changing Instruement Type Functions   
function start(){
    synth = new Tone.PolySynth().toMaster();
}
function amsSynth(){
    synth = new Tone.AMSynth().toMaster();
}
function fmsSynth(){
    synth = new Tone.FMSynth().toMaster();
}
function membraneSynth(){
    synth = new Tone.MembraneSynth().toMaster();
}
function metalSynth(){
    synth = new Tone.MetalSynth().toMaster();
}
function monoSynth(){
    synth = new Tone.MonoSynth().toMaster();
}



    
    

   