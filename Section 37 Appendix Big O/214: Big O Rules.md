## Big O Rules
</br>
</br>

# Rule 1: Worst Case 
* Big O only cares about worst-case runtime
</br>
</br>

# Rule 2: Remove Constants
* Constants simplify to 1
* If a function has O(141 + n/2 + 2n) this simplifies to O(1 + n/1 + 1n) === O(n)
</br>
</br>

# Rule 3: Different Terms for Inputs
* When iterating over multiple inputs, use different terms (n, m, etc) for each input

```javascript
    function compressBoxesTwice(boxes1, boxes2) {
        boxes1.forEach(box => consol.log(box)) // O(n)
        boxes2.forEach(box => consol.log(box)) // O(m)
        // n and m may differ in length
    } // O(n + m)
```
</br>
</br>

# Rule 4: Drop Non Dominants
* O(x<sup>2</sup> + 3x + 100 + x/2) --> O(x<sup>2</sup>)
    * The dominant term is x<sup>2</sup> b/c this scales faster than each of the other terms
