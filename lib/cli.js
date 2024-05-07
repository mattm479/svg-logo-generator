const inquirer = require('inquirer');
const File = require('./file.js');
const Circle = require('./circle.js');
const Square = require('./square.js');
const Triangle = require('./triangle.js');
const Text = require('./text.js');

class CLI {
    questions = [
        {
            type: "input",
            name: "text",
            message: "PLease type in the text to show in your logo(3 characters max)"
        },
        {
            type: "input",
            name: "textColor",
            message: "Please type in the color of the text(You can use a CSS color keyword or Hexadecimal value)"
        },
        {
            type: "list",
            name: "shape",
            message: "Please select the shape of your logo from the list below",
            choices: [
                "Circle",
                "Square",
                "Triangle"
            ]
        },
        {
            type: "input",
            name: "shapeColor",
            message: "Please type in the color of the shape(You can use a CSS color keyword or Hexadecimal value)"
        }
    ];

    run() {
        const dir = './dist';
        const fileName = 'logo.svg';

        inquirer
            .prompt(this.questions)
            .then((answers) => {
                const shape = eval(`new ${answers.shape}(answers.shapeColor)`);
                const text = new Text(answers.text, answers.textColor);
                const file = new File(dir, fileName);

                file.writeToFile(shape.getElement(shape.render(), text.render()));
            })
            .catch(err => console.error(err));
    }
}

module.exports = CLI;