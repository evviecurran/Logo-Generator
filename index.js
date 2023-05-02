const filesystem = require 
const inquirer = require("inquirer");
const fs =require("fs");
const {Triangle, Circle, Square} = require(" ")

class SVG{
    constructor(){
        this.textElement = ''
        this.shapeElement = ''
    }
    render(){
        return 'svg'
    }
    setTextElement(text,color){
        this.textElement = 
    }
    setShapeElement(shape){
        this.shapeElement = shape.render()
    }
}

const questions = [
    {
        type: "input",
        name: "text",
        message: "TEXT: Enter up to 3 characters", 
    },
    {
        type: "input",
        name: "text-color",
        message: "TEXT COLOR: Enter a color: ",
    },
    {
        type: "input",
        name: "shape",
        message: "SHAPE COLOR: enter a color: ",
    },
    {
        type: "list",
        name: "image",
        message: "Choose which image you would like",
        choices: ["Triangle", "Circle", "Square"],
    },
    {
        type: "input",
        message: "Choose shapes color",
        name: "shapeBackgroundColor",
    },

]


