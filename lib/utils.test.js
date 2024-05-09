const Utils = require('./utils.js');

describe('Utils', () => {
    describe('isValidColor', () => {
        it('should return true for a valid color', () => {
            const utils = new Utils();
            expect(utils.isValidColor('red')).toEqual(true);
        });

        it('should return false for a valid color', () => {
            const utils = new Utils();
            expect(utils.isValidColor('gaba gool')).toEqual(false);
        });
    });
});