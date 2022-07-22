const {shuffleArray} = require('./utils')

describe('shuffleArray should', () => {
    // test('shuffleArray should return an array', () => {
    //     expect(shuffleArray.isArray().toBe(true))
    // })

    test('shuffleArray should return an array of same length', () => {
        expect(shuffleArray.length().toEqual(shuffleArray.length))
    })

    test('shuffleArray should return an array of same items', () => {
        const allEqual = shuffleArray => shuffleArray.every(val => val === shuffleArray[0]);
    })
})