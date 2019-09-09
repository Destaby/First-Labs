`use script`;

let average = (a, b) => {
    return (a+b)/2;
}

let square = x => {
    return  x ** 2;
}

let cube = x => {
    return x ** 3;
}

for (let i = 0; i < 7; i++) {
    console.log(average(square(i), cube(i)));
}
