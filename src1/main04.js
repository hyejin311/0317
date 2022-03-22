const str =
`
010-1234-5678
Edit the Expression & Text to see matches. Roll over matches or the expression for details. PCRE & JavaScript flavors of RegEx are supported. Validate your expression with Tests mode.
the aabbccddeeffgg
The aabbccddeeffgg
aaa@naver.com
abc@gmail.com
haap
https
http://www.naver.com
`;

console.log(str.match(/h..p/gm)); // (2) ['haap','http']
console.log(str.match(/for|to/gm));  // (2) ['to','for']
console.log(str.match(/https?/gm));  // /http?/gm 의 값도 ['http'] , /https?/gm 의 값도 ['http']로 value 가 같다.
console.log(str.match(/^0/gm));    //['0']
console.log(str.match(/m$/gm));    // (3) ['m','m','m']