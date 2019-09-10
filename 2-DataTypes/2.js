`use script`;

const inc = x => {
    return x**2;
}

const a = 5;
const b = inc(a);
console.dir({a, b});

const anotherInc = num => {
    return --num.n;
}

const object = {n: 5};
anotherInc(object);
console.dir(object);

