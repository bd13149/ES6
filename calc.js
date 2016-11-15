/**
 * Created by Dell on 2016/11/11.
 */
class Calc{
    constructor(){
        console.log('Calc constructor');
    }

    add(a,b){
        return a + b;
    }
}

var c = new Calc();
console.log(c.add(2, 3));