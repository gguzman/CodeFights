# primeFactors2
﻿Find all distinct [prime](keyword://prime-number) factors of a given integer.

**Example**

For `n = 100`, the output should be
`primeFactors2(n) = [2, 5]`.

**Input/Output**

*   **[time limit] 4000ms (js)**

*   **[input] integer n**

    A positive integer.

    _Guaranteed constraints:_
    `1 ≤ n ≤ 150`.

*   **[output] array.integer**

    An array of distinct prime factors of `n` in increasing order.


## My Solution
```javascript
﻿function primeFactors2(n) {
  var factors = [],
      divisor = 2;
​
  while (n !== 1) {
    if (n % divisor === 0) {
      factors.push(divisor);
    }
    while (n % divisor === 0) {
      n /=  divisor ;
    }
    divisor++;
  }
​
  return factors;
}
​
```
