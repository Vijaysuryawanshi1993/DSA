// Given an integer array nums and an integer val, remove all occurrences of val in nums in-place. The order of the elements may be changed. Then return the number of elements in nums which are not equal to val.

// Consider the number of elements in nums which are not equal to val be k, to get accepted, you need to do the following things:

function removeElement(nums, number) {
  let x = 0;
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] !== number) {
      nums[x] = nums[i];
      x++;
    }
  }
  return x;
}

let arr = [1, 2, 3, 4, 3, 6, 3, 9, 3, 7];

let num = removeElement(arr, 3);
console.log(num);
