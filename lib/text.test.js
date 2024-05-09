const Text = require('./text.js');

describe('Text', () => {
    describe('constructor', () => {
        it('should throw an error when the text is empty', () => {
            const text = () => new Text('', 'green');

            expect(text).toThrow('Logo text must be between 1 and 3 characters. Please try again.');
        });

        it('should throw an error when the text is too long', () => {
            const text = () => new Text('abcd', 'green');

            expect(text).toThrow('Logo text must be between 1 and 3 characters. Please try again.');
        });

        it('should throw an error when the text color is invalid', () => {
            const text = () => new Text('abc', 'invalid');

            expect(text).toThrow('Text Color is not valid. Please try again.');
        });

        it('should set the text and color correctly', () => {
            const text = 'SVG';
            const color = 'white';
            const textObj = new Text(text, color);

            expect(textObj.text).toEqual(text);
            expect(textObj.color).toEqual(color);
        });
    });

    describe('render', () => {
        it('should render the text correctly', () => {
            const text = 'SVG';
            const color = 'white';
            const textObj = new Text(text, color);
            const expected = `<text x='150' y='125' font-size='60' text-anchor='middle' fill='${color}'>${text}</text>`;

            expect(textObj.render()).toEqual(expected);
        });
    });
});