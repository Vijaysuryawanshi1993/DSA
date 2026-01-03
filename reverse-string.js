function reverseStr(str) {
  let x = str.length - 1;
  for (let i = 0; i < str.length; i++) {
    if (i >= x) {
      break;
    }
    let ele = str[i];
    str[i] = str[x];
    str[x] = ele;
    x--;
  }
  return str;
}

let s = ["h", "e", "l", "l", "o"];
console.log(reverseStr(s));
