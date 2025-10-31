function reverseNumber(n) {
  nCopy = n;
  n = Math.abs(n);
  rev = 0;
  while (n > 0) {
    let last = n % 10;
    rev = rev * 10 + last;
    n = Math.floor(n / 10);
  }

  let limit = 2 ** 31;
  if (rev < -limit || rev > limit - 1) {
    return 0;
  }

  return nCopy < 0 ? -rev : rev;
}
