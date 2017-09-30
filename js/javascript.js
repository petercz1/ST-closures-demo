function greeting(message) {
   return function(name){
        return message + ' ' + name;
   }
}
var sayHi = greeting('Hi');
console.log(sayHi);

var sayHello = greeting('Hello');
console.log(sayHello);


console.log(sayHi('John')); // Hi John
console.log(sayHello('John')); // Hello John