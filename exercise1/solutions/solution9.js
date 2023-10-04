// very advanced: write a function that generates a random number without repeating itself
// use a closure, to initialize the function
// the signature of the initializer should look like this initRandom(ceil)
// the returned function takes no arguments

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
