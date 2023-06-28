class Shape {
    constructor(text, textcolor, shapecolor) {
      this.text = text;
      this.textcolor = textcolor;
      this.shapecolor = shapecolor;
    }
  
    render() {
      // The render method is defined in the Shape class to provide a common interface,
      // but it will be overridden in the child classes to generate the specific SVG for each shape.
      throw new Error('Method not implemented');
    }
  }
  
  class Triangle extends Shape {
    render() {
      const triangleOutput = `
        <svg xmlns="http://www.w3.org/2000/svg" width="300" height="200">
          <polygon points="100,50 50,150 150,150" fill="${this.shapecolor}" />
          <text x="150" y="100" font-size="20" fill="${this.textcolor}">${this.text}</text>
        </svg>
      `;
      return triangleOutput;
    }
  }
  
  class Circle extends Shape {
    render() {
      const circleOutput = `
        <svg xmlns="http://www.w3.org/2000/svg" width="300" height="200">
          <circle cx="150" cy="100" r="100" fill="${this.shapecolor}" />
          <text x="150" y="100" font-size="20" fill="${this.textcolor}">${this.text}</text>
        </svg>
      `;
      return circleOutput;
    }
  }
  
  class Square extends Shape {
    render() {
      const squareOutput = `
        <svg xmlns="http://www.w3.org/2000/svg" width="300" height="200">
          <rect x="50" y="50" width="200" height="200" fill="${this.shapecolor}" />
          <text x="150" y="100" font-size="20" fill="${this.textcolor}">${this.text}</text>
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
  