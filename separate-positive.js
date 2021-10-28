// add whatever parameters you deem necessary
function separatePositive(arr) {
  let idx = 1;
  while(idx < arr.length) {
    if (arr[idx] > 0) {
      const moveEl = arr.splice(idx,1);
      arr.unshift(moveEl);
    }
    idx++;
  }
  return arr;
}

module.exports = { separatePositive };