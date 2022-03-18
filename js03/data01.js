//주소 기억해서 데이터로 저장이 된다.
localStorage.setItem('book','javascript');
localStorage.setItem('it','html');
const str = localStorage.getItem('book');
console.log(str);

//객체 사용법
const color= {
    title:'red',
    sample:'apple',
    no:['no01','no02']
}
// 잘못된 예제
// localStorage.setItem('sample',color);


//객체 -> JSON 형태의 string 데이터로 만들기 : stringify -> storage
const some = JSON.stringify(color);
//console.log(some);
localStorage.setItem('some',some);
const obj = JSON.parse(localStorage.getItem('some'));
console.log(obj);
console.log(obj.sample);
console.log(obj.no);
console.log(obj.no[0]);


// localStorage.removeItem('sample');