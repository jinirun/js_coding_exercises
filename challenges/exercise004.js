function findSmallNums(nums) {
  let newNums = [];
  let k = 0;
  if (!nums) throw new Error("nums is required");
  for(let i=0; i<nums.length; i++){
    if (nums[i] < 1) {
      newNums[k] = nums[i];
      k++;
    }
  }
   return newNums;
}

function findNamesBeginningWith(names, char) {
  if (!names) throw new Error("names is required");
  if (!char) throw new Error("char is required");
  let newArray = [];
  let s = 0;
  for(let i in names){
    if (names[i].startsWith(char)){
      newArray[s] = names[i];
      s++;
    }
  }
  return newArray;
}

function findVerbs(words) {
  if (!words) throw new Error("words is required");
  // Your code here
}

function getIntegers(nums) {
  if (!nums) throw new Error("nums is required");
  // Your code here
}

function getCities(users) {
  if (!users) throw new Error("users is required");
  // Your code here
}

function getSquareRoots(nums) {
  if (!nums) throw new Error("nums is required");
  // Your code here
}

function findSentencesContaining(sentences, str) {
  if (!sentences) throw new Error("sentences is required");
  if (!str) throw new Error("str is required");
  // Your code here
}

function getLongestSides(triangles) {
  if (!triangles) throw new Error("triangles is required");
  // Your code here
}

module.exports = {
  findSmallNums,
  findNamesBeginningWith,
  findVerbs,
  getIntegers,
  getCities,
  getSquareRoots,
  findSentencesContaining,
  getLongestSides
};
