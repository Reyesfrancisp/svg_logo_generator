class Shape {
    constructor(text = "SVG", textcolor = "white", shapecolor = "black") {
      this.text = text;
      this.textcolor = textcolor;
      this.shapecolor = shapecolor;
    }
  setColor(shapeColor)
  {
    this.shapecolor = shapeColor;
  }

  setTextColor(textColor)
  {
    this.textcolor = textColor;
  }

  setText(inputText)
  {
    this.text = inputText;
  }

  }
  
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
  
  
  class Square extends Shape {
    render() {
      const squareSize = 200; // Adjust the size of the square as needed
  
      const squareOutput = `
        <svg xmlns="http://www.w3.org/2000/svg" width="${squareSize}" height="${squareSize}">
          <rect x="0" y="0" width="${squareSize}" height="${squareSize}" fill="${this.shapecolor}" />
          <text x="${squareSize / 2}" y="${squareSize / 2}" font-size="32" fill="${this.textcolor}" text-anchor="middle" alignment-baseline="central">${this.text}</text>
        </svg>
      `;
      return squareOutput;
    }
  }
  
  
  module.exports = {
    Shape,
    Triangle,
    Circle,
    Square,
  };
  