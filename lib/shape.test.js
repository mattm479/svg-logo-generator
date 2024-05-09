const Shape = require('./shape.js');

describe('Shape', () => {
    describe('constructor', () => {
        it('should set text and shapeColor correctly', () => {
            const shapeColor = 'green';
            const shape = new Shape(shapeColor);

            expect(shape.shapeColor).toEqual(shapeColor);
        });

        it('should throw an error whe given an invalid shapeColor', () => {
            const shapeColor = 'rosemary';
            const shape = () => new Shape(shapeColor);

            expect(shape).toThrow('Shape color is not valid. Please try again.');
        });
    });

    describe('getElement', () => {
        it('should return the completed element correctly', () => {
            const shapeColor = 'green';
            const shapeElem = `<polygon points='0,200 300,200 150,0' fill='blue' />`;
            const textElem = `<text x='150' y='125' font-size='60' text-anchor='middle' fill='ffffff'>SVG</text>`;
            const element = `<svg width='300' height='200' xmlns='http://www.w3.org/2000/svg'>${shapeElem}${textElem}</svg>`;
            const shape = new Shape(shapeColor);

            expect(shape.getElement(shapeElem, textElem)).toEqual(element);
        });
    });

    describe('render', () => {
        it('should throw an error when render is called directly on the parent', () => {
            const shapeColor = 'green';
            const shape = new Shape(shapeColor);

            expect(() => shape.render()).toThrow('Render should not be called on the parent');
        });
    });
});