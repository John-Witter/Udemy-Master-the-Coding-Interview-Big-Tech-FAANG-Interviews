// this is based on the 2-pointer technique in problem.md


const twoSum = (nums, target) => {
    let p1 = -1
    let p2 = 0
    let found = false
    let numberToFind
    
    do {
        p1++
        p2++
        numberToFind = target - nums[p1]
        if (nums[p2] === numberToFind) found = true
    } while (p2 < nums.length && found === false)
    
    if (found) return [p1, p2]
    return null
}

const nums = [1, 3, 7, 9, 2]
const target = 11

console.log(twoSum(nums, target)) // return [3, 4]