class Solution {
    
    mergeAlternately(word1, word2) {
         let NewWord = ""
         let i = 0;
         let j = 0;

    while ( i < word1.length && j < word2.length){
         
        NewWord += word1[i]
        NewWord += word2[j]
        i++;
        j++;
    }

    while(i<word1.length){
        NewWord += word1[i]
        i++;
       
    }
    
    while(j<word2.length){
        NewWord += word2[j]
        j++;
    }


    return NewWord
            
    }
}
let solution = new Solution()
console.log(solution.mergeAlternately("abc","xyz"))
