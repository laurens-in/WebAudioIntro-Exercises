import { transposeOctave } from "../problems/problem6";

test("check if notes are transposed", () => {
  const notes = [
    { pitch: 1, velocity: 1, duration: 1 },
    { pitch: 2, velocity: 2, duration: 2 },
    { pitch: 3, velocity: 3, duration: 3 },
  ];
  expect(transposeOctave(notes)).toStrictEqual(
    notes.map((n) => ({ ...n, pitch: n.pitch * 2 }))
  );
});
