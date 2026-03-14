const arr = [1, [2, 3], [4, [5, 6]]];//Level 0 (Original Array) or main array.

const flat = arr.flat(2); // depth 2
console.log(flat); // [1,2,3,4,5,6]


// Level 1 (Arrays inside Level 0)
//[2,3] [4,[5,6]]
//Both of these arrays are direct children of the main array, so they are Level 1.

//Level 2 (Array inside [4,[5,6]])
//[5,6]
//This array is inside [4,[5,6]], so it becomes Level 2.

//conceptually levels start from 0, but flat() depth does not start from level 0.
//  It starts from how many nested levels you want to remove.