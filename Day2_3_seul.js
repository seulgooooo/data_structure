class Stack {                                           // stack Class 생성
    constructor() {
      this.arr = [];
    }
    push(item) {
      this.arr.push(item);
    }
    pop() {
      return this.arr.pop();
    }
    peek() {
      return this.arr[this._arr.length - 1];
    }
    size() {
        return this.arr.length;
    }
  }
  

a = decimalToBinary(233)                              // 출력
console.log(a.arr)
a = decimalToBinary(10)
console.log(a.arr)
a = decimalToBinary(1000)
console.log(a.arr)


function decimalToBinary(num){                        // 함수생성
    const stack1 = new Stack;                         // stack(push)을 쓰겠다고 할당
    while(num >= 2) {                                 // num이 2보다 크거나 같을 동안
        var res = num % 2                             // num % 2의 값을 res에 담고 
        stack1.push(res);                             // stack에 res의 값을 넣어라
        num = (num - res) / 2                         // 그 후에 원래의 num에서 res값을 빼고
    }                                                 // 2를 나눈 값을 다시 num으로 바꿔라
    stack1.push(num)                                  // num의 값을 stack에 넣고 
    const stack2 = new Stack;                         // stack(pop)을 쓰겠다고 할당
    var sie = stack1.size()                           // stack의 크기는 sie에 넣고
    for(i = 0; i < sie; i++){                         // sie에서 다 떨어질 때까지
        stack2.push(stack1.pop())                     // 끝에서 부터 꺼내라
    }
    return stack2
 }
