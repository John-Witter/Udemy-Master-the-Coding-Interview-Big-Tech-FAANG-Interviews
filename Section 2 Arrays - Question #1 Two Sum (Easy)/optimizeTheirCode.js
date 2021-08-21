// Old Code:
/*
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
*/

const findTwoSum = function (nums, target) {
    let hashSum = {}
    for (let i = 0; i < nums.length; i++) {
        const num = nums[i]
        const numberToFind = target - num

        if (hashSum.hasOwnProperty(Number(num))) {
            index = hashSum[num]
            return [index, i]
        }
        
        hashSum[numberToFind] = i
    }

    return null
}

const nums = [1, 3, 7, 9, 2]
const target = 11

console.log(findTwoSum(nums, target))