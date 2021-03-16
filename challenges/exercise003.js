function getSquares(nums) {
  let tempNums = [];
  if (nums === undefined) throw new Error("nums is required");
  if (nums === [])
      return [];
  else{
    tempNums = nums.map(function (x) {
      return Math.pow(x,2);
    });
    return tempNums;
  }
}

function camelCaseWords(words) {
  if (words === undefined) throw new Error("words is required");
  let str2 = [words[0]];
  if (words.length === 1 )
    return(words.join(''));
  else{
    for(let i=1; i<=words.length-1;i++){
      str2[i] = words[i].charAt(0).toUpperCase() + words[i].substr(1);
    }
    return(str2.join(''));
  }
}

function getTotalSubjects(people) {
  let count = 0;
  let len   = 0;
  if (people === undefined) throw new Error("people is required");
  for(let i in people) {
    if (people[i].subjects === [])
      continue;
    else {
      count += 1;
    }
    len += people[i].subjects.length;
  }
  if(count === 0)
    return 0;
  else if(count === 1)
    return 1;
  else{
    return len;
  }
}

function checkIngredients(menu, ingredient) {
  if (menu === undefined) throw new Error("menu is required");
  if (!ingredient) throw new Error("ingredient is required");
  for(let i=0; i<=menu.length-1; i++){
    for(let j=0; j<=menu[i].ingredients.length-1; j++) {
      if (menu[i].ingredients[j] === ingredient)
        return true;
      else
        continue;
    }
  }
  return false;
}

function duplicateNumbers(arr1, arr2) {
  let arr3 = [];
  let k = 0;
  if (arr1 === undefined) throw new Error("arr1 is required");
  if (arr2 === undefined) throw new Error("arr2 is required");
  for(let i in arr1){
    for(let j in arr2){
      if(arr1[i] === arr2[j]){
        if (arr3.includes(arr1[i])){
          continue;
        }
        else{
          arr3[k] = arr1[i];
          k++;
        }
      }
    }
  }
  return arr3.sort();
}

module.exports = {
  getSquares,
  camelCaseWords,
  getTotalSubjects,
  checkIngredients,
  duplicateNumbers
};
