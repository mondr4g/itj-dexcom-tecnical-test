/*
 * Given a list of integers return a list of missing integers in the range [1, list.length]
 * Complexity
 * Time: O(n)
 * Space: O(n)
 */
function findMissingNumsList(nums) {
    try {
        // Validate list length O(1)
        const n = nums.length;
        if (n < 1 || n > 1e5) {
            throw new Error('The length of the list must need to be greater than 0 and less or equal to 10^5.');
        }

        // Validate value of list items O(n)
        const isNumValuesInRange = nums.every(num => num >= 1 && num <= n);
        if (!isNumValuesInRange) {
            throw new Error('The value of the numbers need to be greater than 0 and less or equal to the length of the list.');
        }

        // Find missing values O(n)
        const uniqueNums = new Set(nums);
        let missingNums = [];

        for (let i = 1; i <= n; i++) {
            if (!uniqueNums.has(i)) missingNums.push(i)
        }

        return {
            intStatus: 200,
            result: missingNums
        }
    } catch (error) {
        return {
            intStatus: 400,
            result: {
                error: 'Invalid Input',
                message: error.message
            }
        };
    }
}

/*
 * Given a list of integers return the index of the two numbers such that they add up to target
 * Complexity
 * Time: O(n)
 * Space: O(n)
 */
function findIndexTwoSum(nums, target) {
    try {
        // Validate list length O(1)
        const n = nums.length;
        if (n < 2 || n > 1e4) {
            throw new Error('The length of the list must need to be greater or equal to 2 and less or equal to 10^4.');
        }

        // Validate target O(1)
        if (target < -1e9 || target > 1e9) {
            throw new Error('The value of the target must need to be greater or equal to -10^9 and less or equal to 10^9.');
        }

        // Validate value of list items O(n)
        const isNumValuesInRange = nums.every(num => num >= -1e9 && num <= 1e9);
        if (!isNumValuesInRange) {
            throw new Error('The value of the numbers need to be greater or equal to -10^9 and less or equal to 10^9.');
        }

        // Find index of the two sum numbers O(n)
        let numsMap = new Map()
        for (let i = 0; i < n; i++) {
            if (numsMap.has(target - nums[i])) return {intStatus: 200, result: [numsMap.get(target-nums[i]), i]};
            numsMap.set(nums[i],i);
        }

        return {
            intStatus: 203,
            result: 'Could not find a valid answer. Please try with another list or target!'
        }
    } catch (error) {
        return {
            intStatus: 400,
            result: {
                error: 'Invalid Input',
                message: error.message
            }
        };
    }
}

module.exports = {findMissingNumsList, findIndexTwoSum}