function* generatorFunction() {
  for (let i = 0; i < 5; i++) {
    yield i;
  }
}

const iter = generatorFunction();

const num = [8, 7, 5, 0, 4];
console.log(num);

console.log(iter.next());
console.log(iter.next());
console.log(iter.next());
console.log(iter.next());
console.log(iter.next());
console.log(iter.next());
console.log(iter.next());

console.log('hgjghnfgnf');
const num = 6
if (num) {
    console.log('hgfjgfjnfgjf');
}