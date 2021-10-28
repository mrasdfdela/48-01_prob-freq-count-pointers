// accepts an array of integers, and returns the length of the longest consecutive decrease of integers
function longestFall(arr) {
  let [idxLast, idxCurr] = [0,1];
  let longest = 1;
  if (arr.length<=1) return arr.length;
  while (idxCurr < arr.length){
    if (arr[idxCurr] < arr[idxCurr-1]) {
      let diff = idxCurr - idxLast + 1;
      longest = diff > longest ? diff : longest;
    } else {
      idxLast = idxCurr;
    }
    idxCurr++;
  }
  return longest;
}

module.exports = { longestFall };