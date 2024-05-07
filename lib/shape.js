class Shape {
    constructor(shapeColor) {
        this.shapeColor = shapeColor;
    }

    getElement(shape, text) {
        return `<svg width='300' height='200' xmlns='http://www.w3.org/2000/svg'>${shape}${text}</svg>`;
    }

    render() {
        throw new Error('Render should not be called on the parent');
    }
}

module.exports = Shape;
