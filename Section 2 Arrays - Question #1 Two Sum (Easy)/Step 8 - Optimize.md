# Step 8 Optimization

```javascript
nums = [1, 3, 7, 9, 2], t = 11

const findTwoSum = function (nums, target) {
    for (let p1 = 0; p1 < nums.length; p1++) {
        const numberToFind = target - nums[p1] 

        for (p2 = p1 + 1; p2 < nums.length; p2++) {
            if (numberToFind === nums[p2]) return [p1, p2]
        }
    }

    // if code reaches here, there is no solution
    // this works for inputs with 0 or 1 solution
    return null 
} 
```

## 💡 H A S H &nbsp;  M A P &nbsp; IT 💡
1. Initialize an empty object, ``` hashSum ```, before the first ``` for ``` loop 
2. The keys for ``` hashSum ``` will be ``` numberToFind ```
3. The values for ``` hashSum ``` will be the index for each key
4. (Remove the inner ``` for ``` loop)
5. On each iteration, check if ``` numberToFind ``` equals any of the keys in ``` hashSum ```
    * If not, repeat steps 2 & 3
    * If yes, YOU HAVE A MATCH!!!
    * Return the index of the match and the current index as an array 💰

## The following object repsents each iteration of the optimized loop

```javascript
{
    10 : 0,
    8 : 1,
    4 : 2,
    2 : 3, <- (at this point, 4th iteration, we have a match!!!)
}

return [3, 4]
```
* On the 3rd iteration: ``` numberToFind = 2 ``` 
* On the 4th iteration: 2 is in ``` hashSum ```, which means we have a match