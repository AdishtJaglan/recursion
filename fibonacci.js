// iterative version of fibonacci problem
function itFibo(n) {
  let first = 0;
  let second = 1;

  for (let i = 0; i < n; i++) {
    if (i < 2) {
      console.log(i);
    } else {
      let term = first + second;
      console.log(term);

      first = second;
      second = term;
    }
  }
}

//recursive solution of fibonacci problem
function recFibo(n) {
  if (n < 2) {
    return n;
  } else {
    return recFibo(n - 1) + recFibo(n - 2);
  }
}
