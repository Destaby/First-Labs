`use script`;

const array = [true, 'hello', 5, 12, -200, false, false, 'word', null, undefined]; 
let hash = {
    number: 0,
    string: 0,
    boolean: 0,
    object: 0,
    undefined: 0
};
for (let x of array) {
    hash[typeof x]++;
}
console.log(hash);

const hash1 = {};

for (let x of array) {
    hash1[typeof x] = isNaN(hash1[typeof x]) ? 1 : hash1[typeof x] + 1;
}
console.log(hash1);

