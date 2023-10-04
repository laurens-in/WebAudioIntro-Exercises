import { mtof } from "../problems/problem8";

test("check if MIDI is converted correctly", () => {
  expect(mtof(60)).toBeCloseTo(261.63);
  expect(mtof(61)).toBeCloseTo(277.18);
});
