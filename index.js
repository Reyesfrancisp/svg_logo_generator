// Import required modules
const inquirer = require("inquirer"); // Used for user prompts
const colorValidate = require("validate-color").default; // Used for color validation
const fs = require("fs"); // Used for file system operations
const { Shape, Triangle, Circle, Square } = require("./lib/shapes.js"); // Custom shape classes
const userPrompt = inquirer.createPromptModule(); // Create a prompt module

// Define an array of questions for the user prompt
const questions = [
  {
    name: "text",
    message: "What text do you want?",
    validate: function (input) {
      // Custom validation function for text input
      if (input.length <= 3) {
        return true; // Input is valid
      }
      return "Please enter three letters or less."; // Error message for invalid input
    },
  },
  {
    name: "textcolor",
    message: "What color do you want for the text?",
    validate: function (input) {
      // Custom validation function for color input
      if (colorValidate(input)) {
        return true; // Input is a valid color
      } else {
        return "Please enter a valid color or hex value (e.g. #000000)."; // Error message for invalid input
      }
    },
  },
  {
    name: "shape",
    message: "What shape do you want?",
    type: "list", // Prompt type is a list
    choices: ["Circle", "Triangle", "Square"], // Available shape choices
  },
  {
    name: "shapecolor",
    message: "What color do you want for the shape?",
    validate: function (input) {
      // Custom validation function for color input
      if (colorValidate(input)) {
        return true; // Input is a valid color
      } else {
        return "Please enter a valid color or hex value (e.g. #000000)."; // Error message for invalid input
      }
    },
  },
];

// Prompt the user with the questions and handle the answers
userPrompt(questions).then((answers) => {

  // Generate the SVG based on the provided answers
  let svg;
  switch (answers.shape) {
    case "Circle":
      svg = new Circle(answers.text, answers.textcolor, answers.shapecolor).render(); // Create a Circle shape instance
      break;
    case "Triangle":
      svg = new Triangle(answers.text, answers.textcolor, answers.shapecolor).render(); // Create a Triangle shape instance
      break;
    case "Square":
      svg = new Square(answers.text, answers.textcolor, answers.shapecolor).render(); // Create a Square shape instance
      break;
    default:
      console.error("Invalid shape"); // Log an error message for an invalid shape
      return;
  }

  // Save the SVG to a file
  fs.writeFile("./examples/logo.svg", svg, (err) => {
    if (err) {
      console.error("Error saving SVG:", err); // Log an error if saving the SVG fails
    } else {
      console.log("SVG saved to logo.svg"); // Log a success message if the SVG is saved successfully
    }
  });
});
