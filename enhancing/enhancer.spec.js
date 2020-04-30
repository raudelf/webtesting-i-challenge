const {succeed, fail, repair, get} = require('./enhancer.js');
// test away!

describe('repair', () => {
    it('Should bring durability to 100', () => {
        const item = {
            enhancement: 10,
            durability: 20
        };
        
        const expectedResult = {
            enhancement: 10,
            durability: 100
        };

        expect(repair(item)).toEqual(expectedResult);
    });

    it('Should return a string error', () => {
        const item = {
            enhancement: 25,
            durability:10
        };

        expect(repair(item)).toBe("Item enhancement or durability is not within range!");
    });
});