/**
 * @param {number[]} nums
 * @return {boolean}
 */
var containsDuplicate = function (nums) {
    for (let i = 0; i <= nums.length - 2; i++) {
        for (let j = i + 1; j <= nums.length - 1; j++) {
            if (nums[i] === nums[j]) return true
        }
    }
    return false
};

var containsDuplicate = function (nums) {
    nums = nums.sort()
    for (let i = 0; i <= nums.length - 1; i++) {
        if (nums[i] === nums[i + 1]) return true
    }
    return false
};

var containsDuplicate = function (nums) {
    let mappedValues = []
    for (let i = 0; i < nums.length; i++) {
        if (mappedValues.includes(nums[i])) return true;
        mappedValues.push(nums[i]);
    }
    return false;
};


