let uniqueInOrder = function (iterable) {
  let test = Array.from(iterable);
  return test.reduce((res, x, index) => {
    if (res[res.length - 1] !== iterable[index]) {
      res.push(x);
    }
    console.log(x);
    return res;
  }, []);
};
console.log(uniqueInOrder("AAAABBBCCDAABBB"));
console.log(uniqueInOrder("ABBCcAD"));
console.log(uniqueInOrder([1, 2, 2, 3, 3]));
