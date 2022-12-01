// 1) declara função
function imprimeTexto(texto) {
    return console.log(texto)
}

// 2) função com return
function soma() {
    return 2 + 2    // return tem que ser a ultima linha
}

// 3) executa função// 3) função com return
function soma() {
    return 2 + 2
}

// 4) executando função
imprimeTexto('primeiro teste')
imprimeTexto('segundo teste')

// 4.1) executando função com return
imprimeTexto(soma());


function retornado() {
    return console.log('olá return')
}

retornado()