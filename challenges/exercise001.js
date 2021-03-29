function capitalize(word) {
  if (word === undefined) throw new Error("word is required");
  return word.charAt(0).toUpperCase() + word.substr(1);
}

function generateInitials(firstName, lastName) {
  if (firstName === undefined) throw new Error("firstName is required");
  if (lastName === undefined) throw new Error("lastName is required");
  return firstName.charAt(0).toUpperCase() + '.' + lastName.charAt(0).toUpperCase();
}

function addVAT(originalPrice, vatRate) {
  if (originalPrice === undefined) throw new Error("originalPrice is requied");
  if (vatRate === undefined) throw new Error("vatRate is required");
  return +(((vatRate / 100) * originalPrice) + originalPrice).toFixed(2);
}

function getSalePrice(originalPrice, reduction) {
  let salePrice = 0;
  if (originalPrice === undefined) throw new Error("originalPrice is required");
  if (reduction === undefined) throw new Error("reduction is required");
  salePrice = originalPrice - ((reduction / 100) * originalPrice);
  return +salePrice.toFixed(2);
}

function getMiddleCharacter(str) {
  if (str === undefined) throw new Error("str is required");
  const len = str.length;
  if (str.length % 2 === 0)
    return (str.charAt(len/2-1) + str.charAt(len/2));
  else
    return (str.charAt(len/2));

}

function reverseWord(word) {
  let revWord = '';
  if (word === undefined) throw new Error("word is required");
  for(let i = word.length; i>=0; i--)
    revWord =  revWord + word.charAt(i);
  return revWord;
}

function reverseAllWords(words) {
  if (words === undefined) throw new Error("words is required");
  let revWords = [];
  for(let i = 0; i<=words.length-1; i++){
    let tempStr = '';
    for(let j = words[i].length-1; j>=0; j--){
      tempStr += words[i][j];
    }
    revWords[i] = tempStr;
  }
  /*
  for (let i=0; i<words.length;i++){
    revWords += words[i].split('').reverse().join('') + ' ';
  }*/
  return(revWords);
}

function countLinuxUsers(users) {
  let count = 0;
  if (users === undefined) throw new Error("users is required");
  for(let i = 0; i<=users.length-1; i++){
    if (users[i].type === "Linux")
      count += 1;
  }
  return count;
}

function getMeanScore(scores) {
  let meanValue = 0.0;
  if (scores === undefined) throw new Error("scores is required");
  for(let i in scores){
    meanValue += scores[i];
  }
  meanValue /= scores.length;
  return +meanValue.toFixed(2);
}

function simpleFizzBuzz(n) {
  if (n === undefined) throw new Error("n is required");
  if ((n%3 === 0) && (n%5 === 0))
    return 'fizzbuzz';
  else if ((n % 5 === 0) && (n%3 !== 0))
    return 'buzz';
  else if ((n % 3 === 0) && (n%5 !== 0))
    return 'fizz';
  else return n;
}

module.exports = {
  capitalize,
  generateInitials,
  addVAT,
  getSalePrice,
  getMiddleCharacter,
  reverseWord,
  reverseAllWords,
  countLinuxUsers,
  getMeanScore,
  simpleFizzBuzz
};
