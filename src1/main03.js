let str =
`
Edit the Expression & Text to see matches. Roll over matches or the expression for details. PCRE & JavaScript flavors of RegEx are supported.
Validate your expression with Tests mode.
PCRE & JavaScript The flavors of RegEx are supported.
Validate your expresiion with Tests mode.
`

const r1 = /the/gi;
console.log(str.match(r1));

const r2 = /text/g;
console.log(str.match(r2));

const r3 = /\.$/gm;
console.log(str.match(r3));