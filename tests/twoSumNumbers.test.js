const numsLS = require('../functions/numsList');

/*
 * Unit test cases for problem 2
 * Test succes cases
 * Test length errors
 * Test value errors
 * Test missing solution
 * 
 * You can include any test case on this file and run it with 'npm test' command
 *
 * Ex.
 *  test('new test', () => {
 *      expect(numsLs.findIndexTwoSum(<list_input>,<target>)).toEqual(<expected_output>)
 *  })
 * 
*/

// Unit test with succes case 
test('Properly find two numbers index that sum is equal to target (Case 1)', () => {
    expect(numsLS.findIndexTwoSum([2,7,11,15],9)).toEqual({intStatus: 200,result: [0,1]})
})

// Unit test with succes case 
test('Properly find two numbers index that sum is equal to target (Case 2)', () => {
    expect(numsLS.findIndexTwoSum([3,2,4],6)).toEqual({intStatus: 200,result: [1,2]})
})

// Unit test with succes case 
test('Properly find two numbers index that sum is equal to target (Case 3)', () => {
    expect(numsLS.findIndexTwoSum([3,3],6)).toEqual({intStatus: 200,result: [0,1]})
})

// Unit test case nums.length > 10^4
// Constraint: 2 <= nums.length <= 10^4
test('List with length greater than 10^4', () => {
    // Create a list with range [1,10^5]
    let invalidNums = [];
    for(let i = 1; i <= Math.pow(10, 5); i++) {
        invalidNums.push(i);
    }
    expect(numsLS.findIndexTwoSum(invalidNums,0)).toEqual({
        intStatus: 400,
        result: {
            error: 'Invalid Input',
            message: 'The length of the list must need to be greater or equal to 2 and less or equal to 10^4.'
        }
    })
})

// Unit test case nums.length < 2
// Constraint: 2 <= nums.length <= 10^4
test('List with length less than 2', () => {
    expect(numsLS.findIndexTwoSum([1],0)).toEqual({
        intStatus: 400,
        result: {
            error: 'Invalid Input',
            message: 'The length of the list must need to be greater or equal to 2 and less or equal to 10^4.'
        }
    })
})

// Unit test case target > 10^9
// Constraint: -10^9 <= target <= 10^9
test('List with target greater than 10^9', () => {
    // Create number 10^10 to be included as target
    const invalidTarget = Math.pow(10,10)
    expect(numsLS.findIndexTwoSum([1,2,3,4,5],invalidTarget)).toEqual({
        intStatus: 400,
        result: {
            error: 'Invalid Input',
            message: 'The value of the target must need to be greater or equal to -10^9 and less or equal to 10^9.'
        }
    })
})

// Unit test case target < -10^9
// Constraint: -10^9 <= target <= 10^9
test('List with target less than 10^9', () => {
    // Create number 10^10 to be included as a negative target
    const invalidTarget = Math.pow(10,10)
    expect(numsLS.findIndexTwoSum([1,2,3,4,5],-invalidTarget)).toEqual({
        intStatus: 400,
        result: {
            error: 'Invalid Input',
            message: 'The value of the target must need to be greater or equal to -10^9 and less or equal to 10^9.'
        }
    })
})


// Unit test case nums[i] > 10^9
// Constraint: -10^9 <= nums[i] <= 10^9
test('List with numbers that their value is greater than 10^9', () => {
    // Create number 10^10 to be included on the given list
    const invalidNum = Math.pow(10,10)
    expect(numsLS.findIndexTwoSum([1,2,3,invalidNum,5],10)).toEqual({
        intStatus: 400,
        result: {
            error: 'Invalid Input',
            message: 'The value of the numbers need to be greater or equal to -10^9 and less or equal to 10^9.'
        }
    })
})

// Unit test case nums[i] < -10^9
// Constraint: -10^9 <= nums[i] <= 10^9
test('List with numbers that their value is less than 10^9', () => {
    // Create number 10^10 to be included as negative on the given list
    const invalidNum = Math.pow(10,10)
    expect(numsLS.findIndexTwoSum([1,2,3,-invalidNum,5],10)).toEqual({
        intStatus: 400,
        result: {
            error: 'Invalid Input',
            message: 'The value of the numbers need to be greater or equal to -10^9 and less or equal to 10^9.'
        }
    })
})

// Unit test case no solution
// Constraint: Only one solution
test('List with no solution', () => {
    expect(numsLS.findIndexTwoSum([1,2,3,4,5],100)).toEqual({
        intStatus: 203,
        result: 'Could not find a valid answer. Please try with another list or target!'
    })
})
