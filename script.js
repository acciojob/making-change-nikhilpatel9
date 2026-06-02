const makeChange = (c) => {
    let total = parseInt(c);

    let q = Math.floor(total / 25);
    total %= 25;

    let d = Math.floor(total / 10);
    total %= 10;

    let n = Math.floor(total / 5);
    total %= 5;

    let p = total;

    return { "q": q, "d": d, "n": n, "p": p };
};

const c = prompt("Enter c: ");
alert(JSON.stringify(makeChange(c)));

