const Shape = require('./shape.js');

class Circle extends Shape {
    render() {
        return `<circle cx='150' cy='100' r='80' fill='${this.shapeColor}' />`;
    }
}

module.exports = Circle;