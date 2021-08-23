# What is good code?
1. Readable 💎
2. Scalable 📐
    * When the inputs grow larger, how much does the algorithm slow down? Less slow down is better.
    * 2 things to consider:
        1. Speed --> how much time does it take for a function to run?
        2. Memory --> typically lower priority than speed
```javascript
    const nemo = ['nemo']
    const large = new Array(100).fill('nemo')
    const larger = new Array(1000).fill('nemo')
    
    funcion findNemo(arr) {
        let t0 = performance.now()
        for (let i = 0; i < arr.length; i++) {
            if (arr[i] === 'nemo') {
                console.log('Found NEMO!')
            }
        }
        let t1 = performance.now()
        console.now('The call to find Nemo took ' + (t1-t0) + ' milliseconds')
    }

    findNemo(nemo) // OUTPUT: Found NEMO!
                   //         The call to find Nemo took 0 milliseconds
    findNemo(large) // OUTPUT: Found NEMO! * 100
                   //         The call to find Nemo took 0.5 milliseconds
    findNemo(large) // OUTPUT: Found NEMO! * 1000
                   //         The call to find Nemo took 7 milliseconds
```

## Big O
* How many steps does a function take?

### Big O of findNemo: O(n) --> Linear Time
* Each item in the input array is visited once (in the worst-case scenario)

