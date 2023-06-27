const inquirer = require("inquirer");
const fs = require("fs");
const generateShape = require("./lib/shapes.js");


const questions = [
    {
        name: "text",
        message: "What text do you want?"
    },
    {
        name: "textcolor",
        message: "What color do you want for the text?"
    },
    {
        name: "shape",
        message: "What shape do you want?",
        type: "list",
        choices: [
            "Circle",
            "Triangle",
            "Square"
        ],

    },
    {
        name: "shapecolor",
        message: "What color do you want for the shape?",
    }
    
];