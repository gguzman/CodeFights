﻿function swapAdjacentBits(n) {
  return (((n & 0x2AAAAAAA) >> 1) | ((n & 0x15555555) << 1)) ;
}
​