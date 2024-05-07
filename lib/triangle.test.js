const Triangle = require('./triangle.js');

describe('Triangle', () => {
    const shapeColor = 'green';
    const triangle = new Triangle(shapeColor);

    describe('constructor', () => {
        it('should set the shapeColor correctly', () => {
            expect(triangle.shapeColor).toEqual(shapeColor);
        });
    });

    describe('render', () => {
        it('should render the triangle correctly', () => {
            const expected = `<polygon points='0,200 300,200 150,0' fill='${shapeColor}' />`;

            expect(triangle.render()).toEqual(expected);
        });
    });
});