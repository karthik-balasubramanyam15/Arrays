//1,2,3,4,5,6,7 & 3 => 1,2,3,4,5,6,7,1,2,3,4,5,6,7

var rotate1 = function (nums, k) {
    return nums.concat(nums).slice(k + 1, k + 1 + nums.length);
};

var rotate = function (nums, k) {

    var reverse = function (nums, start, end) {
        while (start < end) {
            var temp = nums[start];
            nums[start] = nums[end];
            nums[end] = temp;
            start++;
            end--;
        }
    }

    k = k % nums.length
    reverse(nums, 0, nums.length - 1)
    reverse(nums, 0, k - 1)
    reverse(nums, k, nums.length - 1)

    return nums;
};

console.log(rotate([1, 2, 3, 4, 5, 6, 7], 3))