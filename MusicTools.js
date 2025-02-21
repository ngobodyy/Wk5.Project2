//440 hz = 2^(midi-69/12)
export const midiPitchToFrequency = function (midiPitch){
    return 440 * Math.pow(2, (midiPitch - 69) / 12);
}   
//midi = 12*log2(freq/440)+69
export const frequencyToMidiPitch = function(frequency){
    return 12 * Math.log2(frequency / 440) + 69;
}
//dBFS = 20 log10(linAmp/1)
export const linearAmplitudeTodBFS = function(linear){
    return 20 * Math.log10(linear);
}
//linAmp = 10^(dBFS/20)
export const dbfsToLinearAmplitude = function(dbfs){
    return Math.pow(10, (dbfs/20));
}
