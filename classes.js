// console.log([] === []);
// console.log([] == []);

// var object1 = { value: 10 };
// var obj2 = object1;
// var obj3 = { value: 10 }
// console.log(object1 === obj2, object1 == obj2, object1 === object1)
// console.log(object1 === obj3, object1 == obj3)
// console.log(obj2 === obj3, obj2 == obj3)
// object1.value = 15
// console.log("Obj1: ", object1.value)
// console.log("Obj2: ", obj2.value)
// console.log("Obj3: ", obj3.value)

// const object4 = {
//     a: function () {
//         console.log("this: ", this)
//     }
// }

// object4.a();


class Player {
    constructor(name, type) {
        console.log("In Player: ", this)
        this.name = name;
        this.type = type;
    }

    introduce() {
        console.log(`Hi I'm ${this.name}, I'm a ${this.type}!`);
    }
}

class Wizard extends Player {
    constructor(name, type) {
        super(name, type);
        console.log("In Wiz: ", this);
    }

    play() {
        console.log(`Weeeee I'm a ${this.type}`);
    }
}

const w1 = new Wizard('Karu', 'Healer');
const w2 = new Wizard('Karr', 'Dark Magician');

w1.play();
w1.introduce();

w2.play();
w2.introduce();

