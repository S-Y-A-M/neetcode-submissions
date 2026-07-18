class Solution {

    isAnagram(s, t) {

        let count = {}

        if (s.length != t.length){
            return false
        }

         for ( let i of s){
            count[i] = (count[i] || 0) + 1;
         }

         for ( let j of t){

            if (!count[j]){
                return false
            }

            count[j]--;
            
         }
         return true;
    }
}
let isAnagram = new Solution()
console.log(isAnagram.isAnagram("racecar", "carrace" ))
console.log(isAnagram.isAnagram("jar", "jam" ))
console.log(isAnagram.isAnagram("xx", "x" ))


