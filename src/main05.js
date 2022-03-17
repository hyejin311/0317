const color =['red','blue','yellow','green'];

const [car,bus,,my] = color;
console.log(car);
console.log(my);


//전개연산자 -> 스프레드 연산자(...)
const fruit = ['apple','orange','banana'];
// console.log(fruit[0]); -> apple
// console.log(fruit[1]); -> orange
// console.log(fruit[2]); -> banana

console.log(...fruit);


function toOj(a,b,c){
    return {
        a:a,
        b:b,
        c:c
    }
}
console.log(toOj(fruit[0],fruit[1],fruit[2]));
console.log(toOj(...fruit));