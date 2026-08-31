class MinStack {
    constructor() {
        this.stack1 = []
    }

   
    push(val) {
        this.stack1.push(val);
    }

  
    pop() {
        return this.stack1.pop()
    }

   
    top() {
        
        return this.stack1[this.stack1.length - 1];
    }


    getMin() {
         if (this.stack1.length == 0){
            return 0
        }
        let min = this.stack1[0]
        
       for (let i=0; i<this.stack1.length ;i++){
            if (this.stack1[i] < min){
                min = this.stack1[i]
            }
        }
        return min
    }
}
let minStack = new MinStack();
minStack.push(1);
minStack.push(2);
minStack.push(0);
let minNUM = minStack.getMin(); 
let dlt = minStack.pop();
let top = minStack.top();    
let getmin = minStack.getMin(); 
console.log(minNUM)
console.log(dlt)
console.log(top)
console.log(getmin)


