//Constructor classes ES6
class React {
    constructor(){
        this.props = {}
    }
}

class Ford extends Car {
    constructor(){
        super()
        this.windows = 4;
    }

}
const car = new Car();
const ford = new Ford();

console.log(ford.wheels)