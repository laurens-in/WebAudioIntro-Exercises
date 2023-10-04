import { createNote } from "../problems/problem4";

test("check if note has correct properties", () => {
  const note = createNote(440, 0.8, 2);
  expect(note).toHaveProperty("pitch");
  expect(note).toHaveProperty("velocity");
  expect(note).toHaveProperty("duration");
});

test("check if note has correct values", () => {
  const note = createNote(440, 0.8, 2);
  expect(note.pitch).toBe(440);
  expect(note.velocity).toBe(0.8);
  expect(note.duration).toBe(2);
});
