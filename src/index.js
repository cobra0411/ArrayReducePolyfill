// Array.reduce polyfill

const reduce2 = function (callback, initial) {
  // callback(prevValue, currentValue, index, arr);
  // arr => this
  // if you use arrow function above the value of this will be
  // window object rather than arr
  // arrow function will lexically inherit this as a variable
  // for function decleration/expression this is object
  // that invoked the function
  let arr = this;
  console.log("arr is", arr);
  let accumulator = initial;
  let index = 0;
  if (!arr) {
    return initial;
  }
  if (!initial && arr.length > 0) {
    accumulator = arr[index++];
  } else if (!initial && arr.length === 0) {
    throw Error("initialValue should be there when arr is empty");
  }
  while (index < arr.length) {
    accumulator = callback(accumulator, arr[index], index, arr);
    index++;
  }
  return accumulator;
};

const sum = (sum, curr) => sum + curr;
let tempArr = [1, 2, 3, 4, 5, 6];
Array.prototype.reduce2 = reduce2;
tempArr.reduce2(sum, 0);
