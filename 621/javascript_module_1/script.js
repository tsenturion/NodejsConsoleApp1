const rectangle = {
    width: 10,
    height: 5,

    getArea() {
        return this.width * this.height;
    },

    getPerimeter() {
        return 2 * (this.width + this.height);
    }
};

console.log(rectangle.getArea());      // 50
console.log(rectangle.getPerimeter()); // 30