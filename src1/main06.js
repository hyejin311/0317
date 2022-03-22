const str=
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
`;

// \b -> 단어의 처음/끝                        \B -> 단어의 처음/끝이 아님
// \d -> 숫자                                  \D -> 숫자가 아닌 것
// \w -> 영어 알파벳,숫자,언더스코어(_)          \W -> \w 가 아닌 것
console.log(str.match(/\bf\w{1,}/g));      //['for']
console.log(str.match(/\d/g));             //(11) ['0,1,0,1,2,3,4,5,6,7,8']


// \s -> 공백인 것    \S 공백이 아닌 것
const h = ` the      Str      num`;
console.log(h.match(/\s/g));              //(13) [' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ']
console.log(h.replace(/\s/g,''));         //theStrnum


const g = `abc@gmail.com`;
console.log(g.match(/.{1,}(?=@)/g));      //['abc']    @앞의 모든 1개 이상의 아무 글자
console.log(g.match(/(?<=@).{1,}/g));     //['gmail.com'] @ 뒤의 모든 1개 이상의 아무 글자