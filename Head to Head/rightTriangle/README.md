# rightTriangle
﻿For a given triangle determine if it is a [right](keyword://right-triangle) triangle.

**Example**

For `sides = [3, 5, 4]`, the output should be
`rightTriangle(sides) = true`.

**Input/Output**

*   **[time limit] 4000ms (js)**

*   **[input] array.integer sides**

    Array of three integers representing triangle sides.

    _Guaranteed constraints:_
    `2 ≤ sides[i] ≤ 15`.

*   **[output] boolean**

    `true` if the triangle with sides from the `sides` array is _a right triangle_, `false` otherwise.


## My Solution
```javascript
﻿function rightTriangle(sides) {
​
  var sqr = function(value) {
    return value * value;
  }
​
  var compareNumbers = function(a, b) {
    return a - b;
  }
​
  sides.sort(compareNumbers);
  if (sqr(sides[0]) + sqr(sides[1]) === sqr(sides[2])) {
    return  true ;
  }
  return false;
}
​
​
```
