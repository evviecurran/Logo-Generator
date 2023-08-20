const fs = require('fs');
const inquirer = require('inquirer');
const { Triangle, Circle, Square } = require('./lib/shapes');

inquirer
  .prompt([
    {
      type: 'input',
      name: 'text',
      message: 'Enter up to three characters:',
      validate: (input) => (input.length <= 3 ? true : 'Please enter up to three characters.'),
    },
    {
      type: 'input',
      name: 'textColor',
      message: 'Enter the text color (color keyword or hexadecimal):',
    },
    {
      type: 'list',
      name: 'shape',
      message: 'Choose a shape:',
      choices: ['triangle', 'circle', 'square'],
    },
    {
      type: 'input',
      name: 'shapeColor',
      message: 'Enter the shape color (color keyword or hexadecimal):',
    },
  ])
  
  .then((answers) => {
    let shape;
    switch (answers.shape) {
      case 'triangle':
        shape = new Triangle(answers.shapeColor);
        break;
      case 'circle':
        shape = new Circle(answers.shapeColor);
        break;
      case 'square':
        shape = new Square(answers.shapeColor);
        break;
    }

    const svgContent = `
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 300 200" width="300" height="200">
        ${shape.render()}
        <text x="150" y="115" text-anchor="middle" font-size="48" fill="${answers.textColor}" font-family="times-new-roman">
          ${answers.text}
        </text>
      </svg>
    `;

    fs.writeFile('logo.svg', svgContent.trim(), (err) => {
      if (err) {
        console.error('Error generating logo:', err);
        process.exit(1);
      }
      console.log('Generated logo.svg');
    });
  });