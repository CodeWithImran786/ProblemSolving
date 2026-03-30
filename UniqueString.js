
function uniqueChars(str) {
  return [...new Set(str)].join('');
}

console.log(uniqueChars("hello")); // "helo"

//Unique characters in a string




// Set {'h','e','l','o'}|
// Duplicate l is removed automatically.
// Spread Operator ...
// A Set is not an array, so we convert it to an array.
//[...new Set(str)]  == ['h','e','l','o']



// Flow

// "hello"
//    ↓
// Set removes duplicates
//    ↓
// {'h','e','l','o'}
//    ↓
// Spread → Array
// ['h','e','l','o']
//    ↓
// join('')
// "helo"