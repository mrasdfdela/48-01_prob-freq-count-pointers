// takes in two strings and checks whether the characters in the first string form a subsequence of the characters in the second string
function isSubsequence(str1, str2) {
  if (str1.length > str2.length) return false;
  let [idx1, idx2] = [0, 0];
  while (idx1 < str1.length && idx2 < str2.length){
    if (str1[idx1] === str2[idx2]) idx1++;
    idx2++;
  }

  return idx1 === str1.length ? true : false;
}

module.exports = { isSubsequence };