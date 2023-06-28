const Triangle = require("./shapes.js").Triangle;
const Circle = require("./shapes.js").Circle;
const Square = require("./shapes.js").Square;

describe("Triangle", () => {
    it("should render a triangle with the given color", () => {
      const shape = new Triangle();
      shape.setColor("pink");
      const expectedOutput = '<polygon points="150,18 244,182 56,182" fill="pink" />';
      expect(shape.render()).toContain(expectedOutput);
    });
  
    it("should render a triangle with default color if color is not set", () => {
      const shape = new Triangle();
      const expectedOutput = '<polygon points="150,18 244,182 56,182" fill="black" />';
      expect(shape.render()).toContain(expectedOutput);
    });
  
    it("should render a triangle with updated color after setting", () => {
      const shape = new Triangle();
      shape.setColor("#567567");
      const expectedOutput = '<polygon points="150,18 244,182 56,182" fill="#567567" />';
      expect(shape.render()).toContain(expectedOutput);
    });
  
    it("should render a triangle with updated text color after setting", () => {
      const shape = new Triangle();
      shape.setTextColor("red");
      const expectedOutput = '<text x="150" y="120" font-size="32" fill="red" text-anchor="middle" alignment-baseline="central">SVG</text>';
      expect(shape.render()).toContain(expectedOutput);
    });
  
    it("should render a triangle with updated text after setting", () => {
      const shape = new Triangle();
      shape.setText("LOG");
      const expectedOutput = '<text x="150" y="120" font-size="32" fill="white" text-anchor="middle" alignment-baseline="central">LOG</text>';
      expect(shape.render()).toContain(expectedOutput);
    });
  });
  

describe("Circle", () => {
    it("Should render a circle with the given color", () => {
      const shape = new Circle();
      shape.setColor("#6AB583");
      const expectedOutput = '<circle cx="150" cy="100" r="75" fill="#6AB583" />';
      expect(shape.render()).toContain(expectedOutput);
    });
  
    it("Should render a circle with default color if color is not set", () => {
      const shape = new Circle();
      const expectedOutput = '<circle cx="150" cy="100" r="75" fill="black" />';
      expect(shape.render()).toContain(expectedOutput);
    });
  
    it("Should render a circle with updated color after setting", () => {
      const shape = new Circle();
      shape.setColor("green");
      const expectedOutput = '<circle cx="150" cy="100" r="75" fill="green" />';
      expect(shape.render()).toContain(expectedOutput);
    });
  
    it("Should render a circle with updated text color after setting", () => {
      const shape = new Circle();
      shape.setTextColor("blue");
      const expectedOutput = '<text x="150" y="100" font-size="32" fill="blue" text-anchor="middle" alignment-baseline="central">SVG</text>';
      expect(shape.render()).toContain(expectedOutput);
    });
  
    it("Should render a circle with updated text after setting", () => {
      const shape = new Circle();
      shape.setText("Hello");
      const expectedOutput = '<text x="150" y="100" font-size="32" fill="white" text-anchor="middle" alignment-baseline="central">Hello</text>';
      expect(shape.render()).toContain(expectedOutput);
    });
  });
  

  describe("Square", () => {
    it("Should render a square with the given color", () => {
      const shape = new Square();
      shape.setColor("orange");
      const expectedOutput = '<rect x="0" y="0" width="200" height="200" fill="orange" />';
      expect(shape.render()).toContain(expectedOutput);
    });
  
    it("Should render a square with default color if color is not set", () => {
      const shape = new Square();
      const expectedOutput = '<rect x="0" y="0" width="200" height="200" fill="black" />';
      expect(shape.render()).toContain(expectedOutput);
    });
  
    it("Should render a square with updated color after setting", () => {
      const shape = new Square();
      shape.setColor("#015182");
      const expectedOutput = '<rect x="0" y="0" width="200" height="200" fill="#015182" />';
      expect(shape.render()).toContain(expectedOutput);
    });
  
    it("Should render a square with updated text color after setting", () => {
      const shape = new Square();
      shape.setTextColor("red");
      const expectedOutput = '<text x="100" y="100" font-size="32" fill="red" text-anchor="middle" alignment-baseline="central">SVG</text>';
      expect(shape.render()).toContain(expectedOutput);
    });
  
    it("Should render a square with updated text after setting", () => {
      const shape = new Square();
      shape.setText("Hello");
      const expectedOutput = '<text x="100" y="100" font-size="32" fill="white" text-anchor="middle" alignment-baseline="central">Hello</text>';
      expect(shape.render()).toContain(expectedOutput);
    });
  });
  