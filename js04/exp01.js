const str=
`
010-1234-5678
Edit the Expression & Text to see matches. Roll over matches or the expression for details. PCRE & JavaScript flavors of RegEx are supported. Validate your expression with Tests mode.
the aabbccddeeffgg
The aabbccddeeffgg
aaa@naver.com
abc@gmail.com
`

//생성자 방식
const regEx = new RegExp('the','gi');
console.log(str.match(regEx));


//리터널 방식
const regEx2 = /aaa/gi;
console.log(str.match(regEx2));