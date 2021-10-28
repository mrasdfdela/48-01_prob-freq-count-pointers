// add whatever parameters you deem necessary
function constructNote(msg,letters) {
  const msgArr = letterCount(msg);
  const ltrArr = letterCount(letters);

  for (let k of msgArr.keys()) {
    if (!ltrArr.get(k)) return false;
    if (msgArr.get(k) > ltrArr.get(k)) return false;
  }
  return true;
}

function letterCount(str){
  const letters = str.split("");
  let frequencies = new Map();

  for (let el of letters) {
    let count = frequencies.get(el) || 0;
    frequencies.set(el, count+1);
  }
  return frequencies;
}

module.exports = { constructNote };
