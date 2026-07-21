class Solution {
    
    getConcatenation(nums) {

        const num=[]
    
    for (let n of nums){
        num.push(n) 
    }
     for (let n of nums){
        num.push(n)
     }
     
    return num
}
    }
let getConcat = new Solution();
console.log(getConcat.getConcatenation([1,3,5,8]))

