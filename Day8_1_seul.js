
// Separate chaining과 Linear probing의 차이
// Separate Chaining은 한 버킷당 들어갈 수 있는 엔트리의 수에 제한을 두지 않음으로써 모든 자료를 해시테이블에 담는 것이고
//  Linear Probing은 가장 가까운 빈 곳을 찾는 방법으로서 엔트르의 수에 제한을 둔다.





// HashTableSeparateChaining 클래스에 대해서 학습하고, 필사해서 코딩한후, 주석을 통해 각 라인의 의미를 설명하세요.

function LinkedList() {                                         // 링크드리스트라서 제외하겠습니다!

    var Node = function(element){
  
        this.element = element;
        this.next = null;
    };
  
    var length = 0;
    var head = null;
  
    this.append = function(element){
  
        var node = new Node(element),
            current;
  
        if (head === null){                                     
            head = node;
        } else {
  
            current = head;
  
            while(current.next){
                current = current.next;
            }
  
            current.next = node;
        }
  
        length++; 
    };
  
    this.insert = function(position, element){
  
        if (position >= 0 && position <= length){
  
            var node = new Node(element),
                current = head,
                previous,
                index = 0;
  
            if (position === 0){ 
  
                node.next = current;
                head = node;
  
            } else {
                while (index++ < position){
                    previous = current;
                    current = current.next;
                }
                node.next = current;
                previous.next = node;
            }
  
            length++; 
  
            return true;
  
        } else {
            return false;
        }
    };
  
    this.removeAt = function(position){
  
        if (position > -1 && position < length){
  
            var current = head,
                previous,
                index = 0;
  
            if (position === 0){
                head = current.next;
            } else {
  
                while (index++ < position){
  
                    previous = current;
                    current = current.next;
                }
  
                previous.next = current.next;
            }
  
            length--;
  
            return current.element;
  
        } else {
            return null;
        }
    };
  
    this.remove = function(element){
  
        var index = this.indexOf(element);
        return this.removeAt(index);
    };
  
    this.indexOf = function(element){
  
        var current = head,
            index = 0;
  
        while (current) {
            if (element === current.element) {
                return index;
            }
            index++;
            current = current.next;
        }
  
        return -1;
    };
  
    this.isEmpty = function() {
        return length === 0;
    };
  
    this.size = function() {
        return length;
    };
  
    this.getHead = function(){
        return head;
    };
  
    this.toString = function(){
  
        var current = head,
            string = '';
  
        while (current) {
            string = current.element;
            current = current.next;
        }
        return string;
  
    };
  
    this.print = function(){
        console.log(this.toString());
    };
  }
  
  
  // SeparateChaining 함수
  function HashTableSeparateChaining(){
  
    var table = [];
  
    var ValuePair = function(key, value){                               // key와 value 초기화
        this.key = key;                                                 // key 변수 생성
        this.value = value;                                             // value 변수 생성
  
        this.toString = function() {                                    // 키와 값 반환 함수
            return '[' + this.key + ' - ' + this.value + ']';          
        }
    };
  
    var loseloseHashCode = function (key) {                             // 해쉬값 생성 함수
        var hash = 0;
        for (var i = 0; i < key.length; i++) {
            hash += key.charCodeAt(i);                                  // hash에 문자값 합을 할등
        }
        return hash % 37;                                               // hash에서 37을 나눈 나머지값을 반환
    };
  
    var hashCode = function(key){
        return loseloseHashCode(key);
    };
  
    this.put = function(key, value){                                    // 키와 값 등록 함수
        var position = hashCode(key);                                 
        console.log(position + ' - ' + key);                            // 해쉬값과 키 출력
  
        if (table[position] == undefined) {                             // 만약 위치가 없으면
            table[position] = new LinkedList();                         // 할당시켜준다.
        }
        table[position].append(new ValuePair(key, value));              // 해당 위치에 키와 값을 넣어준다.
    };
  
    this.get = function(key) {                                          // 찾아서 출력하는 함수 
        var position = hashCode(key);                                   // 해시값으로 위치 생성
  
        if (table[position] !== undefined  && !table[position].isEmpty()){      // 만약 위치가 없거나 비어있다면
  
            var current = table[position].getHead();                     // 키와 값을 찾기 위해 리스트를 순회
  
            while(current.next){                                        
                if (current.element.key === key){                       // 검색하는 키와 위치의 키가 같으면 
                    return current.element.value;                       // 반환한다.
                }
                current = current.next;                                 // 없다면 다음으로 넘어가서 다시 검색한다
            }
  
            if (current.element.key === key){                           // 처음이거나 마지막 원소일 경우
                return current.element.value;                           // 반환
            }
        }
        return undefined;                                               // undefined 반환
    };
  
    this.remove = function(key){                                        // 삭제하는 함수
  
        var position = hashCode(key);                                   
  
        if (table[position] !== undefined){                             // 만약 비어있지 않으면
  
            var current = table[position].getHead();                    
  
            while(current.next){                                        // 넘어가며 검색한다.
                if (current.element.key === key){                       // 만약 겁색값과 같다면 
                    table[position].remove(current.element);            // 삭제한다 
                    if (table[position].isEmpty()){                     
                        table[position] = undefined;
                    }
                    return true;
                }
                current = current.next;                                 // 다음으로 넘어간다.
            }
  
            if (current.element.key === key){                           // 처음이나 마지막 원소일 경우
                table[position].remove(current.element);                // 삭제한다
                if (table[position].isEmpty()){
                    table[position] = undefined;
                }
                return true;
            }
        }
  
        return false;
    };
  
    this.print = function() {                                          // 출력 함수                  
        for (var i = 0; i < table.length; ++i) {                       // for문으로 길이만큼 반복
            if (table[i] !== undefined) {                              // undefined이 아니면
               console.log(i + '=>' +table[i].toString());             // 출력한다.     
            }
        }
    };
  }
  
  
  
  
  var hashTableSeparateChaining = new HashTableSeparateChaining();
  
  hashTableSeparateChaining.put('Gandalf', 'gandalf@email.com');
  hashTableSeparateChaining.put('John', 'johnsnow@email.com');
  hashTableSeparateChaining.put('Tyrion', 'tyrion@email.com');
  hashTableSeparateChaining.put('Aaron', 'aaron@email.com');
  hashTableSeparateChaining.put('Donnie', 'donnie@email.com');
  hashTableSeparateChaining.put('Ana', 'ana@email.com');
  hashTableSeparateChaining.put('Jonathan', 'jonathan@email.com');
  hashTableSeparateChaining.put('Jamie', 'jamie@email.com');
  hashTableSeparateChaining.put('Sue', 'sue@email.com');
  hashTableSeparateChaining.put('Mindy', 'mindy@email.com');
  hashTableSeparateChaining.put('Paul', 'paul@email.com');
  hashTableSeparateChaining.put('Nathan', 'nathan@email.com');
  
  
  
  // 4번의 출력 부분은 완성하지 못했습니다......
  hashTableSeparateChaining.print();
  
  
  
  
  
  
  
  // HashTableLinearProbing 클래스에 대해서 학습하고, 필사해서 코딩한후, 주석을 통해 각 라인의 의미를 설명하세요.
  
  const defaultToString = item => {                                                   
    if (item === null) {                                                        // 만약 item이null
      return 'NULL';                                                            // return값이 null이다
    } else if (item === undefined) {                                            // 만약 item이 undefined면
      return 'UNDEFINED';                                                       // return값이 undefined이다
    } else if (typeof item === 'string' || item instanceof String) {            // 만약 item의 자료형이나 속성이 문자열인 경우
      return `${item}`;                                                         // 리턴값으로 item 반환
    }
    return item.toString();                                                     // item의 값 반환
  }
  
  class ValuePair {                                                             
    constructor(key, value) {                                                   // key와 value 초기화
      this.key = key;                                                           // key 변수 생성
      this.value = value;                                                       // value 변수 생성
    }
    toString() {                                                                // tostring 함수 실행하고
      return `[#${this.key}: ${this.value}]`;                                   // key, value를 리턴
    }
  }
  
  class HashTable {                                                             // 해쉬테이블 클래스 생성
    constructor(toStrFn = defaultToString) {                                    // defaultToString를 toStrFn로 할당
      this.toStrFn = toStrFn;                                                   // toStrFn를 변수로 만들고
      this.table = {};                                                          // table 변수 생성
    }
  
    loseloseHashCode(key) {                                                     
      if (typeof key === 'number') {                                            // 만약 key가 숫자라면
        return key;                                                             // key를 리턴하고
      }
      const tableKey = this.toStrFn(key);                                       // toStrFn에서의 key값을 tablekey에 담는다
      let hash = 0;                                                             // hash는 0이고
      for (let i = 0; i < tableKey.length; i++) {                               // tablekey의 길이보다 작을동안 i를 증가시키는데
        hash += tableKey.charCodeAt(i);                                         // 비어있던 hash에 tablekey의  인덱스에있는 문자의 유니 코드를 더한다
      }
      return hash % 37;                                                         // 37로 나눈 난머지 값을  리턴한다.
    }
  
    hashCode(key) {                                                             
      return this.loseloseHashCode(key);                                        // key값을 반환한다.
    }
  
    put(key, value) {                                                           
      if (key != null && value != null) {                                       // 만약 key가 널이 아니면서 값도 널이 아니면
        const position = this.hashCode(key);                                    // position에 해쉬값이 할당되고
        if (this.table[position] == null) {                                     // 만약 position에 null이면
          this.table[position] = new ValuePair(key, value);                     // key와 value를 할당시킨다.
        } else {                                                                // 반대라면
          let index = position + 1;                                             // 인덱스는 위치에 1이 추가되고 
          while (this.table[index] != null) {                                   // 테이블의 index가 null이 아닐 때까지
            index++;                                                            // index에 1개씩 더해라 (옆으로 가라)
          }
          this.table[index] = new ValuePair(key, value);                        // table의 index에 key와 value를 할당시킨다
        }
        return true;                                                            // true를 반환
      }
      return false;                                                             // false 반환
    }
  
    get(key) {                                                                  
      const position = this.hashCode(key);                                      // position에 해쉬값이 할당되고
      if (this.table[position] != null) {                                       // 1. 만약 위치가 null이 아닌데    
        if (this.table[position].key === key) {                                 // 거기에 위치에서 키값까지 동일하다면
          return this.table[position].value;                                    // 우선 값을 가지고 온다..?
        }                                                                       // 
        let index = position + 1;                                               // 2. index에 위치를 하나 추가한다. 
        while (this.table[index] != null && this.table[index].key !== key) {    // 테이블의 인덱스값이 널이 아니면서 키가 같지 않을 때
          index++;                                                              // 인덱스에 1 추가한다
        }
        if (this.table[index] != null && this.table[index].key === key) {       // 3. 만약 위치에 널이 아닌데 키는 같다면 
          return this.table[position].value;                                    // 그 위치에 값을 넣어라
        }                                                                       // 우선 값을 가지고 온다...?
      }
      return undefined;                                                         // 위의 3가지 방법이 모두 안되면 undefined를 반환한다
    }
  
    remove(key) {       
      const position = this.hashCode(key);                                      // position에 해쉬값이 할당되고        
      if (this.table[position] != null) {                                       // 만약 위치에 널이 아니면서
        if (this.table[position].key === key) {                                 // key의 값이 맞다면
          delete this.table[position];                                          // 그 위치의 정보를 삭제한다
          this.verifyRemoveSideEffect(key, position);                           // verifyRemoveSideEffect 함수를 이용해서 주변에서 이 자리로 올 수 있는 값을 가져온다
          return true;                                                          // true를 반환한다
        }
        let index = position + 1;                                               // 인덱스는 위치의 다음자리고
        while (this.table[index] != null && this.table[index].key !== key) {    // 인덱스가 널이 아닌데 key값이 동일하지 않으면
          index++;                                                              // 인덱스에 +1을 해서 다시 while문을 돈다
        }
        if (this.table[index] != null && this.table[index].key === key) {       // 인덱스가 널이 아닌데 key값이 동일하다면
          delete this.table[index];                                             // 그 자리의 값을 지운다
          this.verifyRemoveSideEffect(key, index);                              // verifyRemoveSideEffect 함수를 이용해서 주변에서 이 자리로 올 수 있는 값을 가져온다
          return true;                                                          // true를 반환한다
        }
      }
      return false;
    }
                                                                                // 제자리로 돌아가는 함수
    verifyRemoveSideEffect(key, removedPosition) {                              // 지운것을 확인하고 옆에 영향이 있는지 확인하는 함수
      const hash = this.hashCode(key);                                          // hash에 해쉬값을 할당시킨다.
      let index = removedPosition + 1;                                          // index는 지워진 자리 옆자리
      while (this.table[index] != null) {                                       // index가 널이 아닐 동안에
        const posHash = this.hashCode(this.table[index].key);                   // posHash는 이미 지워진 옆자리의 해쉬값이
        if (posHash <= hash || posHash <= removedPosition) {                    // 만약 posHash가 hash보다 작으면서 같거나 지워진 자리의 해쉬값보다 작거나 같으면
          this.table[removedPosition] = this.table[index];                      // 옆자리에 있던 것을 원래의 key자리로 옮기고
          delete this.table[index];                                             // 제자리가 아니었던 자리의 값을 지워준다
          removedPosition = index;                                              // 인덱스를 지워진 자리(removedPosition)로 업데이트한다.(while문을 위해)
        }   
        index++;                                                                // 인덱스에 1을 더한다
      }
    }
  
    isEmpty() {
      return this.size() === 0;
    }
  
    size() {
      return Object.keys(this.table).length;
    }
  
    clear() {
      this.table = {};
    }
  
    getTable() {
      return this.table;
    }
  
    toString() {                                                                
      if (this.isEmpty()) {                                                     // 만약 비어있으면
        return '';                                                              // ' ' 반환
      } 
      const keys = Object.keys(this.table);                                     // 테이블의 값을 keys에 할당
      let objString = `{${keys[0]} => ${this.table[keys[0]].toString()}}`;      // 출력할 틀을 만들어두고
      for (let i = 1; i < keys.length; i++) {                                   // i를 key의 길이만큼 반복하는데
        objString = `${objString},{${keys[i]} => ${this.table[                  // 위에서 만들어둔 틀에 i를 대입해서 할당한다.
          keys[i]                                                               // key에서 i번째의 인덱스의 값을  tostring 함수를
        ].toString()}}`;                                                        // 이용하여 objString에 할당
      }
      return objString;                                                         // objString 반환
    }
  }
  
  var hashTableSeparateChaining = new HashTable();
  
  hashTableSeparateChaining.put('Ygritte', 'ygritte@email.com');
  hashTableSeparateChaining.put('Jonathan', 'jonathan@email.com');
  hashTableSeparateChaining.put('Jamie', 'jamie@email.com');
  hashTableSeparateChaining.put('Jack', 'jack@email.com');
  hashTableSeparateChaining.put('Jasmine', 'jasmine@email.com');
  hashTableSeparateChaining.put('Nathan', 'nathan@email.com');
  hashTableSeparateChaining.put('Athelstan', 'athelstan@email.com');
  hashTableSeparateChaining.put('Sue', 'sue@email.com');
  hashTableSeparateChaining.put('Aethelwulf', 'aethelwulf@email.com');
  
  
  //  5-1 
  console.log(hashTableSeparateChaining.toString())
  
  // 5-2 
  console.log(hashTableSeparateChaining.remove('Ygritte'));
  console.log(hashTableSeparateChaining.toString());
  