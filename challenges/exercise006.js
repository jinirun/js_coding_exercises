/**
 * This function will receive an array of numbers and should return the sum
 * of any numbers which are a multiple of 3 or 5
 * @param {Array} arr
 * @returns {Number}
 */
const sumMultiples = arr => {
  let sumOfMultiples = 0;
  if (arr === undefined) throw new Error("arr is required");
  for(let i=0; i<arr.length; i++){
    if(arr[i] % 3 === 0 || arr[i] % 5 === 0){
      sumOfMultiples += arr[i];
    }
  }
  return sumOfMultiples;
};

/**
 * This function will receive a string of characters and should return true/false depending on whether it is a valid DNA string. A valid DNA string may contain characters C, G, T or A only.
 * @param {String} str
 * @returns {Boolean}
 */
const isValidDNA = str => {
  if (str === undefined) throw new Error("str is required");

  if (str.includes('C', 'G', 'T', 'A'))
    return true;
  return false;
};

/**
 * This function will receive a valid DNA string (see above) and should return a string of the complementary base pairs. In DNA, T always pairs with A, and C always pairs with G. So a string of "ACTG" would have a complementary DNA string of "TGAC".
 * @param {String} str
 * @returns {String}
 */
const getComplementaryDNA = str => {
  let complementaryDNA = '';
  if (str === undefined) throw new Error("str is required");
  for(let i = 0; i<str.length; i++){
    if (str[i] === 'A')
      complementaryDNA += 'T';
    else if(str[i] === 'T')
      complementaryDNA += 'A';
    else if(str[i] === 'C')
      complementaryDNA += 'G';
    else if(str[i] === 'G')
      complementaryDNA += 'C';
  }
  return complementaryDNA;
};

/**
 * This function should receive a number and return true/false depending on whether it is a prime number or not. A prime number is a number that can only be divided evenly by 1 and itself (for example, 7)
 * @param {Number} n
 * @returns {Boolean}
 */
const isItPrime = n => {
  if (n === undefined) throw new Error("n is required");
  for(let i=2; i<=n/2; i++) {
    if (n % i === 0)
      return false;
  }
  return true;
};

/**
 * This function should receive a number and return an array of n arrays, each filled with n items. The parameter "fill" should be used as the filler of the arrays. For example, given parameters 3 and "foo" the resulting matrix should be:
 * [
 *   ["foo", "foo", "foo"],
 *   ["foo", "foo", "foo"],
 *   ["foo", "foo", "foo"]
 * ]
 * @param {Number} n
 * @param {Any} fill
 * @returns {Array}
 */
const createMatrix = (n, fill) => {
  if (n === undefined) throw new Error("n is required");
  if (fill === undefined) throw new Error("fill is required");
  let matrix = [];
  let arr = [];
  for(let k=0; k<n; k++){
    arr.push(fill.toLowerCase());
    matrix.push(arr);
  }
  return matrix;
};

/**
 * This function takes an array of staff objects in the format:
 * [
 *  { name: "Sally", rota: ["Monday", "Tuesday", "Friday"] },
 *  { name: "Pedro", rota: ["Saturday", "Sunday", "Tuesday", "Wednesday"] },
 *  ...etc
 * ]
 * and a day of the week. For the café to run successfully, at least 3 staff members are required per day. The function should return true/false depending on whether there are enough staff scheduled for the given day.
 * @param {Array} staff
 * @param {String} day
 * @returns {Boolean}
 */
const areWeCovered = (staff, day) => {
  if (staff === undefined) throw new Error("staff is required");
  if (day === undefined) throw new Error("day is required");

  let rotaDay = [];
  let count = 0;

  if(staff.length >= 3){
    for(let row=0;row<staff.length;row++){
      rotaDay = Object.values(staff[row].rota);
      rotaDay = rotaDay.join();
      console.log(rotaDay);
      if (rotaDay.includes(day)){
        count++;
      }
    }
  }
  if (count >= 3)
    return(true);
  return false;
};

module.exports = {
  sumMultiples,
  isValidDNA,
  getComplementaryDNA,
  isItPrime,
  createMatrix,
  areWeCovered
};
