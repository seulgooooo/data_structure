// ListNode 생성
class ListNode{
    constructor(current){
        this.current = current;
        this.next = null;
    }
  }
  
  
  class List {
    constructor() {
        this.head = null;
    }
  
    // node에 추가
    // @param 추가할 숫자
    // @return 숫자가 추가된 node
    push(val){
        var node = new ListNode(val)
        if(this.head == null){                     
            this.head = node                        
        }
        else{                                  
            var tempnext = this.head;             
            while(tempnext.next !== null) {    
                tempnext = tempnext.next;       
            }
            tempnext.next = node;               
        }
    }
  
  
    // 원하는 자리에 추가 (끼워넣기)
    // @param 추가할 위치, 숫자
    // @return 변한 node
    insert(num, val) {
        var node = new ListNode(val)
        if (this.head == null) {                         
            return  
        }
        else{
            if (num == 0) {
                var tempnode =  this.head.next
                this.head = node
                node.next = tempnode.next
            }
            else {
                num--;
                var tempnext = this.head;               
                while(tempnext.next !== null) {
                    num--;
                    if (num <= 0) {
                        break;
                    }    
                    tempnext = tempnext.next;       
                }
                var tempnnext = tempnext.next
                tempnext.next = node;
                node.next = tempnnext
            }   
        }   
    }
  
  
    // node의 갯수 반환
    // @return node의 갯수
    size() {                      
        var count = 1;
        if (this.head == null) {                     
            return 0;                                
        }
        else {                                     
            var tempnext = this.head;               
            while(tempnext.next !== null) {
                count++;
                tempnext = tempnext.next;
            }
            return count;                      
        }
    }
  
  
    // 원하는 위치의 value 반환
    // @param 보고싶은 위치
    // @return num 위치의 value
    getElementAt(num) { 
        if (this.head == null) {                        
            return null;                           
        }
        else {
            var tempnext = this.head;                        
            while(tempnext.next !== null) {       
                num--;                             
                if(num <= 0){                      
                    return tempnext.current         
                }
                tempnext = tempnext.next;          
            }
            return tempnext.current               
        }
    }
  
  
  
    // 원하는 노드의 value 반환
    // @param 궁금한 node
    // @return node의 value 
    indexOf(num) { 
        if (this.head == null) {                       
            return null;                           
        }
        else {
            var tempnext = this.head;                        
            while(tempnext.next !== null) {         
                num--;                              
                if(num <= 0){                       
                    return tempnext                 
                }
                tempnext = tempnext.next;          
            }
            return tempnext                        
        }
    }
  }
  
  
  
  // node 전체값 출력
  // @param 출력할 node
  // @return node의 value
  function printlist(list) {
    var num = list.size()
    for(i = 1; i <= num; i++){
        console.log(list.getElementAt(i))
    }
  }
  
  
  
  // ------------------------------------------ II. Linked Lists Basic 
  list1 = new List();
  list1.push(4);
  list1.push(7);
  list1.push(8);
  list1.push(10);
  printlist(list1)
  
  // ------------------------------------------ III. Linked Lists Advanced
  list2 = new List();
  list2.push(1);
  list2.push(3);
  list2.push(4);
  list2.insert(2, 2);
  printlist(list2)
  