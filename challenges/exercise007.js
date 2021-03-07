/**
 * This function takes a number, e.g. 123 and returns the sum of all its digits, e.g 6 in this example.
 * @param {Number} n
 */
const sumDigits = n => {
  if (n === undefined) throw new Error("n is required");
  let sum = 0;
  let num = n.toString().split('');
  for(let j=0; j<num.length; j++){
    sum += parseInt(num[j]);
  }
  return (sum);
};

/**
 * This function creates a range of numbers as an array. It received a start, an end and a step. Step is the gap between numbers in the range. For example, if start = 3, end = 11 and step = 2 the resulting range would be: [3, 5, 7, 9, 11]
 * Both the start and the end numbers are inclusive.
 * Step is an optional parameter. If it is not provided, assume the step is 1.
 * @param {Number} start
 * @param {Number} end
 * @param {Number} step
 */
const createRange = (start, end, step) => {
  if (start === undefined) throw new Error("start is required");
  if (end === undefined) throw new Error("end is required");
  let newArray = [];
  if (step === 0)
    step = 1;
  for(let k=start; k<=end; k += step){
    newArray.push(k);
  }
  return (newArray);
};

/**
 * This function takes an array of user objects and their usage in minutes of various applications. The format of the data should be as follows:
 * [
 *  {
 *    username: "beth_1234",
 *    name: "Beth Smith",
 *    screenTime: [
 *                 { date: "2019-05-01", usage: { twitter: 34, instagram: 22, facebook: 40} },
 *                 { date: "2019-05-02", usage: { twitter: 56, instagram: 40, facebook: 31} },
 *                 { date: "2019-05-03", usage: { twitter: 12, instagram: 15, facebook: 19} },
 *                 { date: "2019-05-04", usage: { twitter: 10, instagram: 56, facebook: 61} },
 *                ]
 *   },
 *   {
 *    username: "sam_j_1989",
 *    name: "Sam Jones",
 *    screenTime: [
 *                 { date: "2019-06-11", usage: { mapMyRun: 0, whatsApp: 0, facebook: 0, safari: 10} },
 *                 { date: "2019-06-13", usage: { mapMyRun: 0, whatsApp: 0, facebook: 0, safari: 16} },
 *                 { date: "2019-06-14", usage: { mapMyRun: 0, whatsApp: 0, facebook: 0, safari: 31} },
 *                ]
 *   },
 * ]
 *
 * The function should return an array of usernames of users who have used more than 100 minutes of screentime for a given date.
 * The date will be provided in the format "2019-05-04" (YYYY-MM-DD)
 * For example, if passed the above users and the date "2019-05-04" the function should return ["beth_1234"] as she used over 100 minutes of screentime on that date.
 * @param {Array} users
 */
const getScreentimeAlertList = (users, date) => {
  if (users === undefined) throw new Error("users is required");
  if (date === undefined) throw new Error("date is required");
  let stime = [];
  let sdate = "";
  let sumOfScreenTime = 0;
  let userName = "";

  for(let m in users){
    for(let q in users[m].screenTime){
      sdate = (Object.values(users[m].screenTime[q].date)).join('');
      if (sdate === date){
        stime = Object.values(users[m].screenTime[q].usage);
        userName = users[m].username;
        for(let r=0; r<stime.length; r++){
          sumOfScreenTime += stime[r];
        }
        if(sumOfScreenTime < 100)
          userName = "";
      }
    }
  }
  return ([userName]);
};

/**
 * This function will receive a hexadecimal color code in the format #FF1133. A hexadecimal code is a number written in hexadecimal notation, i.e. base 16. If you want to know more about hexadecimal notation:
 * https://www.youtube.com/watch?v=u_atXp-NF6w
 * For colour codes, the first 2 chars (FF in this case) represent the amount of red, the next 2 chars (11) represent the amound of green, and the last 2 chars (33) represent the amount of blue.
 * Colours can also be represented in RGB format, using decimal notation.
 * This function should transform the hex code into an RGB code in the format:
 * "rgb(255,17,51)"
 * Hint: You will need to convert each hexadecimal value for R, G and B into its decimal equivalent!
 * @param {String} str
 */
const hexToRGB = hexStr => {
  if (hexStr === undefined) throw new Error("hexStr is required");
  let hexConverted = [];
  let hexArray = [];
  for(let i=1; i<hexStr.length; i+=2){
    for(let j=i; j<i+1; j++){
      hexArray.push([hexStr.substr(j,2)]);
    }
  }
  for(let k=0; k<hexArray.length; k++){
    hexConverted.push(parseInt(hexArray[k], 16));
  }
  return ("rgb(" + hexConverted.toString() + ")");
};

/**
 * This function takes a noughts and crosses board represented as an array, where an empty space is represented with null.
 * [
 *  ["X", "0", null],
 *  ["X", null, "0"],
 *  ["X", null, "0"]
 * ]
 * The function should return "X" if player X has won, "0" if the player 0 has won, and null if there is currently no winner.
 * @param {Array} board
 */
const findWinner = board => {
  if (board === undefined) throw new Error("board is required");
  let xCount = 0;
  let zCount = 0;
  let winnerFound = "null";
//check row
  for(let i=0; i<board.length;i++){
    xCount = 0;
    zCount = 0;
    for(let j=0; j<board[i].length;j++){
      if(board[i][j] === "X")
        xCount += 1;

      if(board[i][j] === "0")
        zCount += 1;
    }
    if(xCount === 3)
      winnerFound = "X";
    else if (zCount === 3)
      winnerFound = "0";
  }

//check column
  if(winnerFound === "null"){
    for(let i=0; i<board.length;i++){
      xCount = 0;
      zCount = 0;
      for(let j=0; j<board[i].length;j++){
        if(board[j][i] === "X")
          xCount += 1;
        if(board[j][i] === "0")
          zCount += 1;
      }
      if(xCount === 3)
        winnerFound = "X";
      else if (zCount === 3)
        winnerFound = "0";
    }
  }
//check diagonal
  if(winnerFound === "null"){
    xCount = 0;
    zCount = 0;
    for(let i=0; i<board.length;i++){
      for(let j=0; j<board[i].length;j++){
        if(board[i][j] === "X" && i === j)
          xCount += 1;
        if(board[i][j] === "0" && i === j)
          zCount += 1;
      }
      if(xCount === 3)
        winnerFound = "X";
      else if (zCount === 3)
        winnerFound = "0";
    }
  }
//diagonal check
  let len = board.length;
  if(winnerFound === "null"){
    xCount = 0;
    zCount = 0;
    for(let i=0; i<board.length;i++){
      for(let j=0; j<board[i].length;j++){
        if(board[i][j] === "X" && i+j === len-1)
          xCount += 1;
        if(board[i][j] === "0" && i+j === len-1)
          zCount += 1;
      }
      if(xCount === 3)
        winnerFound = "X";
      else if (zCount === 3)
        winnerFound = "0";
    }
  }
  return (winnerFound);
};

module.exports = {
  sumDigits,
  createRange,
  getScreentimeAlertList,
  hexToRGB,
  findWinner
};
