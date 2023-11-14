function exibirMensagem() {
    var email = document.getElementById("email").value;
    var senha = document.getElementById("senha").value;
    var resultadoSection = document.getElementById("resultado");
    resultadoSection.innerHTML = "<p>Botão clicado!</p>";

    // Validar e-mail e senha (adapte conforme necessário)
    var emailValido = validaEmail(email);
    var senhaValida = validaSenha(senha);

    if (emailValido && senhaValida) {
        resultadoSection.innerHTML = "<p>Entrando...</p>";
    } else {
        resultadoSection.innerHTML = '<p>Credenciais inválidas. Por favor, verifique e tente novamente.</p>';
    }
}

function validaEmail(email) {
    // Adicione lógica de validação de e-mail aqui
    // Retorne true se o e-mail for válido, false caso contrário
    return true;
}

function validaSenha(senha) {
    // Adicione lógica de validação de senha aqui
    // Retorne true se a senha for válida, false caso contrário
    return true;
}
