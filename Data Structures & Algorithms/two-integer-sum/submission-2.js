class Solution {
    twoSum(nums, target) {

        const map = {};

        for (let i = 0; i < nums.length; i++) {

            let need = target - nums[i];

            if (map[need] !== undefined) {
                return [map[need], i];
            }

            map[nums[i]] = i;
        }

        return null;
    }
}

const obj = new Solution();
console.log(obj.twoSum([2,7,11,15], 9));
