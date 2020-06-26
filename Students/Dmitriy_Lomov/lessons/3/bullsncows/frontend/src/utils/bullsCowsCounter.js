function resultsCounter(user, pc) {
  const results = {
    bulls: 0,
    cows: 0,
  };

  const attempt = [...user];

  attempt.forEach((num, i) => {
    if (+num === pc[i]) {
      results.bulls++;
    } else if (pc.indexOf(+num) >= 0) {
      results.cows++;
    }
  });
  return results;
}

export default resultsCounter;
