## Step 7

```javascript
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

## Time Complexity : O(n<sup>2</sup>)
* How many iterations does your code take to run as the ``` nums ``` array gets bigger?
* The first ``` for ``` loops over every element in the ``` nums ``` array
    * This ``` for ``` loop has a time complexity of *****n*****
* The second ``` for ``` loop is nested w/in the first (a hallmark of *****n<sup>2</sup>***** time)
    * This ``` for ``` loop touches almost every element within the ``` nums ``` array
    * This ``` for ``` loop has a time complexity of *****n*****
* The second ``` for ``` loop iterates through each element in ``` nums ``` for each iteration of the first ``` for ``` loop.
    * This means that we have *****n***** * *****n***** OR *****n<sup>2</sup>***** OR *****quadratic***** time complexity

## Space Complexity : O(1)
* There are 3 variables total in the function
    * Constants are treated as O(1)
    * The variables don't scale / they are static in size
    * O(1) is optimal