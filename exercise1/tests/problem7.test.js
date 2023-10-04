import { genRandomNotes } from "../problems/problem7";

test("check if array has right length", () => {
  const notes = genRandomNotes(3);
  expect(notes.length).toBe(3);
});

test("check if objects have the right properties", () => {
  const notes = genRandomNotes(3);
  const note = notes[0];
  expect(typeof note.pitch).toBe("number");
  expect(typeof note.velocity).toBe("number");
  expect(typeof note.duration).toBe("number");
});

test("check if objects are random", () => {
  const notes = genRandomNotes(3);
  const otherNotes = genRandomNotes(3);
  expect(notes[0]).not.toStrictEqual(otherNotes[0]);
});
