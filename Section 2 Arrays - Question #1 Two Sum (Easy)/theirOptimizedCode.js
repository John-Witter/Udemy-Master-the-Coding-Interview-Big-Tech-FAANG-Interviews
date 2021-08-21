// this is the solution they came up with

const findTwoSum = function (nums, target) {
    const numsMap = {}
    for (let p = 0; p < nums.length; p++){ 
       const currentMapVal = numsMap[nums[p]] //undefined unless there's a match
       if (currentMapVal >= 0) { // if currentMapVal is undefined, >= 0 is false
           return [currentMapVal, p]
       } else {
           const numberToFind = target - nums[p]
           numsMap[numberToFind] = p
       }
    }
    return null
}