module.exports = () => {
  let arr = [];
		while (arr.length < 4) {
			let item = Math.floor (Math.random () * 10);
			if (arr.indexOf(item) < 0) arr.push (item)
		}
		return arr
};
