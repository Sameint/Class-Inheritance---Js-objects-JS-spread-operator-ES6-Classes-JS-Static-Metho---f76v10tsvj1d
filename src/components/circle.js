// import using require
const Shape = require('./shape');
// declare class
class Circle extends Shape{
alculateArea(radius) {
        return Math.PI * Math.pow(radius, 2);
    }
}

module.exports=Circle;
