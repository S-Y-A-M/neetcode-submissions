class Solution {
    /**
     * @param {string} blocks
     * @param {number} k
     * @return {number}
     */
    minimumRecolors(blocks, k) {
        let wcount = 0;

  
    for (let i = 0; i < k; i++) {
        if (blocks[i] === 'W') {
            wcount++;
        }
    }

    let minW = wcount;


    for (let i = k; i < blocks.length; i++) {

       
        if (blocks[i - k] === 'W') {
            wcount--;
        }

        
        if (blocks[i] === 'W') {
            wcount++;
        }

        minW = Math.min(minW, wcount);
    }

    return minW;
    }
}
let solution = new Solution();
console.log(solution.minimumRecolors("WBBWWBBWBW",7))
