class Solution { 
     
    merge(nums1, m, nums2, n) { 
        let newArray = [];
        let newSlice1 = nums1.slice(0, m);
        let newSlice2 = nums2.slice(0, n);

        for (let i = 0; i < newSlice1.length; i++) { 
            newArray.push(newSlice1[i]);
        }

        for (let j = 0; j < newSlice2.length; j++) { 
            newArray.push(newSlice2[j]);
        }

        let sortedArray = newArray.toSorted((a, b) => a - b);

        for (let i = 0; i < sortedArray.length; i++) {
            nums1[i] = sortedArray[i];
        }
        return nums1
    } 
}

let solution = new Solution();
console.log(solution.merge([10,20,20,40,0,0], 4, [1,2], 2));