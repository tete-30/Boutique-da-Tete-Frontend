

function validaEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}

function validaSenha(senha) {
    return senha.length >= 6; 
}

function exibirMensagem() {
    const resultadoSection = document.getElementById("resultadoSection");
    
    if (!resultadoSection) {
        console.error("Elemento com ID 'resultadoSection' não encontrado.");
        return;
    }
    const email = document.getElementById("email").value;
    const senha = document.getElementById("senha").value;

    resultadoSection.innerHTML = `
    <p>email: ${email}</p>
    <p>senha: ${senha}</p>
    
    `;
    var emailValido = validaEmail(email);
    var senhaValida = validaSenha(senha);

    if (emailValido && senhaValida) {
        resultadoSection.innerHTML = "<p>Entrando...</p>";
        const dadosLogin = {
            email: email,
            senha: senha
        };

        axios.post('http://localhost:3000/login', dadosLogin, {
            headers: {
                'Content-Type': 'application/json',
            },
        })
        .then(response => {
            console.log(response.data);

            if (response.data && response.data.message === "Login efetuado com sucesso!") {
                resultadoSection.innerHTML = "<p>Login efetuado com sucesso!</p>";
            } 
        })
        .catch(error => {
            console.error(error);
            resultadoSection.innerHTML = "<p>Erro ao fazer login. Tente novamente mais tarde.</p>";
        });

    } else {
        resultadoSection.innerHTML = '<p>Credenciais inválidas. Por favor, verifique e tente novamente.</p>';
    }
}