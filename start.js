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
    v: "B5",
    b: "C6",
    h: "C#6",
    n: "D6",
    j: "D#6",
    m: "E6"
}




//Key Press Function
function onKeypress(event) {
    console.log(event.key);
    const note = notes[event.key];
    synth.triggerAttackRelease(note, "16n");
    document.getElementById(event.key).style.backgroundColor = "brown";
}
function onRelease(event) {
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
    document.getElementById(e.target.id).style.backgroundColor = "brown";
    setTimeout(() => {
        const note = e.target.dataset.note.length;
        let color = note === 2 ? "white" : "black";
        document.getElementById(e.target.id).style.backgroundColor = color;
    }, 100)
});


//Quotes and typewriter effect
var app = document.getElementById('bot');

var typewriter = new Typewriter(app, {
    loop: true,
    delay: 35,
});

typewriter.typeString('“To play a wrong note is insignificant; to play without passion is inexcusable!” - Ludwig van Beethoven')
    .pauseFor(3000)
    .deleteAll(2)
    .typeString('“Music is what tell us that the human race is greater than we realize.” ― Napoléon Bonaparte')
    .pauseFor(3000)
    .deleteAll(2)
    .typeString('“Music gives a soul to the universe, wings to the mind, flight to the imagination and life to everything.” ― Plato')
    .pauseFor(3000)
    .deleteAll(2)
    .typeString('“One good thing about music, when it hits you, you feel no pain.” ― Bob Marley')
    .pauseFor(3000)
    .deleteAll(2)
    .typeString('“Where words fail, music speaks.” ― Hans Christian Andersen')
    .pauseFor(3000)
    .deleteAll(2)
    .typeString('“How is it that music can, without words, evoke our laughter, our fears, our highest aspirations?” ― Jane Swan')
    .pauseFor(3000)
    .deleteAll(2)
    .typeString('“Music is … A higher revelation than all Wisdom & Philosophy” ― Ludwig van Beethoven')
    .pauseFor(3000)
    .deleteAll(2)
    .typeString('“Music touches us emotionally, where words alone can’t.” ― Johnny Depp')
    .pauseFor(3000)
    .deleteAll(2)
    .typeString('“Life seems to go on without effort when I am filled with music.” ― George Eliot')
    .pauseFor(3000)
    .deleteAll(2)
    .typeString('“If music be the food of love, play on.” ― William Shakespeare')
    .pauseFor(3000)
    .deleteAll(2)
    .typeString('“If I cannot fly, let me sing.” ― Stephen Sondheim')
    .pauseFor(3000)
    .deleteAll(2)
    .typeString('“Music is the language of our hearts, the language that spreads love and peace in our world” ― My Dad')
    .pauseFor(3000)
    .deleteAll(2)
    .typeString('“To live is to be musical, starting with the blood dancing in your veins. Everything living has a rhythm. Do you feel your music?” ― Michael Jackson')
    .pauseFor(3000)
    .deleteAll(2)
    .typeString('“It’s like if the music is loud enough I won’t be able to listen to my own thoughts. ” ― Nic Sheff')
    .pauseFor(3000)
    .deleteAll(2)
    .typeString('“Most people die with their music still locked up inside them.” ― Benjamin Disraeli')
    .pauseFor(3000)
    .deleteAll(2)
    .typeString('“If Music is a Place — then Jazz is the City, Folk is the Wilderness, Rock is the Road, Classical is a Temple.” ― Vera Nazarian')
    .pauseFor(3000)
    .deleteAll(2)
    .typeString('“Music is the divine way to tell beautiful, poetic things to the heart..” ― Pablo Casals')
    .pauseFor(3000)
    .deleteAll(2)
    .typeString('“Music can change the world because it can change people.” ― Bono')
    .pauseFor(3000)
    .deleteAll(2)
    .start();


//Changing Instruement Type Functions   
function start() {
    synth = new Tone.PolySynth().toMaster();
}
function amsSynth() {
    synth = new Tone.AMSynth().toMaster();
}
function fmsSynth() {
    synth = new Tone.FMSynth().toMaster();
}
function membraneSynth() {
    synth = new Tone.MembraneSynth().toMaster();
}
function metalSynth() {
    synth = new Tone.MetalSynth().toMaster();
}
function monoSynth() {
    synth = new Tone.MonoSynth().toMaster();
}






