
class Shape
{
    constructor(text, textcolor, shapecolor){
    
    this.text = text,
    this.textcolor = textcolor,
    this.shapecolor = shapecolor
}

}

class Triangle extends Shape{
    
    makeTriangle(text, textcolor, shapecolor)
    {
        const svgContent = `
        <svg xmlns="http://www.w3.org/2000/svg" width="300" height="200">
        <polygon points="100,50 50,150 150,150" fill="${shapecolor}" />
          <text x="150" y="100" font-size="20" fill="${textcolor}">${text}</text>
        </svg>
      `;
    }
}

class Circle extends Shape{}

class Square extends Shape{}
