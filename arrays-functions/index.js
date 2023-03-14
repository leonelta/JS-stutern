//Question 1 What are the differences between mutating array methods and non-mutation array methods in JavaScript. List 5 array methods that fall under each of them.

//mutable array methods can modify the array. Example of mutable array method
//sort(), pop(), push(), reverse(), splice().

//immutable array method These following methods do not modify the array and return some representation of the array.
//Examples of immutable array method
//slice(), join(), filter(), concat(), find().


//Question 2

const languages =  ["c#", "Javascript", "Ruby", "PHP", "Python"];
//insert an element at the end of the array
languages.push("Kotlin");
console.log(languages);
// add an element after Ruby
languages.splice(3, 0, 'Java');
console.log(languages);
// remove the first element of the array
languages.shift();
console.log(languages);
// adding two elements at the beginning of the array
languages.unshift("Scala", "Swift");
console.log(languages);
// replacing an item of the array
languages.splice(5, 1, 'Go', 'Rust');
console.log(languages);

//Question 3
let fruit = ['apple', 'mango', 'banana'];
function changeFruit( fruit ) {
    fruit[2] = "orange";
    return fruit;  
}

// answer = nothing

//Question 4
function maximum(arr) {
    let i;

    let max = arr[0];

    for (i = 1; i < i < arr.length; i++){
        if (arr[i] > max )
            max = arr[i];
    }
    
    return max;
}

let arr = [-2, 10, 8];
console.log(maximum(arr));


//Question 5
//Write a function called valTimesIndex which accepts an array of numbers and returns a new array 
//with each value multiplied by the index it is at in the array

function valTimesIndex(arr){
    return arr.map(function(value,index,array){
      return value*index;
  });   
}
    