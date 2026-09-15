class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number}
     */
    minimumDifference(nums, k) {

    nums.sort((a, b) => a - b);

    let min = Infinity;

    for (let i = 0; i <= nums.length - k; i++) {
        let diff = nums[i + k - 1] - nums[i];

        if (diff < min) {
            min = diff;
        }
    }

    return min;
}
}
let solution = new Solution();
console.log(solution.minimumDifference([2,5,3,1,6,3],3))
