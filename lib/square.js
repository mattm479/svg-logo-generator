const Shape = require('./shape.js');

class Square extends Shape {
    render() {
        return `<rect x='50' height='200' width='200' fill='${this.shapeColor}' />`;
    }
}

module.exports = Square;
