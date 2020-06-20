module.exports = function (q, n) {
  const ans = Array.from(q);
  let bulls = cows = 0;

  for (let i = 0; i < ans.length; i++) {
    if (n.indexOf( parseInt(ans[i]) ) !== -1) {
      n.indexOf( parseInt(ans[i]) ) == i ? bulls++ : cows++;
    }
  }

  if (bulls == 4) {
    console.log('Правильно!');
    return true;
  } else {
    return 'Коров = ' + cows + ' Быков = ' + bulls + '\n';
  }
};