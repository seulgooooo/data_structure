var friends = [
    {name : 'John', age : 30}, 
    {name : 'Ana', age : 20}, 
    {name : 'Chris', age : 25}
]

compareFriends()
function compareFriends(){
    for(j = 0; j < friends.length - 1; j++ ) {
        for(i = 0; i < friends.length -1-j; i++) {
            if(friends[i].age > friends[i + 1].age ) {
                var temp;
                temp = friends[i + 1]
                friends[i + 1] = friends[i]
                friends[i] = temp
            }
        }
    }
    for(i = 0; i < friends.length; i++) {
        console.log(friends[i]);
    }
}
