// some content
//     *
//    **
//   ***
//  ****
// *****

let n = 5;
for (let i = 0; i < n; i++) {
  let str = "";
  for (let j = 0; j < n; j++) {
    if (j >= n - (i + 1)) {
      str = str + "*";
    } else {
      str = str + " ";
    }
  }
  console.log(str);
}
