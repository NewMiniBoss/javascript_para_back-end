const objPersonagem = {
    nome: "Gandalf",
    classe: "mago",
    nivel: "20",

    aliado: {
        nome: "Saruman",
        classe: "mago"
    },

    status: "desaparecido"
}
console.log(objPersonagem)
// deletando aliado
delete objPersonagem.aliado
console.log(objPersonagem)
// deletando status
delete objPersonagem['status']
console.log(objPersonagem)