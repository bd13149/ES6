/**
 * Created by Dell on 2016/11/14.
 */
class Cat {
    constructor(name) {
        this.name = name;
    }

    speak() {
        console.log(this.name + ' makes a noise.');
    }
}

class Lion extends Cat {
    constructor(name, color) {
        super(name); // Cat.prototype.constructor.call(this, name)或者Cat.call(this, name)
        this.color = color;
    }

    speak() {
        super.speak(); // Cat.prototype.speak.call(this)
        console.log(this.name + ' roars.');
    }
}

let a = {
    toString(){
        return 'My little pony' + super.toString();
    }
}