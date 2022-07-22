const {shuffleArray} = require('./utils')

describe('shuffleArray should', () => {
    // test('shuffleArray should return an array', () => {
    //     let array = [1, 2, 3, 4, 5]
    //     let originalLenght = array.length
    //     let shuffledArray = shuffleArray(array)
    //     let shuffleLength = shuffledArray.lenght
    //     expect(shuffleLength).toEqual(originalLenght)
    // })

    test('shuffleArray should return an array of same length', () => {
        expect(shuffleArray.length().toEqual(shuffleArray.length))
    })

    test('shuffleArray should return an array of same items', () => {
        const allEqual = shuffleArray => shuffleArray.every(val => val === shuffleArray[0]);
    })
})
