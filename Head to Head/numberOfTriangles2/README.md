# numberOfTriangles2
﻿You have `N` sticks. Given an array of their lengths, find the number of triangles that can be constructed using any three of these sticks. Note that the sum of the lengths of any two sides of a triangle must be greater than the third side.

Equal triangles that are constructed from different sticks are considered different.

**Example**

*   For `sticks = [3, 5, 7, 9]`, the output should be
    `numberOfTriangles2(sticks) = 3`.

    These `3` triangles are (described by their sides): `(3, 5, 7)`, `(3, 7, 9)`, `(5, 7, 9)`.
    The triangle `(3, 5, 9)` is not valid, as `3 + 5 = 8 < 9`.

*   For `sticks = [4, 4, 4, 4]`, the output should be
    `numberOfTriangles2(sticks) = 4`.

    These `4` triangles are `(4, 4, 4)` made of different sticks.

*   For `sticks = [1, 2, 3]`, the output should be
    `numberOfTriangles2(sticks) = 0`.

    There is only one triangle `(1, 2, 3)`, but it is incorrect: `1 + 2 = 3`.

**Input/Output**

*   **[time limit] 4000ms (js)**

*   **[input] array.integer sticks**

    A sorted array of at least three positive integers.

    _Guaranteed constraints:_
    `3 ≤ sticks.length ≤ 10`,
    `1 ≤ sticks[i] ≤ 20`.

*   **[output] integer**


## My Solution
```javascript
﻿function numberOfTriangles2(sticks) {
​
  var ans = 0;
  for (var i = 0; i < sticks.length - 2; i++) {
    for (var j = i + 1; j < sticks.length - 1; j++) {
      var mx =  sticks[i] + sticks[j] ;
      var l = j,
          r = sticks.length;
      while (r - l > 1) {
        var m = Math.floor((l + r) / 2);
        if (sticks[m] >= mx) {
          r = m;
        } else {
          l = m;
        }
      }
      ans += r - j - 1;
    }
  }
​
  return ans;
}
​
```
