# isIPv4Address
﻿An IP address is a numerical label assigned to each device (e.g., computer, printer) participating in a computer network that uses the Internet Protocol for communication. There are two versions of the Internet protocol, and thus two versions of addresses. One of them is the _IPv4 address_.

IPv4 addresses are represented in dot-decimal notation, which consists of four decimal numbers, each ranging from `0` to `255`, separated by dots, e.g., `172.16.254.1`.

Given a string, find out if it satisfies the IPv4 address naming rules.

**Example**

*   For `inputString = "172.16.254.1"`, the output should be
    `isIPv4Address(inputString) = true`;

*   For `inputString = "172.316.254.1"`, the output should be
    `isIPv4Address(inputString) = false`.

    `316` is not in range `[0, 255]`.

*   For `inputString = ".254.255.0"`, the output should be
    `isIPv4Address(inputString) = false`.

    There is no first number.

**Input/Output**

*   **[time limit] 4000ms (js)**

*   **[input] string inputString**

    A string consisting of digits, full stops and lowercase Latin letters.

    _Guaranteed constraints:_
    `5 ≤ inputString.length ≤ 15`.

*   **[output] boolean**

    `true` if `inputString` satisfies the IPv4 address naming rules, `false` otherwise.


## My Solution
```javascript
﻿function isIPv4Address(inputString) {
    var res = false;
    var arr = inputString.split(".");
    if (arr.length != 4) return false;
    for (var i = 0; i < arr.length; i++) {
        console.log(arr[i], arr[i] >= 0, arr[i] <= 255)
        if (arr[i] >= 0 && 
            arr[i] <= 255 && 
            arr[i] != "") {
            res = true;
        } else {
            res = false;
            break;
        }
    }
    return res;
}
​
```
