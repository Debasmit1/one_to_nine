const dis = val => {
    document.getElementById("result").value += val;
}

const solve = () => {
    let x = document.getElementById("result").value;
    let y = eval(x);
    document.getElementById("result").value = y;
}

const clr = () => {
    document.getElementById("result").value = " ";
}