class Solution {
    /**
     * @param {string[]} logs
     * @return {number}
     */
    minOperations(logs) {
        let count = 0;
    
    for (let i in logs){
          if ( logs[i] == "../"){
            if (count > 0){
                count--;
            }
              
          } else if(logs[i] == "./" ){
                count;
          }else{
            count++;
          }
    }
    return count;
    }
}
let solution = new Solution();
console.log(solution.minOperations(["d1/","d2/","../","d21/","./"]))
