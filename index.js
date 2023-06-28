const inquirer = require("inquirer");
const fs = require("fs");
const generateShape = require("./lib/shapes.js");
const colorValidate = require("validate-color").default;
//const colorConvert = require("color-convert");

const userPrompt = inquirer.createPromptModule();

const questions = [
    {
        name: "text",
        message: "What text do you want?",
        validate: function (input) {
            if (input.length <= 3) {
              return true;
            }
            return 'Please enter three letters or less.';
          },
    },
    {
        name: "textcolor",
        message: "What color do you want for the text?",
        validate: function (input) {
          if (colorValidate(input)) {
            return true;
          } else
          return 'Please enter a valid color or hex value (e.g. #000000).';
        }
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
        validate: function (input) {
            if (colorValidate(input)) {
              return true;
            } else
            return 'Please enter a valid color or hex value (e.g. #000000).';
          }
    }
    
];


userPrompt(questions).then((answers) => console.log(answers));
