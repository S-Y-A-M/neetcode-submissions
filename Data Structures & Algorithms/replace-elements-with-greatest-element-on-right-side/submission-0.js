class Solution {

    replaceElements(arr) {

        for (let i = 0; i < arr.length - 1; i++) {

            let max = arr[i + 1];

            for (let j = i + 2; j < arr.length; j++) {

                if (arr[j] > max) {
                    max = arr[j];
                }
            }
             arr[i] = max;
        }

        arr[arr.length - 1] = -1;

        return arr;
    }
}

const solution = new Solution();

console.log(solution.replaceElements([2,4,5,3,1,2]));