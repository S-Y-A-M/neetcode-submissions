class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {boolean}
     */
    containsNearbyDuplicate(nums, k) {
      for (let i = 0; i < nums.length; i++){
        for (let j=i+1; j<nums.length; j++){
            if (nums[i]==nums[j]){
               let sub = Math.abs(i - j);
                if (sub<=k){
                    return true
                }
            }
        }
    }
    return false
    }
    
}
let solution = new Solution();
console.log(solution.containsNearbyDuplicate([1,2,3,1],3))