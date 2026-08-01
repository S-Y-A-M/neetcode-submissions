class Solution {
    
    validPalindrome(s) {
        let rev1 = s.split("").reverse().join("")
    if (s==rev1){
        return true
    } else {
        for (let i=0;i<s.length;i++){
          let newStr = s.slice(0, i) + s.slice(i + 1);
           let rev2 = newStr.split("").reverse().join("")
           if (newStr==rev2){
                return true
           }
        }
        
        
    return false
    }
    }
}
const solution = new Solution()
console.log(solution.validPalindrome("aca"))
