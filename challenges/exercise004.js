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
  let returnVerbs = [];
  let k = 0;
  if (!words) throw new Error("words is required");
  for(let i in words){
    if (words[i].startsWith('to ')) {
      returnVerbs[k] = words[i];
      k++;
    }
  }
  return returnVerbs;
}

function getIntegers(nums) {
  let k = 0;
  let returnInt = [];
  if (!nums) throw new Error("nums is required");
  for(let i in nums){
    if(nums[i] % 1 == 0) {
      returnInt[k] = nums[i];
      k++;
    }
  }
  return returnInt;
}

function getCities(users) {
  let returnCity = [];
  if (!users) throw new Error("users is required");
  for(let i in users){
    returnCity[i] = users[i].data.city.displayName;
  }
  return returnCity;
}

function getSquareRoots(nums) {

  if (!nums) throw new Error("nums is required");
  return ((nums.map(function (x){
    x = Math.sqrt(x);
    return +x.toFixed(2);
  })));
}

function findSentencesContaining(sentences, str) {
  let returnSentences = [];
  if (!sentences) throw new Error("sentences is required");
  if (!str) throw new Error("str is required");
  for(let i in sentences){
    if ((sentences[i].toLowerCase()).includes(str.toLowerCase())){
      returnSentences.push(sentences[i]);
    }
  }
  return (returnSentences);
}

function getLongestSides(triangles) {
  let largestSide = [];
  if (!triangles) throw new Error("triangles is required");
  for(let i in triangles){
    largestSide[i] = Math.max(...triangles[i]);
  }
  return largestSide;
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
