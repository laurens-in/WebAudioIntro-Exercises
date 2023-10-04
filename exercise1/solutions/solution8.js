// advanced: write a function that converts MIDI note numbers to frequencies in Hz
// the function signature should look like this mtof(pitch)

export const mtof = (n) => Math.pow(2, (n - 69) / 12) * 440;
