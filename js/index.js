// function foo(age){ 
//     alert(age); 
//     var age=80;  
//    alert(age);  
//    function age(){  
//      alert(age);  
//    }  
// }  
// foo(18)

Foo.prototype = {
  say: function () {
    console.log(this.name)
  },
  constructor: Foo
}
function Foo(name) {
  this.name = name
}

var b = new Foo("liu")
console.log(b.say())
console.log(Foo === Foo.prototype.constructor)