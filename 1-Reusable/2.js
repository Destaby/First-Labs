`use script`;

for (let i = 15; i < 30;i += 2) {
    console.log(i);
}

const range = (start, end) => {
    for (start; start < end; start++) {
        if (start % 2 == 1) {
            console.log(start);
        }
    }
}
range(15, 30);
