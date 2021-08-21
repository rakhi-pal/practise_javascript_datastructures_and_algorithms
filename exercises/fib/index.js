// --- Directions
// Print out the n-th entry in the fibonacci series.
// The fibonacci series is an ordering of numbers where
// each number is the sum of the preceeding two.
// For example, the sequence
//  [0, 1, 1, 2, 3, 5, 8, 13, 21, 34]
// forms the first ten entries of the fibonacci series.
// Example:
//   fib(4) === 3

function fibRecursive(n) {
    if(n==0) {
        return 0;
    }
    if(n==1) {
        return 1;
    }
    return fib(n-1) + fib(n-2);
}

function fib(n) {
   if (n===0) return 0;
   if(n===1) return 1;

   let n1 = 0;
   let n2 = 1;
    let nextTerm;

    for (let i = 2; i<=n; i++) {
        nextTerm = n1 + n2;
        n1 = n2;
        n2 = nextTerm;
    }
    return n2;
}


module.exports = fib;
