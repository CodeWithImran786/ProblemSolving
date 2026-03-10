const arr3 = "JavaScript";

const count = {};

for (let char of arr3) {
  if (count[char]) {
    count[char]++;
  } else {
    count[char] = 1;
  }
}

console.log(count);




// The program checks every letter one by one and counts how many times it appears.