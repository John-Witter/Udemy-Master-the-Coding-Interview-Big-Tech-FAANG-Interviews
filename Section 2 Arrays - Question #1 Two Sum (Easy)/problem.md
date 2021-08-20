# Two Sum

Given an array of integers, return the indices of the two numbers that add up
    to a given target.

```[1, 3, 7, 9, 2] 11```

``` 0, 1, 2, 3, 4 ```

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

