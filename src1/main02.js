let str =
`
010-1234-5678
Edit the Expression & Text to see matches. Roll over matches or the expression for details. PCRE & JavaScript flavors of RegEx are supported. Validate your expression with Tests mode.
the aabbccddeeffgg
The aabbccddeeffgg
aaa@naver.com
abc@gmail.com
cde@daum.net
`

let re = /see/gi;
let re1 = /daum/gi;

console.log(re.test(str));
console.log(str.match(re));

console.log(re1.test(str));

let str2 = `aaa@naver.com`;
// 문자열.replace(정규식,'문자열')
let re2 = /naver/gi;
console.log(str2.replace(re2,'gmail'));

str2 = str2.replace(re2,'gmail');
console.log(str2);