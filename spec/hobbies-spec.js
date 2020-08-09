const hobbies = require('../hobbies');

describe("API unit test suite", () => {
    describe("getHobbies", () => {
        const list = hobbies.getHobbies();

        it("returns 4 hobbies", () => {
            expect(list.length).toEqual(5);
        });

        it("return 'sports' as first hobby", () => {
            expect(list[0]).toBe('sports');
        });
    });
});