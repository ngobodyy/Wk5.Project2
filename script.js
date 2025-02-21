import { midiPitchToFrequency, frequencyToMidiPitch, linearAmplitudeTodBFS, dbfsToLinearAmplitude } from "/MusicTools.js";

const midiInput = document.getElementById("midiInput");
const midiToFreq = document.getElementById("midiToFreq");
const freqResult = document.getElementById("freqResult");

const freqInput = document.getElementById("freqInput");
const freqToMidi = document.getElementById("freqToMidi");
const midiResult = document.getElementById("midiResult");

const dbfsInput = document.getElementById("dbfsInput");
const dbfsToLinear = document.getElementById("dbfsToLinear");
const linearResult = document.getElementById("linearResult");

const linearInput = document.getElementById("linearInput");
const linearToDbfs = document.getElementById("linearToDbfs");
const dbfsResult = document.getElementById("dbfsResult");

const midifreq = function () {
    const number = parseFloat(midiInput.value);
    freqResult.textContent = `${midiPitchToFrequency(number)}`;  
};
const freqmidi = function () {
    const number = parseFloat(freqInput.value);
    midiResult.textContent = `${frequencyToMidiPitch(number)}`; 
};
const dbfslinear = function () {
    const number = parseFloat(dbfsInput.value);
    linearResult.textContent = `${dbfsToLinearAmplitude(number)}`; 
};
const lineardbfs = function () {
    const number = parseFloat(linearInput.value);
    dbfsResult.textContent = `${linearAmplitudeTodBFS(number)}`;
};
    
midiToFreq.addEventListener("click", midifreq);
freqToMidi.addEventListener("click", freqmidi);
dbfsToLinear.addEventListener("click", dbfslinear);
linearToDbfs.addEventListener("click", lineardbfs);