interface person{
    name : string;
    age : number;
}

const friends1:person[] = [
    {name : 'John', age : 30}, 
    {name : 'Ana', age : 20}, 
    {name : 'Chris', age : 25}
]


compareFriends1()


function compareFriends1() {
    friends1.sort(
        function(a, b){
            return a.age - b.age
        }
    )
    console.log(friends1)
}
