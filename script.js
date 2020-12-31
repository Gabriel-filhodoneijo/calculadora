let primeiroNumero = parseInt(prompt('Digite um número'))
let segundoNumero = parseInt(prompt('Digite outro número'))
let sinalDaOperacao = prompt('Digite o sinal da operação')
let soma = primeiroNumero + segundoNumero
let subtração = primeiroNumero - segundoNumero
let multiplicação = primeiroNumero * segundoNumero
let divisão = primeiroNumero / segundoNumero
if(sinalDaOperacao === '+'){
    alert(soma)
}
else if (sinalDaOperacao === '-'){
    alert(subtração)
}
else if (sinalDaOperacao === '/'){
    alert(divisão)
}
else if (sinalDaOperacao === '*'){
    alert(multiplicação)
}


