class MyStack {
    constructor() {
        this.q1 = [];
        this.q2 = [];
    }

    
    push(x) {
        this.q2.push(x);

        while ( this.q1.length > 0){
            this.q2.push(this.q1.shift());
        }

        let temp = this.q1;
        this.q1 = this.q2;
        this.q2 = temp;
    }

    pop() {
        return this.q1.shift();
    }

    
    top() {
        return this.q1[0];
    }

    
    empty() {
        return this.q1.length == 0;
    }
}


 var obj = new MyStack()
 obj.push(1);
 obj.push(2);
 var param_2 = obj.pop()
 var param_3 = obj.top()
 var param_4 = obj.empty()
 console.log(param_2)
 console.log(param_3)
 console.log(param_4)

 
