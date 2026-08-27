class Solution {
   
    calPoints(operations) {let newArray = [];
    let sum = 0
    

    for (let i in operations){

        if(operations[i] == "+"){
            let lastIndex = newArray[newArray.length -1];
            let scndlstdInd = newArray[newArray.length -2];
            let sum = lastIndex + scndlstdInd;
            
            newArray.push(sum);
        }else if (operations[i] == "C"){
            newArray.pop();
        } else if(operations[i] == "D"){
            let lastIndex = newArray[newArray.length -1];
            newArray.push(Number(lastIndex * 2)) ;
        } else {
            newArray.push(Number(operations[i]));
        }
       
    } 

    for (let i in newArray){
       sum += newArray[i]
    }
    return sum;}
}
let solution = new Solution();
console.log(solution.calPoints(["1","2","+","C","5","D"]))