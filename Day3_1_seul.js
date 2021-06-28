// 혼자서 하다가 너무 어려워서.. 석영님과 같이 작업했습니다. 

function Queue() {

    var items = [];

    this.enqueue = function (element) {
        items.push(element);
    };

    this.dequeue = function () {
        return items.shift();
    };

    this.front = function () {
        return items[0];
    };

    this.isEmpty = function () {
        return items.length == 0;
    };

    this.size = function () {
        return items.length;
    };

    this.print = function () {
        console.log(items.toString());
    };
}




function hotPotato(user, boom) {

    var queue = new Queue(); 

    for (var i = 0; i < user.length; i++) {            
        queue.enqueue(user[i]);                        
    }

    var loser = '';
    while (queue.size() > 1) {
        for (var i = 0; i < boom; i++) {
            queue.enqueue(queue.dequeue()); 

        }
        loser = queue.dequeue(); 
        console.log(loser + ' was loser from the Hot Potato game.');
    }

    return queue.dequeue();
}



names = ['John', 'Jack', 'Camila', 'Ingrid', 'Carl'];
winner = hotPotato(names, 4);

console.log('\n' + 'The winner is:' + winner );
