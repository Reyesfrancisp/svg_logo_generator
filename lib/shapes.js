const { SVG } = require("svg");


class Shape
{
    constructor(text, textcolor, shapecolor){
    
    this.text = text,
    this.textcolor = textcolor,
    this.shapecolor = shapecolor
}

}

class Triangle extends Shape{}

class Circle extends Shape{}

class Square extends Shape{}
