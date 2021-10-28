// add whatever parameters you deem necessary
function sameFrequency(int1, int2) {
  const freq1 = digitCount(int1);
  const freq2 = digitCount(int2);

  for (let key of Object.keys(freq1)){
    if (freq1[key] != freq2[key]) return false;
  }
  return true;
}

function digitCount(int){
  let arr = int.toString().split("");
  let intCount = {};
  for (let letter of arr){
    intCount[letter] = intCount[letter] + 1 || 1;
  }
  return intCount;
}

module.exports = { sameFrequency };