// In javascript almost everything is an object 
// You have primitives like boolean strings and numbers
// But you can call methods on it
const word1 = 'Hello';
console.log(word1.toUpperCase()); // Now it is an object
// Javascript behind the scenes will call an wrapper around the word so it is an object.

const word2 = new String('Hello')
console.log(typeof word1)
console.log(typeof word2)
// SO you can see that word2 is an object and word 1 is an primitive 'string'
// behind the scenes when you use an method on a string the string wil get a new String wrapper around it