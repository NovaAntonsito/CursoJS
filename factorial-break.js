var num = 10,
    resultado = 1;

while (num) {
    if (num == 0 || num == 1) {
        break
    } else {
        resultado = resultado * num;
        num = num - 1;
    }
}
console.log(resultado);