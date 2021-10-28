// Given an array of integers, and a number, find the number of pairs of integers in the array whose sum is equal to the second parameter. You can assume that there will be no duplicate values in the array.
function countPairs(arr,target) {
  const nums = numCounter(arr);
  let pairCounter = 0;
  for (let num of Object.keys(nums)){
    const otherNum = target - num;
    if (nums[otherNum]) pairCounter++;
  }
  return Math.floor(pairCounter/2);
}

function numCounter(arr){
  let counter = {};
  for (let el of arr) {
    counter[el] = 1;
  } 
  return counter;
}

module.exports = { countPairs };