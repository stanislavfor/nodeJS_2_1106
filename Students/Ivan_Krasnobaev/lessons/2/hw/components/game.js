module.exports = function (q, n) {
  let bulls = cows = 0;
  const ans = Array();
  ans[0] = Math.floor(q / 1000);
  ans[1] = Math.floor( (q / 100) % 10 );
  ans[2] = Math.floor( (q / 10) % 10 );
  ans[3] = q % 10;

  //console.log(ans);

  for (let i = 0; i < ans.length; i++) {
    if (n.indexOf(ans[i]) !== -1) {
      n.indexOf(ans[i]) == i ? bulls++ : cows++;
    }
  }

  if (bulls == 4) {
    console.log('Правильно!');
    return true;
  } else {
    return 'Коров = ' + cows + ' Быков = ' + bulls + '\n';
  }
};