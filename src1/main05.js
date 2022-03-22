const str =
`
010-1234-5678
Edit the Expression & Text to see matches. Roll over matches or the expression for details.
the aabbccddeeffgg
aaaaa
aaaa
aaa@naver.com
가나다라마바사
abc@gmail.com
http://www.naver.com
`

console.log(str.match(/[tro]/g));  // (28) ['t,t,r,o,t,t,o,t,o,o,r,t,o,r,t,r,o,o,r,t,t,r,o,o,t,t,r,o']
console.log(str.match(/[0-3]/g));  // (6) ['0,1,0,1,2,3']
console.log(str.match(/[가-다]/g)); //(3) ['가','나','다']
console.log(str.match(/a{2}/g));   // (6) ['aa','aa','aa','aa','aa','aa']
console.log(str.match(/a{2,}/g));  // (4) ['aa','aaaaa','aaaa','aaa']
console.log(str.match(/a{2,3}/g)); // (5) ['aa','aaa','aa','aaa','aaa] aaaa의 경우 2,3 중 더 큰 수인 3으로 적용해 1개임.