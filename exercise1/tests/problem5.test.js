import { reverse } from "../problems/problem5";

test("check if notes are reversed", () => {
  const notes = [
    { pitch: 1, velocity: 1, duration: 1 },
    { pitch: 2, velocity: 2, duration: 2 },
    { pitch: 3, velocity: 3, duration: 3 },
  ];
  expect(reverse(notes)).toStrictEqual([...notes].reverse());
});
