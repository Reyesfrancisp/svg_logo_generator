class Shape {
    constructor(text, textcolor, shapecolor) {
      this.text = text;
      this.textcolor = textcolor;
      this.shapecolor = shapecolor;
    }
  
    makeTriangle() {
      const triangleOutput = `
        <svg xmlns="http://www.w3.org/2000/svg" width="300" height="200">
          <polygon points="150,18 244,182 56,182" fill="${this.shapecolor}" />
          <text x="100" y="120" font-size="20" fill="${this.textcolor}" text-anchor="middle">${this.text}</text>
        </svg>
      `;
      return triangleOutput;
    }
  
    makeCircle() {
      const circleOutput = `
        <svg xmlns="http://www.w3.org/2000/svg" width="300" height="200">
          <circle cx="150" cy="100" r="50" fill="${this.shapecolor}" />
          <text x="150" y="110" font-size="20" fill="${this.textcolor}" text-anchor="middle">${this.text}</text>
        </svg>
      `;
      return circleOutput;
    }
  
    makeSquare() {
      const squareOutput = `
        <svg xmlns="http://www.w3.org/2000/svg" width="300" height="200">
          <rect x="50" y="50" width="200" height="100" fill="${this.shapecolor}" />
          <text x="150" y="120" font-size="20" fill="${this.textcolor}" text-anchor="middle">${this.text}</text>
        </svg>
      `;
      return squareOutput;
    }
  }
  
  module.exports = Shape;
  