let synth 
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
    v: "B5",
}
    progress = document.querySelector('#progress')
console.log(progress)

//Commented out section below is to have a mouse click option for the piano
/*
var html = "";
    for (var i = 0; i <notes.length; i++){
        var sharpNote = true;
        var note = notes[i]

        if (note == 'E' || note == 'B'){
            sharpNote = false;
        }
        html += `<div class='whitenote' onmousedown='pressNote(this)' data-note='${note + '4'}'>`;

        html += `<div class='blacknote' onmousedown='pressNote(this)' data-note='${note + '#4'}'></div>`;
        
        html += '</div>'
    }

    document.getElementById('container').innerHTML = html;

    function pressNote(elem) {
        var note = elem.dataset.note;
        //alert(note);
        synth.triggerAttackRelease(note, "16n")
    }
*/
    function onKeypress(event){
        console.log(event.key);
        const note = notes[event.key];
        synth.triggerAttackRelease(note, "16n");
        document.getElementById(event.key).style.backgroundColor="pink";
    }
    function onRelease(event){
        const note = notes[event.key].length;
        let color = note === 2 ? "white" : "black";
        document.getElementById(event.key).style.backgroundColor = color;
        }

    function mouseClick(event){
            const note = notes[event.key];
            synth.triggerAttackRelease(note, "16n");
            document.getElementById(event.key).style.backgroundColor="pink";
        }
    function mouseRelease(event){
        const note = notes[event.key].length;
        let color = note === 2 ? "white" : "black";
        document.getElementById(event.key).style.backgroundColor = color;
    }
    
    

    document.addEventListener('keypress', onKeypress)
    document.addEventListener('keyup', onRelease)
    document.addEventListener('mousedown', mouseClick)
    document.addEventListener('mouseup', mouseRelease)

    function start(){
        synth = new Tone.PolySynth().toMaster();
    }

    

   