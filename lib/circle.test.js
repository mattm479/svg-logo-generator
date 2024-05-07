const Circle = require('./circle.js');

describe('Circle', () => {
    const shapeColor = 'green';
    const circle = new Circle(shapeColor);

    describe('constructor', () => {
        it('should set the shapeColor correctly', () => {
            expect(circle.shapeColor).toEqual(shapeColor);
        });
    });

    describe('render', () => {
        it('should render the circle correctly', () => {
            const expected = `<circle cx='150' cy='100' r='80' fill='${shapeColor}' />`;

            expect(circle.render()).toEqual(expected);
        });
    });
});