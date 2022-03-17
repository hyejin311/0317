//import 로 불러들이기

import data from './data.json'; 
//js, node_modulers
import $ from 'jquery';

$(function(){
    $('body').text('welcome');
})

console.log(data);
console.log(data.array[1]);
console.log(data.obj.a);
console.log(typeof data);

//일반객체 -> json(string)
const color = {
    title :'red',
    sample :'apple',
    no: 100
}
console.log(typeof color);
const str =JSON.stringify(color);
console.log(str);
console.log(typeof str);

const obj = JSON.parse(str);
console.log(obj);