// Define a base Shape class
class Shape {
  constructor(text = "SVG", textcolor = "white", shapecolor = "black") {
    this.text = text; // The text content of the shape (default: "SVG")
    this.textcolor = textcolor; // The color of the text (default: "white")
    this.shapecolor = shapecolor; // The color of the shape (default: "black")
  }

  // Method to set the color of the shape
  setColor(shapeColor) {
    this.shapecolor = shapeColor;
  }

  // Method to set the color of the text
  setTextColor(textColor) {
    this.textcolor = textColor;
  }

  // Method to set the text content
  setText(inputText) {
    this.text = inputText;
  }
}

// Define a Triangle class that extends the Shape class
class Triangle extends Shape {
  render() {
    const trianglePoints = "150,18 244,182 56,182"; // Adjust the points of the triangle as needed

    const triangleOutput = `
      <svg xmlns="http://www.w3.org/2000/svg" width="300" height="200">
        <polygon points="${trianglePoints}" fill="${this.shapecolor}" />
        <text x="150" y="120" font-size="32" fill="${this.textcolor}" text-anchor="middle" alignment-baseline="central">${this.text}</text>
      </svg>
    `;
    return triangleOutput;
  }
}

// Define a Circle class that extends the Shape class
class Circle extends Shape {
  render() {
    const circleRadius = 75; // Adjust the radius
    const circleCenterX = 150; // Adjust the x
    const circleCenterY = 100; // Adjust the y

    const circleOutput = `
      <svg xmlns="http://www.w3.org/2000/svg" width="300" height="200">
        <circle cx="${circleCenterX}" cy="${circleCenterY}" r="${circleRadius}" fill="${this.shapecolor}" />
        <text x="${circleCenterX}" y="${circleCenterY}" font-size="32" fill="${this.textcolor}" text-anchor="middle" alignment-baseline="central">${this.text}</text>
      </svg>
    `;
    return circleOutput;
  }
}

// Define a Square class that extends the Shape class
class Square extends Shape {
  render() {
    const squareSize = 150; // Adjust the size of the square as needed

    const squareOutput = `
      <svg xmlns="http://www.w3.org/2000/svg" width="${squareSize}" height="${squareSize}">
        <rect x="0" y="0" width="${squareSize}" height="${squareSize}" fill="${this.shapecolor}" />
        <text x="${squareSize / 2}" y="${squareSize / 2}" font-size="32" fill="${this.textcolor}" text-anchor="middle" alignment-baseline="central">${this.text}</text>
      </svg>
    `;
    return squareOutput;
  }
}

// Export the Shape, Triangle, Circle, and Square classes
module.exports = {
  Shape,
  Triangle,
  Circle,
  Square,
};
