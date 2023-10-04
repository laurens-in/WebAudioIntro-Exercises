// write a function that generates an array of random notes, given the length of the array
// tip: check documentation for Math.random and Math.floor
// the function signature should look like this genRandomNotes(length)

const genRandomNotes = (length) => {
  const notes = [];
  for (let i = 0; i < length; i++) {
    notes[i] = {
      pitch: Math.random() * 440 + 20,
      velocity: Math.random(),
      duration: Math.random() * 3,
    };
  }
  return notes;
};
