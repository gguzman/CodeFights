# firstDigit
﻿Find the leftmost digit that occurs in a given string.

**Example**

*   For `inputString = "var_1__Int"`, the output should be
    `firstDigit(inputString) = '1'`;
*   For `inputString = "q2q-q"`, the output should be
    `firstDigit(inputString) = '2'`;
*   For `inputString = "0ss"`, the output should be
    `firstDigit(inputString) = '0'`.

**Input/Output**

*   **[time limit] 4000ms (js)**

*   **[input] string inputString**

    A string containing at least one digit.

    _Guaranteed constraints:_
    `3 ≤ inputString.length ≤ 10`.

*   **[output] char**


## My Solution
```javascript
﻿function firstDigit(inputString) {
    for (var i = 0; i < inputString.length; i++) {
        var c = inputString.charCodeAt(i);
        if (c >= 48 && c <= 57) return inputString[i];
    }
}
​
```
