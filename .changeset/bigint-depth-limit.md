---
"react-router-devtools": patch
---

Add depth limit and cycle detection to `convertBigIntToString` to prevent infinite recursion on circular or deeply nested objects (#250)
