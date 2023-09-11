const numsLS = require('../functions/numsList');

/*
 * Unit test cases for problem 1
 * Test succes cases
 * Test length errors
 * Test value errors
 * 
 * You can include any test case on this file and run it with 'npm test' command
 *
 * Ex.
 *  test('new test', () => {
 *      expect(numsLs.findMissingNumList(<list_input>)).toEqual(<expected_output>)
 *  })
 * 
*/

// Unit test with succes case 
test('Properly find missing numbers in the range (Case 1)', () => {
    expect(numsLS.findMissingNumsList([4,3,2,7,8,2,3,1])).toEqual({intStatus: 200,result: [5,6]})
})

// Unit test with succes case
test('Properly find missing numbers in the range (Case 2)', () => {
    expect(numsLS.findMissingNumsList([1,1])).toEqual({intStatus: 200,result: [2]})
})

// Unit test case nums.length > 10^5
// Constraint: 1 <= nums.length <= 10^5
test('List with length greater than 10^5', () => {
    // Create a list with range [1,10^6]
    let nums = [];
    for(let i = 1; i <= Math.pow(10, 6); i++) {
        nums.push(i);
    }
    expect(numsLS.findMissingNumsList(nums)).toEqual({
        intStatus: 400,
        result: {
            error: 'Invalid Input',
            message: 'The length of the list must need to be greater than 0 and less or equal to 10^5.'
        }
    })
})

// Unit test case nums.length < 1
// Constraint: 1 <= nums.length <= 10^5
test('List with length less than 1', () => {
    let nums = [];
    expect(numsLS.findMissingNumsList(nums)).toEqual({
        intStatus: 400,
        result: {
            error: 'Invalid Input',
            message: 'The length of the list must need to be greater than 0 and less or equal to 10^5.'
        }
    })
})

// Unit test case nums[i] > nums.length
// Constraint: 1 <= nums[i] <= n
test('List with numbers that their value are greater than the length of the list', () => {
    expect(numsLS.findMissingNumsList([1,2,3,10])).toEqual({
        intStatus: 400,
        result: {
            error: 'Invalid Input',
            message: 'The value of the numbers need to be greater than 0 and less or equal to the length of the list.'
        }
    })
})

// Unit test case nums[i] < 1
// Constraint: 1 <= nums[i] <= n
test('List with numbers that their value are less than 1', () => {
    expect(numsLS.findMissingNumsList([1,2,3,0])).toEqual({
        intStatus: 400,
        result: {
            error: 'Invalid Input',
            message: 'The value of the numbers need to be greater than 0 and less or equal to the length of the list.'
        }
    })
})