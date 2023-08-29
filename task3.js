//Print odd numbers in an array

//anonymous
let arr=[0,1,2,3,4,5,6,7,8,9,10,11,12,13,14];

let odd= function () {
   odd= arr.filter(num => num %2 ==1)
  console.log('odd',odd)
}
odd()

// IIFE
let n = [0,1,2,3,4,5,6,7,8,9,10,11,12]
let odd1 = (function(){
    for (var i = 0;i<n.length;i++){
        if(n[i]%2!=0){
            console.log([i])
        }
    }
})();

// Convert all the strings to title caps in a string array

//anonymous

let str = function () {
    let arr = "hello there how are you"
    let titlecase = arr.toLowerCase().replace(/\b(\w)/g, s => s.toUpperCase());
    console.log(titlecase)
  }
  str()

  // IIFE
  

 let cap =  (function () {
    let arr = "i am fine"
    let titlecase = arr.toLowerCase().replace(/\b(\w)/g, s => s.toUpperCase());
    console.log(titlecase)
  })();
 
  // anonymous
let num = [2,3,5,6,8]
  let sum = function(){
    var sum = 0;
    for(var i = 0 ; i< num.length ; i++){
       sum = sum + num[i];
     }
     return sum;
  }
let sum1 = sum();
console.log (sum1)

// //iife
{

(function () {
  let sum4 = [1, 2, 3, 4].reduce(add, 5);
  function add(accumulator, a) {
    return accumulator + a;
  }
  console.log(sum4);
})()
}

// anonymous

let prime = function (arr) {
  return arr.filter(function(n){
    for (let i = 2; i < n; i++) {
      if (n % i === 0) return false;
    }
    return n > 1;
  });
};
console.log(prime([8,9,7,12,36,9,8]));

//iife
(function (){
  var primeNum = [1,2,3,4,5,6,7,8,9,10]
  
  primeNum = primeNum.filter(function(number) {
    for (var i = 2; i <= Math.sqrt(number); i++) {
      if (number % i === 0) return false;
    }
    return true;
  });
  
  console.log(primeNum);
  })()

  // anonymous
  let isPalindrome = function () {
    var myArray = ['viicc', 'racecar', 'honda', 'malayalam'];
    var arr = myArray.filter(function (c, d) {
      var palindrome = c.split('').reverse().join('');
      if (c == palindrome) {
        console.log(myArray[d]);
      }
    });
  }
  isPalindrome()

  // iife
  {
  ( function () {
    var myArray = ['mam','wow','milk','mum'];
    var arr = myArray.filter(function (c, d) {
      var palindrome = c.split('').reverse().join('');
      if (c == palindrome) {
        console.log(myArray[d]);
      }
    });
  })()
}

// anonymous
let median = function(a, b) {

  let c = [...a, ...b].sort((a, b) => a - b);

  const half = c.length / 2 | 0;
  
if (c.length % 2) {
  return c[half];
} else {
  
  return (c[half] + c[half - 1]) / 2;
}
}
let arr1 = [1, 12, 15, 26, 38,24];
let arr2 = [2, 13, 17, 30, 45, 47];
console.log(median(arr1, arr2));

// iife

( function() {
  let arr1 = [5, 122, 55, 8, 38,104];
  let arr2 = [7, 6, 9, 90, 85, 17];
  
    let c = [...arr1, ...arr2].sort((arr1, arr2) => arr1 - arr2);
  
    const half = c.length / 2 | 0;
    
  if (c.length % 2) {
  console.log(c[half]);
  } else {
    
  console.log((c[half] + c[half - 1]) / 2);
  }
  
  })()

  //Anonymous :

let findDuplicates = function () {
  
  const yourArray = [1, 1, 2, 3, 4, 5, 5,"s","a","s"]
  let duplicates = []
  const tempArray = [...yourArray].sort() 
  for (let i = 0; i < tempArray.length; i++) {
    if (tempArray[i + 1] === tempArray[i]) {
      duplicates.push(tempArray[i])
    }
  }
  console.log(duplicates) 
}
findDuplicates()

//IIFE :

{
(function () {
  
  let numbers = [1, 2, 3, 2, 4, 5, 5, 6];
  
  let duplicates = numbers.filter((item, index) => index !== numbers.indexOf(item));
  
  console.log(duplicates);
})()
}

//Anonymous :

let rotateArray =function(A, K) {
  if (A.length === K || K === 0) {
      return A;
  }
  K = K % A.length;
  for (let i = 0; i < K; i++) {
      A.unshift(A.pop());
  }
console.log(A)
}
rotateArray([1,2,3,4,5],2)

//IIFE :
{
(function(A, K) {
  if (A.length === K || K === 0) {
      return A;
  }
  K = K % A.length;
  for (let i = 0; i < K; i++) {
      A.unshift(A.pop());
  }
console.log(A)
})([1,2,3,4,5],2)
}

// arrow function

// Print odd numbers in an array
{
let arr=[0,1,2,3,4,5,6,7,8,9,10,11,12,13,14];

let odd=  () => {
   odd= arr.filter(num => num %2 ==1)
  console.log('odd',odd)
}
odd()
}

// Convert all the strings to title caps in a string array
{
let str =  () => {
  let arr = "hello there how are you"
  let titlecase = arr.toLowerCase().replace(/\b(\w)/g, s => s.toUpperCase());
  console.log(titlecase)
}
str()
}

// Sum of all numbers in an array
{
let num = [2,3,5,6,8]
  let sum =() => {
    var sum = 0;
    for(var i = 0 ; i< num.length ; i++){
       sum = sum + num[i];
     }
     return sum;
  }
let sum1 = sum();
console.log (sum1)
}

// Return all the prime numbers in an array
{
let prime =  (arr) =>{
  return arr.filter(function(n){
    for (let i = 2; i < n; i++) {
      if (n % i === 0) return false;
    }
    return n > 1;
  });
};
console.log(prime([8,9,7,12,36,9,8]));
}

// Return all the palindromes in an array

{
  let isPalindrome =  ()=> {
    var myArray = ['viicc', 'racecar', 'honda', 'malayalam'];
    var arr = myArray.filter(function (c, d) {
      var palindrome = c.split('').reverse().join('');
      if (c == palindrome) {
        console.log(myArray[d]);
      }
    });
  }
  isPalindrome()
}