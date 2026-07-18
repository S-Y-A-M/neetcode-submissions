class Solution {
    
    hasDuplicate(nums){
        const dup = []

        for (let i=0; i<nums.length;i++){
            if (dup.includes(nums[i])){
                return true
            }
            dup.push(nums[i])

        }
        return false
    }
}
const obj = new Solution();
console.log(obj.hasDuplicate( [1, 2, 3, 3]))
