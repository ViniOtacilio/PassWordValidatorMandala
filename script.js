function checarSenha(texto) 
{ 
var senha = /^(?!.*[\W_])(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,32}$/; // Expressão regular que define as regras da validação da senha
if(texto.value.match(senha)) 
{ 
alert('Senha Válida.')
}
else
{ 
alert('Senha Inválida.')
}
}