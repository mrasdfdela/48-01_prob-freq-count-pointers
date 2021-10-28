// The first array consists of keys and the second one consists of values. Your function should return an object created from the keys and values. If there are not enough values, the rest of keys should have a value of null. If there not enough keys, just ignore the rest of values.

function twoArrayObject(keyArr, valArr) {
  let newObj = {};
  for (let i=0; i<keyArr.length; i++){
    const currKey = keyArr[i];
    newObj[currKey] = valArr[i] || null;
  }
  return newObj;
}

module.exports = { twoArrayObject };