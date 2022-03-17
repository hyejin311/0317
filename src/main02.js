let Rectangle = class {
    constructor(height,width){
        this.height=height;
        this.width=width;
    }
    call(){
        return this.width * this.height;
    }
}

const my = new Rectangle(100,200);
console.log(my.call());



// class 가 아닌 let 으로 시작되었을 때는 class 명이 아닌 let 이름으로 매개변수 받아야 한다.//
// Rect O / Num X
let Rect =class Num{
    constructor(height,width){
        this.height=height;
        this.width=width;
    }
    call(){
        return this.width * this.height;
    }
}
const my1= new Rect(10,20);
console.log(my1.call());