# ITJ Technical Mid Level Problems

## Description

Welcome ITJ and Dexcom team members! This is a program developed with NodeJS using JavaScript to run some specific functions that
allows users to solve two different problems using a list of integers. Users can run this program from the terminal,
using an specific command, selecting the problem option and giving the appropriate data in the arguments of this
command.

# Content

1. Requirements
2. Installation
3. How to run
4. Testing
5. Problem 1: Solution description
6. Problem 2: Solution descripton

# Requirements

This project was developed using NodeJS, so you must have it installed in yor machine just like npm
to install modules and Git to clone the repository.

If you don't have NodeJS on your machine you can download it from the [official website](https://nodejs.org/en). Version
18.17.1 LTS was used for this project.

For linux you can install it using apt install
```bash
$ sudo apt install nodejs
$ sudo apt install npm
```

To check if installation was done with succes, you can check on windows or linux with the following command
```bash
$ node --version
v18.17.1
$ npm --version
9.6.7
```

If you don't have Git installed on your machine you can download it from the [official website](https://git-scm.com/downloads). 

For linux you can install it using apt install
```bash
$ sudo apt install git
```

To check if installation was done with succes, you can check on windows or linux with the following command
```bash
$ git --version
git version 2.41.0.windows.3
```

# Installation

First step is to clone the current project on your local machine. You can do this by running the following command on terminal,
or using any other tool like Github Desktop or similar.
```bash
$ git clone https://github.com/mondr4g/itj-technical-test.git
```

Once you have the project installed and having all the requirements mentioned previously. You need to be located on the src directory
(At the level of the package.json file) and run the following command to install all the project dependencies that are included.
```bash
$ npm i
```

After all the packages are installed now you can be able to execute the program an try to use it to find the solution for the problems
that are presented on this project.

## How to run

To run the program you just need to use the following command on the terminal, giving the correct options
and arguments for each problem:

```bash
COMMAND
    $ npm start [p1p2] [list_of_integers] [target]

EXAMPLES
    $ npm start p1 [1,1]
    $ npm start p2 [3,2,4] 6

DESCRIPTION
    Run the correct function to solve any of the two given
    problems and display the result to the user.

OPTIONS
    p1     Execute the function to solve problem 1 (Find the missing numbers on a list of range [1, list length]) 
    p2     Execute the function to solve problem 2 (Find the two numbers index on a list that they add up to an specific target) 

ARGUMENTS
    LIST_OF_INTEGERS    The list of integers that is going to be analyze. Ex. [1,2,3,4]
    TARGET              The integer that is going to be the target for problem 2. (Only if p2 option was selected)

EXIT STATUS
    Returns {intStatus: 200, result: [result]} if the user gives a valid input and the algorithm found a solution.
    Returns {intStatus: 203, result: 'msg'} if the user gives a valid input, but the algorithm did not find a solution.
    Returns {intStatus: 400, result: {error: 'title', message: 'msg'}} If the user gives an invalid input or there was any problem with the algorithm.
```

## Testing

This project has different unit tests for both of the algorithms with some specific inputs to validate the correct functionallity and error handling
of them.

For this project Jest framework was used to create each of the unit test cases. You can find each of them in:
/tests
    missingNumbers.test.js
    twoSummNumbers.test.js

To run this unit test cases, you can use the following comand on the terminal
```bash
$ npm test
```

The expected output is going to show all the description of the test cases that were executed and the coverage from all
the lines of code of the file with the algorithms. Something like this:
```bash
 PASS  tests/twoSumNumbers.test.js
  √ Test1 (1 ms)
  √ Test2 (3 ms)

 PASS  tests/missingNumbers.test.js
  √ Test1 (1 ms)
  √ Test2 (3 ms)

-------------|---------|----------|---------|---------|-------------------
File         | % Stmts | % Branch | % Funcs | % Lines | Uncovered Line #s
-------------|---------|----------|---------|---------|-------------------
All files    |     100 |      100 |     100 |     100 |
 file.js     |     100 |      100 |     100 |     100 |
-------------|---------|----------|---------|---------|-------------------
Test Suites: 2 passed, 2 total
Tests:       4 passed, 4 total
Snapshots:   0 total
Time:        1.456 s, estimated 7 s
Ran all test suites.
```

NOTE: You can also find this information generated, displayed on an index.html file located in:
/coverage
    /icov-report
        index.html
You can open this file on the browser an see the report generated

## Problem 1 (Find the missing numbers on a list of range [1, list length])

Given a list nums of n integers where nums[i] is in the range [1, list length], write a function
that solves the following problem; return a list of all the integers in the range [1, list length]
that do not appear in nums.

Constraints:
- n == nums.length
- 1 <= n <= 10^5
- 1 <= nums[i] <= n

## Approach

To find the missing values we need to iterate between al the numers in the range of [1, list_length]
and see if any of those numbers ara missing in the given array. If they are not included we add them
into a new list that is going te be returned with all those missing numbers.

To achieve this goal we also need to validate and create a new Set, with the given list by the user, before looking
for missing numbers to eliminate duplicates and use the Set.has() method that has O(1) time complexity to
find elements instead of other options like Array.includes() that has O(n) time complexity.

## Complexity
Time O(n) ->
    Length validation has an O(1) time complexity.
    Validating value of each element on the list has an O(n) time complexity
    Iterating a loop in the range of [1,list length] has an O(n) time complexity
    Looking if the Set has a given value has an O(1) time complexity.

Space O(n) ->
    Creating a new variable to store length of the list requires additional space (constant)
    Creating a new variable to store items value validation requires additional space (constant)
    Creating a Set of unique numbers requires additional space to store them (n elements)
    Creating a new list that stores missing numbers requires additional space (n elements)

## Code

You can see the complete code in ./functions/numList.js -> findMissingNumsList

```javascript
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
```

## Problem 2 (Find the two numbers index on a list that they add up to an specific target)

Given a list of integers nums and an integer target, write a function that solves the following
problem; return indices of the two numbers such that they add up to target. You may assume that 
each input would have exactly one solution, and you may not use the same element twice.

Constraints:
- 2 <= nums.length <= 10^4
- -10^9 <= nums[i] <= 10^9
- -10^9 <= target <= 10^9
- Only one valid answer exists.

## Approach

To find the two index of the numbers that added up are equal to the value of the target 
the first approach could be to to iterate through all the numbers of the given list and check for each one of them 
with another loop, if added with any other number on the list result the same value as the target. 
This is a valid solution, but the time complexity is O(n2) because of the nested loops. 

Instead of that, we could only use one loop to iterate the numbers of the given list and then perform the following steps.
First step, is to find the difference between the target and the current number on the lopp. The result is going to be
the complement we are looking for, to find a solution to this problem. The second step is to look for that complement as a key
on a previous Map that we defined, If that key doesn't exist, we store the current number as a key and the current index as a value
on the Map. In this way, when we iterate over the next element, If the new complement exists as a key on the Map, 
we are going to return the value of that key (the index) and the current index of the actual number. The result is an algorithm 
that use only one loop and the methods of Map.get()/Map.set() that have 0(1) complexity, making the general complexity of the 
algorithm as O(n), faster solution than the firts one presented on the first approach.

To achieve this goal we also need to validate the given list by checking the length, elements value and the target.

## Complexity
Time O(n) ->
    Length validation has an O(1) time complexity.
    Validating value of each element on the list has an O(n) time complexity
    Having one loop to find the complement between each number and the target has an O(n) time complexity
    Using Map.get() and Map.set() to store or return key-value pairs has an O(1) time complexity

Space O(n) ->
    We need to store (n) elements on the map according to the length of the list
    and how fast it takes the algorithm to find an answer.

## Code

You can see the complete code in ./functions/numList.js -> findIndexTwoSum

```javascript
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
    if (numsMap.has(target - nums[i])) return [numsMap.get(target-nums[i]), i];
    numsMap.set(nums[i],i);
}
```

