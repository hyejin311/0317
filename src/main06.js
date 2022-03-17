const color = ['red','blue','green','orange'];

//나머지 매개변수 :  rest parameter
// function myColor(a,b,...c){
//     return{
//     a:a,
//     b:b,
//     c:c
// }
// }

//1차 변형 (축약)
// function myColor(a,b,...c){
//     return{a,b,c

//     }
// }


//2차 변형 :화살표 함수
// const myColor = (a,b,...c) =>{return{a,b,c}}


//3차 변형
//return 을 빼면 남은 객체를 식으로 만들어야 함. ( 씌우기)
const myColor = (a,b,...c) => ({a,b,c})

console.log(myColor(...color));