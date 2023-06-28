const inquirer = require("inquirer");
const colorValidate = require("validate-color").default;
const fs = require("fs");
const { Shape, Triangle, Circle, Square } = require("./lib/shapes.js");
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
    choices: ["Circle", "Triangle", "Square"],
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
  },
];

userPrompt(questions).then((answers) => {

  // Generate the SVG based on the provided answers
  let svg;
  switch (answers.shape) {
    case "Circle":
      svg = new Circle(answers.text, answers.textcolor, answers.shapecolor).render();
      break;
    case "Triangle":
      svg = new Triangle(answers.text, answers.textcolor, answers.shapecolor).render();
      break;
    case "Square":
      svg = new Square(answers.text, answers.textcolor, answers.shapecolor).render();
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
