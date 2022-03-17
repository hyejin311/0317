// 객체 할당 기본 시스템

// a1~a4 중 내가 사용할 객체의 부분만 사용하는 방법
const {a1,a2,a3} = {
    a1:10,
    a2:20,
    a3:30,
    a4:40}
console.log(a1);


//
const book= {
    type: 'it',
    title: 'html',
    price: '20000',
    // level 이 없을 경우엔 0이 나오지만
    //객체에 level 값이 있을 경우 객체의 값으로 나온다.
    level :3
}

//할당 값이 없는 경우 추가 데이터 할당
//기본 할당 값, 추가된 할당 충돌 -> 기본 할당 값 이긴다.
const {type,title,price,level=0} = book;

console.log(type);
console.log(level);


//기본 할당 이름(키의 변경) -> 이름의 변경 필요
//type :'it' 였지만 const welcome 으로 type을 불러와 이름을 변경함.
const welcome = type;
console.log(welcome); 


//
const graphic={
    some:'paint',
    bookname:'painter'
}

const {some:subtitle,bookname} = graphic;
console.log(subtitle);
