// 1) declara função
function imprimeTexto(texto) {
    return console.log(texto)
}

// 2) função com return
function soma() {
    return 2 + 2    // return tem que ser a ultima linha
}

// 3) executa função
imprimeTexto('primeiro teste')
imprimeTexto('segundo teste')

// 4) executando função com return
imprimeTexto(soma());


