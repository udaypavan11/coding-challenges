/*
    We will have to pointers and based on condition we will mobe these pointers and perform operations



*/

// In a given sorted array find the total unique values present

let totalUnique = (arr) => {
  let count = 1;
  for (i = 0; i < arr.length - 1; i++) {
    if (arr[i] != arr[i+1]) {
      count++;
    }
  }
  console.log(count)
};

totalUnique([1, 1, 1, 3, 3, 5, 5, 5, 5, 5, 8,8,4]);
