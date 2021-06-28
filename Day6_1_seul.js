

function Dictionary(){
    var items = {};
   
  
    // 새 항목 (key, value) 추가
   this.set = function(key, value){
    items[key] = value;
   };
  
  
   // key로 확인한 후 key, value 삭제
   this.remove = function(key){
    if (this.haskey(key)){
    delete items[key];
    return true;
    }
    return false;
   };
  
  
   // boolean 값 반환
   this.haskey = function(key){
    return key in items;
   };
   
  
    // key로 검색한 특정 value을 반환 
   this.get = function(key) {
    return this.haskey(key) ? items[key] : undefined;
   };
  
  
   // 모든 value 반환
   this.values = function(){
    var values = [];
    for (var k in items) {
        if (this.haskey(k)) {
            values.push(items[k]);
            }
        }
    return values;
   };
  
  
   // 모든 key 반환
   this.keys = function(){
    return Object.keys(items);
   };
  
  
   // 모든 key, value 반환
   this.getItems = function(){
    return items;
   }
  
  
   // Dictionary의 개수 반환
   this.size = function(key) {
       var count = 0;
       for(var key in items){
           count++;
       }
       return count
   }
  
  
  
   // Dictionary에 포함된 모든 key, value 값을 반환
   this.forEach = function(key, value) {                                //size에서는 key가 불러와지는데 왜 여기서는
       console.log('forEach: ', `key: ${key}, value: ${value}`);        // 안되는 건지 안됩니다...
   }
  }
  
  
  
  
  var dictionary = new Dictionary();
  
  // 6-3 출력
  dictionary.set('Gandalf', 'gandalf@email.com');
  dictionary.set('John', 'johnsnow@email.com');
  dictionary.set('Tyrion', 'tyrion@email.com');
  
  
  console.log(dictionary.haskey('Gandalf'));
  console.log(dictionary.haskey('John'));
  console.log(dictionary.size());
  console.log(dictionary.keys());
  console.log(dictionary.values());
  console.log(dictionary.get('Tyrion'));
  
  console.log(dictionary.remove('John'));
  console.log(dictionary.keys());
  console.log(dictionary.values());
  console.log(dictionary.get('Tyrion'));
  
  console.log(dictionary.forEach());                  // 에러발생ㅜㅜ
  
  

  
  
  /* 
  6-5 dictionary가 앞으로의 작업에서 중요하다고 생각하는 이유
  1. key로 접근하기 때문에 원하는 값을 빠르게 찾을 수 있고 생각됩니다.
  2. key와 value로 연결되어 있어서 관리하기가 쉬울 것 같다.
  3. key만 입력하면 돼서 타이핑이 줄어든다...? 혹은 코드가 줄지 않을까요?
    
*/