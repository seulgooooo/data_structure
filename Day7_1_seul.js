// 1-2
//HashTable과 Dictionary의 특징 중 공통점과 차이점
// 공통점 : 둘 다 키, 값 쌍으로 데이터를 보유한다.
// 차이점 : HashTable는 특정 자료형 뿐만 아니라 여러 자료형을 담을 수 있다. 
//          하지만 Dictionary는 선언한 자료형에 맞춰서 데이터를 삽입해야 한다.
//          딕셔너리는 요소를 검색하면 삽입된 순서가 유지된다. 
//          딕셔너리는 최소한의 메모리를 소비하고 HashTable 보다 빠르다. 



class HashTable {
    constructor() {
      this.table = [];                                          // 테이블 배열 생성
    }
  
    // 주소값 반환
    hashKey(key) {
      let hash = 0;
      for (let index = 0; index < key.length; index++) {
        hash += key.charCodeAt(index);
      }
      return hash % 15000;
    }
  
    // key를 이용하여 value 출력
    get(key) {
      let address = this.hashKey(key);
      return this.table[address];
    }
  
    // 테이블에 입력
    put(key, value) {
      let address = this.hashKey(key);
      this.table[address] = value;
    }
  
    // key로 해당 테이블에서 value 삭제
    remove(key) {
      let address = this.hashKey(key);
      if (this.table[address]) {
        delete this.table[address];
      }
    }
  
    // 2-3 toString() 메서드의 구조를 확인하고, 필사하기
    // table의 key, value 출력
    toString() {
        for(var i = 0; i <= this.table.length; ++i) {           // i가 table의 길이보다 작거나 같을 동안
            if (this.table[i] !== undefined) {                  // table의 i값이 undefined가 아니라면
                console.log(i + " : " + this.table[i]);         // table 배열에서 하나씩 출력하라
            }
        }
    }
    
  }
  
  const hash = new HashTable();
  
  hash.put('Ygritte', 'ygritte@email.com');
  hash.put('Jonathan', 'jonathan@email.com');
  hash.put('Jamie', 'jamie@email.com');
  hash.put('Jack', 'jack@email.com');
  hash.put('Jasmine', 'jasmine@email.com');
  hash.put('Jake', 'jake@email.com');
  hash.put('Nathan', 'nathan@email.com');
  hash.put('Athelstan', 'athelstan@email.com');
  hash.put('Sue', 'sue@email.com');
  hash.put('Aethelwulf', 'aethelwulf@email.com');
  hash.put('Sargeras', 'sargeras@email.com'); 
  
  // 2-2 hash tabble 주소 출력
  console.log('hash table address:',hash.hashKey('Jack'));
  console.log('value :', hash.get('Jack'), ' / address : ',hash.hashKey('Jack'));
  
  
  
  
  // 2-4 hashTable의 value및 table 주소값을 출력
  console.log('*******************************************')
  hash.toString();
  
  
  