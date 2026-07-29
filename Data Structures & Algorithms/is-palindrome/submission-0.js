class Solution {

    isPalindrome(s) {

        s = s.toLowerCase();
        s = s.replace(/[^a-z0-9]/g, "");

        let rev_word = s.split('').reverse().join('');

        return s === rev_word;
    }
}

const solution = new Solution();

console.log(solution.isPalindrome("Was it a car or a cat I saw?"));