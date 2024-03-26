//swap function
//ananymous funciton
const add = function (a, b) {
  return a + b;
};

// console.log(add);
console.log(add(10, 20));

//arrow function
const square = (v) => v * v;
// console.log(square);
console.log(square(10));

const prime = function (n) {
  if (n == 1 || n == 2) {return true;} 
  else {
    let count = 0;
    for (let i = 1; i <= n; i++) {
      if (n % i === 0) {
        count++;
      }
    }
    if (count == 2) {
        return true;
    } else {
        return false;
    }
  }
};

console.log(prime(23));


//recurssion function

function factorial(n){
    if(n===0) return 1;
    else{
        let fact =1;
        for(let i = n; i > 0; i--){
            fact *= i;
        }
        return fact;
    }
}


function fact(n){
    if(n===0) return 1;
    else{
        return n * fact(n-1);
    }
}

function facto(n){
    return n===0? 1 : n * facto(n-1);
}


console.log(factorial(5));
console.log(fact(5));
console.log(facto(5));

//fabonacci series using recurrsion function 

//0 1 1 2 3 5 8 13 21 34 55 89 144