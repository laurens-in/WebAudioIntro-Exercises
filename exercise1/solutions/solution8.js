// advanced: write a function that converts MIDI note numbers to frequencies in Hz
// the function signature should look like this mtof(pitch)

// https://www.music.mcgill.ca/~gary/307/week1/node28.html

export const mtof = (n) => Math.pow(2, (n - 69) / 12) * 440;
