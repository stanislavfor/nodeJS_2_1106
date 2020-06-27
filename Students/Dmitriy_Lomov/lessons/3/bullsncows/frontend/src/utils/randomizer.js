function randomizer() {
  const arr = [];
  while (arr.length < 4) {
    const item = Math.floor(Math.random() * 10);
    if (arr.indexOf(item) < 0) arr.push(item);
  }
  console.log(`The guessing number: ${arr}`);
  return arr;
}

export default randomizer;
