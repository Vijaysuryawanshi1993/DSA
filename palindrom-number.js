// solven in leetcode

var isPalindrome = function (x) {
  if (x < 0) return false;
  let xCopy = x;
  let revX = 0;
  while (x > 0) {
    let last = x % 10;
    revX = revX * 10 + last;
    x = Math.floor(x / 10);
  }
  return xCopy === revX;
};
