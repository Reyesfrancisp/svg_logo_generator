const inquirer = require("inquirer");
const fs = require("fs");
const generateShape = require("./lib/shapes.js");
const colorConvert = require("color-convert");

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
            if (isHexColor(input)) {
              return true;
            } else
            if (isColorName(input))
            {
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
            if (isHexColor(input)) {
              return true;
            } else
            if (isColorName(input))
            {
                return true;
            } else
            return 'Please enter a valid color or hex value (e.g. #000000).';
          }
    }
    
];


// Function to validate a hexadecimal color code
function isHexColor(str) {
  return colorConvert.hex.isValid(str);
}

// Function to validate a color name
function isColorName(str) {
  return colorConvert.keyword.exists(str);
}