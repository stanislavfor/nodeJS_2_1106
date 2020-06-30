module.exports = function (string) {
  const input = Array.from(string);
  if (input.length != 4) return false;
  else {
    let c = 0;
    input.forEach(el => {
      if (el * 1 == el) c++;
    })
    return c == 4 ? true : false;
  }
}