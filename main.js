//  Q.1 Filter unique array members using Set.



console.log('Q.1 Filter unique array members using Set.');
// ----------Code--------------

let valuedArray = [1, 3, 45, 42, 95, 25, 1, 52, 6, 5, 8, 45, 25, 36, 12, 45, 78, 52, 52, 95];
console.log(valuedArray);

let filteredValue = Array.from(new Set(valuedArray));
console.log(filteredValue);


// Q.2 Find the possible combinations of a string and store them in a MAP? 
function getPermutations(string) {

    let results = [];

    if(string.length === 1) {
        results.push(string);
        return results;
    }

    for (let index = 0; index < string.length; index++) {
        const firstChar = string[index];
        let charLeft = string.slice(0, index) + string.slice(index+1);
        let innerPermutations = getPermutations(charLeft);

        for (let j = 0; j < innerPermutations.length; j++) {
            results.push(firstChar + innerPermutations[j]);
        }
    }

    return results;
}

console.log('All possible combinations of string "abc"', getPermutations('abc'));




// Q.3  Write a program to implement inheritance upto 3 classes.The Class must  public variables and static functions.
console.log('Q.3  Write a program to implement inheritance upto 3 classes.The Class must  public variables and static functions.');
class Employee {
    empName;
    age;
    constructor(empName, age) {
        this.empName = empName;
        this.age = age;
    }

    static getDetails(empName, age) {
        console.log(`Name : ${empName}  Age : ${age}`)
    }

}

class Competency extends Employee {

    constructor(name, age, competency) {
        super(name, age);
        this.competency = competency;
    }

    static getDetailWithCompetency(name, age, competency) {
        console.log(`Name : ${name} Age : ${age} Competency : ${competency}`);
    }
}

class Id extends Competency {

    constructor(name, age, competency, id) {
        super(name, age, competency);
        this.id = id;
    }

    static getDetailWithId(name, age, competency, id) {
        console.log(`Name : ${name} Age : ${age} Competency : ${competency} Id : ${id}`)
    }
}
// Creating an object of a class by using constructor

let classEmployeeObj = new Employee('JOHN', 21);
console.log(classEmployeeObj)
let classCompetency = new Competency('DENIAL', 25, 'JVM');
console.log(classCompetency);
let classId = new Id('Smith', 40, 'AMC', 5215);
console.log(classId)

//Static Method call using Class Name
Employee.getDetails('taman', 21);
Competency.getDetailWithCompetency('akash', 23, 'FEEN', 25210);
Id.getDetailWithId('sakhs', 23, 'MEAN', 2351);



// Q.4 Write a program to implement a class having static functions
console.log('Q.4 Write a program to implement a class having static functions');
class StaticFunctionClass {

    static staticFunction() {
        console.log('This is a static function');
    }
}

StaticFunctionClass.staticFunction();


// Q.5 Import a module containing the constants and method for calculating area of circle, rectangle, cylinder.

// Please check src/index.js

// Q.6 Import a module for filtering unique elements in an array.

// Please check src/index.js

// Q.7 Write a program to flatten a nested array to single level using arrow functions.
console.log('Q.7 Write a program to flatten a nested array to single level using arrow functions.')

let unFlattenedArray = [[25, 65, 24], [85, 45, 67], 25, 45, [41, 6, 8]];
console.log('unFlattened Array : ', unFlattenedArray);
let flattenedArray = unFlattenedArray.reduce((acc, currVal) => acc.concat(currVal), []);

console.log('Flattened Array : ', flattenedArray);

// Q.8 Implement a singly linked list in es6 and implement addFirst() addLast(), length(), getFirst(), getLast(). (without using array)
console.log('Q.8 Implement a singly linked list in es6 and implement addFirst() addLast(), length(), getFirst(), getLast(). (without using array)');


class LinkedList {

    constructor() {
        this.head = null;
        this.tail = null;
        this.count = 0;
    }

    set addFirst(data) {

        const node = {
            data,
            next: null
        }

        const temp = this.head;

        this.head = node;
        this.head.next = temp;
        this.count++;

        if(this.count === 1) {
            this.tail = this.head;
        }

    }

    set addLast(data) {

        const node = {
            data,
            next: null
        }

        if(this.count === 0) {
            this.head = node;
        } else {
            this.tail.next = node;
        }

        this.tail = node;
        this.count++;

    }

    get length() {
        return this.count;
    }

    get getFirst() {
        return { data: this.head.data };
    }

    get getLast() {
        return { data: this.tail.data };
    }

    removeFirst() {
        if(this.count > 0) {
            this.head = this.head.next;
          }

          this.count--;
    }

}

let list = new LinkedList();
list.addFirst = 1;
list.addLast = 2;
list.addFirst = 10;

console.log('First data in the list', list.getFirst);
console.log('Last data in the list', list.getLast);
console.log('Number of nodes in the list', list.length);
console.log('---------------');


// Q.9 Implement Map and Set using Es6?
console.log('Q.9 Implement Map and Set using Es6?');

// Implementation Of Map

let mapDemo = new Map();

mapDemo.set('name',"taman");
mapDemo.set('age',21);
mapDemo.set('address','delhi');

console.log("Map Iterator: ", mapDemo.entries());

console.log('Fetch Value By Key : ', mapDemo.get('name'));
console.log('Fetch Value By Key : ', mapDemo.get('address'));


// Implementation of Set 

let setDemo = new Set();

setDemo.add(21);
setDemo.add(52);
setDemo.add(36);
setDemo.add(84);
setDemo.add(69);
console.log(setDemo)
console.log('Size Of Set',setDemo.size);

console.log('Find Value From Set : ', setDemo.has(52));

console.log('Delete Value From Set : ', setDemo.delete(69));
console.log(setDemo);

// Q.10 Implementation of stack (using linked list) ?
console.log('Q.10 Implementation of stack (using linked list) ?')
class Stack {
    constructor() {
      this.list = new LinkedList();
    }
    
    push(item) {
      this.list.addFirst = item;
    }
    
    pop() {
      if(!this.list.length) {
        return;
      };
      
      let val = this.list.head.data;
      this.list.removeFirst();
      
      return val;
    }
    
    get length() {
      return this.list.length;
    } 

}

let stack = new Stack();
stack.push(1);
stack.push(2);
stack.push(3);

console.log('Size of Stack', stack.length);
console.log('Popped Item:', stack.pop());