const Square = require('./square.js');

describe('Square', () => {
    const shapeColor = 'green';
    const square = new Square(shapeColor);

    describe('constructor', () => {
        it('should set the shapeColor correctly', () => {
            expect(square.shapeColor).toEqual(shapeColor);
        });
    });

    describe('render', () => {
        it('should render the square correctly', () => {
            const expected = `<rect x='50' height='200' width='200' fill='${shapeColor}' />`;

            expect(square.render()).toEqual(expected);
        });
    });
});