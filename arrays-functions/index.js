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
// add an element after Ruby
languages.splice(3, 0, 'Java');
