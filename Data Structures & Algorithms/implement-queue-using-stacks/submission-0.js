class MyQueue {
    constructor() {
        this.stack1 = []
        this.stack2 = []
    }

   
    push(x) { 
        this.stack1.push(x)
        
    }

    pop() {
        if (this.stack2.length == 0){
            while (this.stack1.length > 0){
                this.stack2.push(this.stack1.pop())
            }
        }
      return this.stack2.pop()
        
    }

     
    peek() {
          if (this.stack2.length == 0){
            while (this.stack1.length > 0){
                this.stack2.push(this.stack1.pop())
            }
        }
        return this.stack2[this.stack2.length-1]

    }

    
    empty() {
        return this.stack1.length == 0&& this.stack2.length == 0;
    }
}
var obj = new MyQueue()
obj.push(1)
obj.push(3)
obj.push(5)

var param_2 = obj.pop()
var param_3 = obj.peek()
var param_4 = obj.empty()
console.log(param_2)
console.log(param_3)
console.log(param_4)

 

