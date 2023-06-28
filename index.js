const inquirer = require("inquirer");
const colorValidate = require("validate-color").default;
const fs = require("fs");
const Shape = require("./lib/shapes.js");
const userPrompt = inquirer.createPromptModule();

const questions = [
  {
    name: "text",
    message: "What text do you want?",
    validate: function (input) {
      if (input.length <= 3) {
        return true;
      }
      return "Please enter three letters or less.";
    },
  },
  {
    name: "textcolor",
    message: "What color do you want for the text?",
    validate: function (input) {
      if (colorValidate(input)) {
        return true;
      } else {
        return "Please enter a valid color or hex value (e.g. #000000).";
      }
    },
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
      } else {
        return "Please enter a valid color or hex value (e.g. #000000).";
      }
    },
  }
];

userPrompt(questions).then((answers) => {
  // Create an instance of the Shape class based on the selected shape
   const shape = new Shape(answers.text, answers.textcolor, answers.shapecolor);

  // Generate the SVG based on the provided answers
  let svg;
  switch (answers.shape) {
    case "Circle":
      svg = shape.makeCircle();
      break;
    case "Triangle":
      svg = shape.makeTriangle();
      break;
    case "Square":
      svg = shape.makeSquare();
      break;
    default:
      console.error("Invalid shape");
      return;
  }

  // Save the SVG to a file
  fs.writeFile("logo.svg", svg, (err) => {
    if (err) {
      console.error("Error saving SVG:", err);
    } else {
      console.log("SVG saved to logo.svg");
    }
  });
});