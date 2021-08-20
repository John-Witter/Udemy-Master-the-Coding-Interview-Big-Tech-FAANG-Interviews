# Two Sum

Given an array of integers, return the indices of the two numbers that add up
    to a given target.

```[1, 3, 7, 9, 2] 11```

&nbsp; ```0, 1, 2, 3, 4 ```

``` return [3, 4] ```

## Step 1: Verify the constraints

* Are all the numbers positive or can there be negatives? ✅
    * Yes, all numbers will be positive
* Are there duplicate numbers in the array? ❌
    * No, there are no duplicates
* Will there always be a solution available? ❌
    * No, there may not always be a solution
    * Ex input: [1, 3, 7, 9, 2], 25  -> no values add to 25
    * Ex input: [], 25 -> no values add to 25
    * Ex input: [5], 25 -> a single value will never produce a correct answer
* What do we return if there's no solution?
    * Just return null
* Can there be multiple pairs that add up to the target?
    * No, only 1 pair of numbers will add up to the target
    * We will never receive an array with multiple pairs that sum to the target

## Step 2: Write out some test cases

``` [1, 3, 7, 9, 2], t = 11, return [3, 4] ```

``` [1, 3, 7, 9, 2], t = 11, return null ```

``` [], t = 1, return null ```

``` [5], t = 5, return null ```

* need at least 2 numbers

``` [1, 6], t = 7, return [0, 1] ```

## Step 3: Figure out a solution without code

``` nums = [1, 3, 7, 9, 2], t = 11 ```

* How to tell if there is a pair of ints in the array that sum to the target?
    * 1st approach: try every possible combo of pairs in the array, if none add to target, return null
        * start with "1": 1 + 3, 1 + 7, 1 + 9, 1 + 2 => none of these sum to 11
        * move on to "3": 3 + 7, 3 + 9, 3 + 2 => none of these sum to 11
        * move on to "7": 7 + 9, 7 + 2 => none of these sm to 11
        * move on to "9": 9 + 2 = 11, return indices of 9, 2 => [3, 4]
        * ### this is known as the 2-pointer technique
         * p1 = 0 p2 = 1
         * numberToFind = target - nums[p1] = 11 - 1 = 10
         * start checking if p2 = 10 for any of the values in nums
         * nums[p2] = 3 ... does 3 === 10? no, increment p2
         * nums[p2] = 7 ... does 7 === 10? no, increment p2
         * ... nums[p2] never equals 10 ... increment p1, set p2 = p1 +1
         * p1 = 1 p2 = 2
         * numberToFind = target - nums[p1] = 11 - 3 = 8
         * nums[p2] = 7 ... does 7 === 8?  no, increment p2
         * nums[p2] = 9 ... does 9 === 8? no, increment p2
         * nums[p2] = 2 ... does 2 === 8? no, increment p2
         * increment p1, set p2 = p1 + 1
         * p1 = 2, p2 = 3
         * numberToFind = target - nums[p1] = 11 - 7 = 4
         * nums[p2] = 9 ... does 9 === 4? no, increment p2
         * nums[p2] = 2 ... does 2 === 4? no, increment p2
         * increment p1, set p2 = p1 + 1
         * p1 = 3, p2 = 4
         * numberToFind = target - nums[p1] = 11 - 9 = 2
         * nums[p2] = 2 ... does 2 === 2? YES!!!
            * return [p1, p2]

## Step 4: Code the Solution

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
## Step 5: Double Check For Errors

## Step 6: Test Code With the Test Cases
