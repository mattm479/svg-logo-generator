const Shape = require('./shape.js');

class Triangle extends Shape {
    render() {
        return `<polygon points='0,200 300,200 150,0' fill='${this.shapeColor}' />`;
    }
}

module.exports = Triangle;
