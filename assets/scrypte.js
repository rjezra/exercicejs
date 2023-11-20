const screen = document.querySelector('#screen');
const btn = document.querySelectorAll('.button');
/*
for (let item of btn) {
    item.addEventListener('click', (e) => {
        btntext = e.target.innerText;
        if (btntext == 'x') {
            btntext = '*';
        }
        if (btntext == '÷') {
            btntext = '/';
        }
        screen.value += btntext;


    });
}
*/
for (let item of btn) {
    item.addEventListener('click', (e) => {
        const btntext = e.target.innerText;
        const lastChar = screen.value.charAt(screen.value.length - 1);
        if (isOperator(lastChar) && isOperator(btntext)) {
            return;
        }
        screen.value += btntext;
        console.log(btntext);
    });
}

function isOperator(char) {
    return ['+', '-', '*', '/', '%'].includes(char);
}

function sin() {
    screen.value = Math.sin(screen.value);
}
function cos() {
    screen.value = Math.cos(screen.value);
}
function pow() {
    screen.value = Math.pow(screen.value, 2);
}


function tan() {
    screen.value = Math.tan(screen.value);
}


function sqrt() {
    screen.value = Math.sqrt(screen.value, 2);
}
function log() {
    screen.value = Math.log(screen.value);
}
function pi() {
    screen.value = 3.14159265359;
}
function e() {
    screen.value = Math.exp(screen.value);
}

function fact() {
    var i, nombre, k;
    k = 1;
    nombre = screen.value;
    for (i = 1; i <= nombre; i++) {
        k = k * i;
    }
    i = i - 1;
    screen.value = k;
}
function back() {
    screen.value = screen.value.substr(0, screen.value.length - 1);
}
function egal() {
    if (screen.value != '') {
        try {
            screen.value = eval(screen.value);
        } catch (error) {
            screen.value = 'Erreur';
        }
    } else {
        screen.value = 0;
    }

}