'use strict';
//es6 feature: block-scoped 'let' declaration
const sentences = [
  { subject: 'JavaScript', verb: 'is', object: 'GREAT' },
  { subject: 'Elephants', verb: 'are', object: 'LARGE' },
];

//es6 feature: object destructuring
function say({ subject, verb, object }) {
  //es6 feature: template strings
  console.log(`${subject} ${verb} ${object}`);
}

//es6 feature: for..of
for(let s of sentences) {
  say(s);
}
