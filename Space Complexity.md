# Space Complexity
* How much memory is being used?
* Usually there's a trade between time complexity and space complexity


## Heap
* Where we store variables


## Stack
* Where we keep track of function calls

## What causes space complexity?
* Adding variables
* Adding data structures
* Function calls
* Allocations (ex: adding to an array or object)


```javascript
    function boo(n) {
        for (let i = 0; i < 'n.length'; i++) {
            console.log('booooooo!')
        }
    } 
    boo(2) // OUTPUT: booooooo!\nbooooooo!
```
* Time Complexity: O(n)
* Space Complexity: O(1)


```javascript
    function arrayOfHiNTimes(n) {
        let hiArray = []

        for (let i = 0: i < n; i++) {
            hiArray[i] = 'hi' // allocation
        }
        return hiArray
    }
    console.log(arrayOfHiNTimes(3)) // OUTPUT: ['hi', 'hi', 'hi']
```
* Time Complexity: O(n)
* Space Complexity: O(n)