class Student {
    fullName: string;
    constructor(public firstName, public middleInitial, public lastName) {
        this.fullName = firstName + " " + middleInitial + " " + lastName;
    }
}

class smallStudent extends Student {
    constructor(x, y, z) {
        super(x, y, z);
    }
    a() {
        [].map(() => {

        })
    }
}

interface Person {
    firstName: string;
    lastName: string;
}

function greeter(person : Person) {
    return "Hello, " + person.firstName + " " + person.lastName;
}

var user = new Student("Jane", "M.", "User");

document.body.innerHTML = greeter(user);


const a: number = 1;
const b: string = '2';
const c: boolean = true;
const d: Array<number> = [1, 2, 3];
let e : [number, string];
e = [1, '2'];


enum color { red, yellow, green }
let f:color = color.red;


let sure: Object = 4;
sure.toString();


let list: any[] = [1, , 'ss']
list[1] = true;



const wranUser = (): void => {
    alert(22222);
}


let someValue: any = 'this is string';

let strLength: number = (someValue as string).length;


let obj = {x: 1, y: 2};
const {x: xx, y: yy} : {x: number, y: number} = obj;

const obj2 = {...obj, y: 3};

interface SquareConfig {
    color?: string;
    width?: number;
    [propName: string]: any;
}

const createSquare = (config: SquareConfig): {color: number} => {
    console.log(config);
    let newSquare = {
        color: 111,
        area: 100,
    };
    if(config.color) {
        newSquare.color = Number(config.color);
    }
    return newSquare; 
}

createSquare({color: '1', width: 1, a: 1});



interface SearchFunc {
    (source: string, subString: string): boolean;
}

const mySearch: SearchFunc = (src, sub) => {
    return false;
}
mySearch('1', '2');

interface StringArray {
    [index: string]: string;
}

let myArray: StringArray;
myArray  = {x: '1'};
const myStr: string = myArray[1]


class Animal {
    name: string;
}
class Dog extends Animal {
    breed: string;
}
interface NotOkay {
    [x: number]: Dog;
    [x: string]: Animal;
}


interface NumberDictionnary {
    readonly [index: string]: Object;
    length: number;
    name: string;
}

const NumberDictionnaryObj: NumberDictionnary = {
    x: 1,
    length: 1,
    name: 'xxx'
}
const NumberDictionnaryObj2 = NumberDictionnaryObj as {[index: string]: Object;};
NumberDictionnaryObj2['x'] = 1;





interface ClockInterface {
    tick();
}
interface ClockConstructor {
    new (hour: number, minute: number): ClockInterface;
}
class AnalogClock implements ClockInterface {
    constructor(h: number, m: number) {

    }
    tick() {
        console.log('tick tock');
    }
}
const createClock = (ctor: ClockConstructor, hour: number, minute: number) : ClockInterface => {
    return new ctor(hour, minute);
}
const analog = createClock(AnalogClock, 12, 17);



interface Shape {
    color: string;
}
interface PenStroke {
    penWidth: number;
}
interface Square extends Shape, PenStroke {
    sideLenth: number;
}
const square = <Square>{};
square.color = 'bule';


interface Counter {
    (start: number): string;
    interval: number;
    reset(): void;
}


const getCounter = (): Counter => {

    

    
}