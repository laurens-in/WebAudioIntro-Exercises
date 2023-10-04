import { note } from "../problems/problem3";

test("check if note has correct properties", () => {
  expect(note).toHaveProperty("pitch");
  expect(note).toHaveProperty("velocity");
  expect(note).toHaveProperty("duration");
});

test("check if properties have correct types", () => {
  expect(typeof note.pitch).toBe("number");
  expect(typeof note.velocity).toBe("number");
  expect(typeof note.duration).toBe("number");
});
