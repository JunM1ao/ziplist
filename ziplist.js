const test1 = [1, 2, 3];
const test2 = ['a', 'b', 'c'];
const longArray = [1, 2, 3, 4];

const error = 'Error: input arrays size does not match';

function zipList(input1, input2) {
  if (input1.length !== input2.length) {
    return error;
  }
  const ret = [];
  for (let i = 0; i < input1.length; i++) {
    ret.push(input1[i]);
    ret.push(input2[i]);
  }
  return ret;
}

const zipListTheSimpleWay = (a1, a2) => ((a1.length === a2.length) ? _.flatten(_.zip(a1, a2)) : error);

console.log(zipList(test1, test2));
console.log(zipListTheSimpleWay(test1, test2));

console.log(zipList(test1, longArray)); // error
console.log(zipListTheSimpleWay(test1, longArray)); // error
