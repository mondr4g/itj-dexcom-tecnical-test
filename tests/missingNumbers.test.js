const numsLS = require('../functions/numsList');

/*
 * Unit test cases for problem 1
 * Test succes cases
 * Test length errors
 * Test value errors
*/

test('Properly find missing numbers in the range (Case 1)', () => {
    expect(numsLS.findMissingNumsList([4,3,2,7,8,2,3,1])).toEqual({intStatus: 200,result: [5,6]})
})

test('Properly find missing numbers in the range (Case 2)', () => {
    expect(numsLS.findMissingNumsList([1,1])).toEqual({intStatus: 200,result: [2]})
})

test('List with length greater than 10^5', () => {
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

test('List with length less than 1', () => {
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

test('List with numbers that their value are greater than the length of the list', () => {
    expect(numsLS.findMissingNumsList([1,2,3,10])).toEqual({
        intStatus: 400,
        result: {
            error: 'Invalid Input',
            message: 'The value of the numbers need to be greater than 0 and less or equal to the length of the list.'
        }
    })
})

test('List with numbers that their value are less than 1', () => {
    expect(numsLS.findMissingNumsList([1,2,3,0])).toEqual({
        intStatus: 400,
        result: {
            error: 'Invalid Input',
            message: 'The value of the numbers need to be greater than 0 and less or equal to the length of the list.'
        }
    })
})