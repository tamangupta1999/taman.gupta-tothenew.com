// Q1. Create a hierarchy of person, employee and developers. 
//Code  -
console.log('Q.1 Create a hierarchy of person, employee and developers. ')
//  This is main class or constructor
function person(name){
    this.name = name;
}
var obj = new person("akash")
console.log(obj)

//  Employee is inheriting name from person
function employee(name,id){
    person.call(this,name)
    this.id = id;
}
var empObj = new employee("john", 4154)
console.log(empObj)
//  Developers is inheriting name and id from employee.
function developers(name,id,competency){
    employee.call(this,name,id) 
    this.competency = competency;
}
//  Creating object of developers
var obj1 = new developers('Taman',4154,'MEAN');
console.log(obj1);


//  Q3. Explain difference between Bind and Call (example).
// Answer - The Bind() method create a new function and sets this keyword to the specified object 

//  example-
//   var person = {
//       name :'Taman',
//       display :function(){
//           console.log(this.name);
//       }
//   };

// var p = person.display; // this will print nothing

// but if we bind this object then it will print name   

// p = p.bind(person)
// p()

// Call()-Function.call takes a context parameter as the first argument: 
// anything passed here is accessible using this inside the function body.

// example - 
// var sayHello = function (greeting) {
//     greeting = greeting || 'Hello'; 
//     console.log(greeting, this.name);
//   };
  
//   var abhi = {name: 'Abhishek'};

//   sayHello.call(abhi); // Hello Abhishek
//   var varun = {name: 'Varun'};

//   sayHello.call(varun); // Hello Abhishek



// Q4. Explain 3 properties of argument object.
// Answer - 
// arguments is an Array-like object accessible inside 
// functions that contains the values of the arguments passed to that function.

// For example, if a function is passed 3 arguments, you can access them as follows:

// arguments[0] // first argument
// arguments[1] // second argument
// arguments[2] // third argument

//  Properties Of Argument Object 

//1.arguments.callee---callee is a property of the arguments object. 
// It can be used to refer to the currently executing function inside the function body of that function.
//  This is useful when the name of the function is unknown, such as within a function expression with no name
//  (also called "anonymous functions").

// 2.The initial value of the @@iterator property is the same 
// function object as the initial value of the Array.prototype.values property.

// 3. arguments.length --- The arguments.length property contains the number of arguments passed to the function.



//Q5. Create a function which returns number of invocations and number of instances of a function.
console.log('Q5. Create a function which returns number of invocations and number of instances of a function.')

function abc(){
    abc.totalInvokation +=1;
    if(this!=window){
    this.__proto__.instanceCounter+=1;
    }
}
abc.prototype.instanceCounter = 0;
abc.totalInvokation = 0;


abc()
abc()
abc()
console.dir(abc)
var  a = new abc();
console.dir(a)
var  b = new abc();

console.log(`Invocation: ${abc.totalInvokation-abc.prototype.instanceCounter}   Instance: ${abc.prototype.instanceCounter}`);





//Q6. Create a counter using closures.
console.log('Q6. Create a counter using closures.')
function counter() {
    var count =0;
    function insideCount(){
        count += 1;  
        return count;      
    }
    return insideCount;
}

var a = counter();
a();
a();
a();
console.log('Counter ' + a()) //counter 4



// Q7. Explain 5 array methods with example.
// Answer - 

// 1. Array.sort(); - This method is use to sort array in assending order.

// Example-

// var demoArray = [42,52,46,12,84,35,75];
// console.log(unSortedArray.sort());

// Sorted Array - [ 12, 35, 42, 46, 52, 75, 84 ]


// 2. Array.shift(); - This method will pop one value from the begning of the array.

// demoArray.shift();
// console.log(demoArray)
// After Shifting ----- [ 52, 46, 12, 84, 35, 75 ]

// 3. Array.unshift(); - This method will push one value at the begning of the array.
// demoArray.unshift(15)
// console.log(demoArray)
// After Unshifting ------ [ 15, 42, 52, 46, 12, 84, 35, 75 ]

// 4. Array.push(); - This method will push one element at the end of the array.

// demoArray.push(24);
// console.log(demoArray)
//  After Pushing 24 ------ [ 42, 52, 46, 12, 84, 35, 75, 24 ]


// 5. Array.pop(); - This method will pop one element from the end of the array.

// demoArray.pop();
// console.log(demoArray)
//  After Pop  ------ [ 42, 52, 46, 12, 84, 35, 75]



// Q2. Given an array, say [1,2,3,4,5]. Print each element of an array after 3 secs.
console.log('Q2. Given an array, say [1,2,3,4,5]. Print each element of an array after 3 secs.')
// Code - 

var demoArray = [1,2,3,4,5];
function value(i){
    if(i>demoArray.length-1){
        return;
    }
    console.log(demoArray[i])
    setTimeout(() => {
        value(i+1)
    }, 3000);
}

value(0);