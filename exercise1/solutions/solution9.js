
export const initRandom = (ceil = 10) => {
  let current = null;
  const getRandomNoRep = (ceil = 10) => {
    const rand = Math.floor(Math.random() * ceil);
    return rand === current ? getRandomNoRep() : rand;
  };
  return () => {
    current = getRandomNoRep();
    return current;
  };
};
