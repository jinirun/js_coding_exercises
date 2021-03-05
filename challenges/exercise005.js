const findNextNumber = (nums, n) => {
  if (nums === undefined) throw new Error("nums is required");
  if (n === undefined) throw new Error("n is required");
  for(let i=0; i<nums.length-1; i++){
    if(nums[i] === n)
      return nums[i+1];
  }
  return null;
};

const count1sand0s = str => {
  const numOfOnesAndZeros = {};
  if (str === undefined) throw new Error("str is required");
  for(let i=0; i < str.length; i++){
    var oneOrZero = parseInt(str[i]);
    if(numOfOnesAndZeros[oneOrZero] === undefined)
      numOfOnesAndZeros[oneOrZero] = 1;
    else
      numOfOnesAndZeros[oneOrZero] += 1;
  }
  return numOfOnesAndZeros;
};

const reverseNumber = n => {
  let numStr = [];
  if (n === undefined) throw new Error("n is required");
  numStr = (n.toString().split('')).reverse();
  return parseInt(numStr.join(''));
};

const sumArrays = arrs => {
  let count = 0;
  if (arrs === undefined) throw new Error("arrs is required");
  for(let i=0; i<arrs.length; i++){
    for (let j=0; j<arrs[i].length;j++){
      count += arrs[i][j];
    }
  }
  return count;
};

const arrShift = arr => {
  if (arr === undefined) throw new Error("arr is required");
  let temp = arr[0];
  if(arr.length >= 2) {
    arr[0] = arr[arr.length - 1];
    arr[arr.length - 1] = temp;
  }
  return arr;
};

const findNeedle = (haystack, searchTerm) => {
  const findNeedle = Object.values(haystack);
  if (haystack === undefined) throw new Error("haystack is required");
  if (searchTerm === undefined) throw new Error("searchTerm is required");
  for(let i in findNeedle){
    if (((findNeedle[i]).toString().toLowerCase()).includes(searchTerm.toString().toLowerCase())) {
      return true;
    }
  }
  return false;
};

const getWordFrequencies = str => {
  const frequencies = {};
  const str1 = str.split(" ");
  if (str === undefined) throw new Error("str is required");
  for(let i in str1){
    const word = str1[i].toLowerCase();
    if(frequencies[word] === undefined)
      frequencies[word] = 1;
    else
      frequencies[word] += 1;
  }
  return frequencies;
};

module.exports = {
  findNextNumber,
  count1sand0s,
  reverseNumber,
  sumArrays,
  arrShift,
  findNeedle,
  getWordFrequencies
};
