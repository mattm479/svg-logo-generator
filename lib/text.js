const Utils = require('./utils.js');

class Text {
    utils = new Utils();

    constructor(text, color) {
        if (text.length < 1 || text.length > 3) throw new Error('Logo text must be between 1 and 3 characters. Please try again.');
        if (!this.utils.isValidColor(color)) throw new Error('Text Color is not valid. Please try again.');

        this.text = text;
        this.color = color;
    }

    render() {
        return `<text x='150' y='125' font-size='60' text-anchor='middle' fill='${this.color}'>${this.text}</text>`;
    }
}

module.exports = Text;
