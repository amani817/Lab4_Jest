// arrayFunctions.test.js
const { first, last, concatenateStrings, chunk } = require('./arrayFunctions');
describe('Testing array functions', () => {
    test('first() returns the first n elements of an array', () => {
        expect(first([1, 2, 3, 4, 5], 3)).toEqual([1, 2, 3]);
        expect(first([1, 2, 3], 0)).toEqual([]);
        expect(first(null, 2)).toEqual([]);
        expect(first([1, 2, 3])).toEqual(1);
    });
    test('last() returns the last n elements of an array', () => {
        expect(last([1, 2, 3, 4, 5], 2)).toEqual([4, 5]);
        expect(last([1, 2, 3], 0)).toEqual([]);
        expect(last(null)).toEqual([]);
        expect(last([1, 2, 3])).toEqual(3);
    });
    test('concatenateStrings() joins all elements of an array into a string', () => {
        const colors = ["Red", "Green", "White", "Black"];
        expect(concatenateStrings(colors)).toEqual("Red, Green, White, Black");
    });
    test('chunk() divides an array into several sub-arrays of predefined size', () => {
        expect(chunk([1, 2, 3, 4, 5], 2)).toEqual([[1, 2], [3, 4], [5]]);
    });
});