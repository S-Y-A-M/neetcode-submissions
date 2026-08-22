class Solution {
    
    validWordAbbreviation(word, abbr) {
        let i = 0; 
    let j = 0; 

    while (i < word.length && j < abbr.length) {

       
        if (isNaN(abbr[j])) {

            if (word[i] !== abbr[j]) {
                return false;
            }

            i++;
            j++;
        }

        
        else {

            
            if (abbr[j] === '0') {
                return false;
            }

            let num = 0;

            
            while (j < abbr.length && !isNaN(abbr[j])) {
                num = num * 10 + Number(abbr[j]);
                j++;
            }

            
            i += num;
        }
    }

    return i === word.length && j === abbr.length;
    }
}
const solution = new Solution();
console.log(solution.validWordAbbreviation("apple","a3e"))
