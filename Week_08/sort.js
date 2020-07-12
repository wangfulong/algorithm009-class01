

let nums = [3, 44, 2, 58, 9, 1, 7 ,4, 6];
/**
 *  冒泡排序
 */

function bubbleSort(nums) {
  for (let i = 0; i < nums.length - 1; i++) {
    for (let j = i + 1; j < nums.length; j++) {
      if (nums[i] > nums[j]) {
        let temp = nums[i];
        nums[i] = nums[j];
        nums[j] = temp
      }
    }
  }
  console.log(nums);
}
// bubbleSort(nums)

function selectionSort(nums) {
  for (let i = 0; i < nums.length - 1; i++) {
    let minIndex = i;
    for (let j = i + 1; j < nums.length; j++) {
      if (nums[j] < nums[minIndex]) {
        minIndex = j;
      }
    }
    let temp = nums[i];
    nums[i] = nums[minIndex];
    nums[minIndex] = temp;
  }
  console.log(nums);
}

// selectionSort(nums);

function insertionSort(nums) {
  for (let i = 1; i < nums.length; i++) {
    let preIndex = i - 1;
    let curr = nums[i];
    while (preIndex >= 0 && nums[preIndex] > curr) {
      nums[preIndex + 1] = nums[preIndex];
      preIndex--;
    }
    nums[preIndex + 1] = curr;
  }
  console.log(nums)
}

// insertionSort(nums);
