import { initRandom } from "../problems/problem9";

test("check if random doesn't repeat", () => {
  const generator = initRandom(2);
  expect(generator()).not.toBe(generator());
  expect(generator()).not.toBe(generator());
});
