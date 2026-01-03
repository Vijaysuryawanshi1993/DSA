// given an interger sorted array remove duplicates in place such that each element appear only once.
function removeDuplicates(nums) {
  let index = 0;
  for (let i = 1; i < nums.length; i++) {
    if (nums[index] !== nums[i]) {
      nums[index + 1] = nums[i];
      index++;
    }
  }
  return index + 1;
}

let nums = [1, 2, 2, 3, 4, 4, 4, 4, 5, 6, 6, 7];
console.log(removeDuplicates(nums));
