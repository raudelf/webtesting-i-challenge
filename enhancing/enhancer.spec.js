const {succeed, fail, repair} = require('./enhancer.js');
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

describe('success', () => {
    it('Should increase enhancement', () => {
        const item = {
            name: 'Test Item',
            enhancement: 15
        };

        const expectedResult = {...item, enhancement: 16};

        expect(succeed(item)).toEqual(expectedResult);
    });

    it('Should return a string error and item', () => {
        const item = {
            name: 'Test Item',
            enhancement: 20
        };

        expect(succeed(item)).toBe(`${item.name} is already at max enhancement!`);
    });
});

describe('fail', () => {
    it('Should decrease 5 from durability', () => {
        const item = {
            enhancement: 10,
            durability: 10
        };

        const expectedResult = {
            enhancement: 10,
            durability: 5
        };

        expect(fail(item)).toEqual(expectedResult);
    });

    it('Should decrease 10 from durability', () => {
        const item = {
            enhancement: 15,
            durability: 20
        };

        const expectedResult = {
            enhancement: 15,
            durability: 10
        };

        expect(fail(item)).toEqual(expectedResult);
    });

    it('Should decrease 1 from enhancement and 10 from durability', () => {
        const item = {
            enhancement: 19,
            durability: 20
        };

        const expectedResult = {
            enhancement: 18,
            durability: 10
        };

        expect(fail(item)).toEqual(expectedResult);
    });
});