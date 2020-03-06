//Q1. Given this array: `[3,62,234,7,23,74,23,76,92]`, Using arrow function, 
// create an array of the numbers greater than `70`.

//-----------Code -----------

// let oldArray = [3,62,234,7,23,74,23,76,92];

// let newArray = oldArray.filter(item=>{if(item>70) return item;})
// console.log(newArray);

// Q.2 a) Select all the list items on the page and convert to array.
    let arr = document.getElementsByTagName("li");
    let newArray= new Array;
    for(i of arr){
        newArray.push(i.innerHTML)
    }
    console.log(newArray);


// Q.2 b) Filter for only the elements that contain the word 'flexbox'
    let filteredValue = newArray.filter(item=>{return item=="Flexbox Video"})
    console.log(filteredValue)

// Q.2 c) map down to a list of time strings.

let timeString = document.getElementsByTagName("li");
console.log(timeString)
let timeArray= new Array;
    for(i of timeString){
        timeArray.push(i.getAttribute('data-time'))
    }
console.log(timeArray);


// Q.2 d) map to an array of seconds

let secondsArray= new Array;
    for(i of timeString){
        let dataItem = i.getAttribute('data-time');
        let second = dataItem.split(':');
        secondsArray.push(second[1]);
    }
console.log(secondsArray)

// Q.2 e) reduce to get total using .filter and .map


let sum = 0;

secondsArray.map((o)=> {
    sum+=parseInt(o);
})
console.log(sum);

// Q3. Create a markup template using string literal

const song = {

 name: 'Dying to live',

 artist: 'Tupac',

 featuring: 'Biggie Smalls'

};

 
let htmlCreation = `<div class="song">

<p>

  ${song.name}

  (Featuring ${song.featuring})

</p>

</div>`

console.log(htmlCreation)




// Result:

// "<div class="song">

//    <p>

//      Dying to live — Tupac

//      (Featuring Biggie Smalls)

//    </p>

//  </div>"


//  Q.4 Extract all keys inside address object from user object using destructuring ?

const user = {

    firstName: 'Sahil',
    
    lastName: 'Dua',
    
    Address: {
    
    Line1: 'address line 1',
    
    Line2: 'address line 2',
    
    State: 'Delhi',
    
    Pin: 110085,
    
    Country: 'India',
    
    City: 'New Delhi',
    
    },
    
    phoneNo: 9999999999
    
}
 
let {Address:{Line1,Line2,State,Pin,Country,City}} = user;

console.log(Line1,Line2,State,Pin,Country,City);
