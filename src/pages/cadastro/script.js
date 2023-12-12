function cadastrar() {
    const nome = document.getElementById("nome").value;
    const cpf = document.getElementById("cpf").value;
    const endereco = document.getElementById("endereco").value;
    const numero = document.getElementById("numero").value;
    const complemento = document.getElementById("complemento").value;
    const cep = document.getElementById("cep").value;
    const bairro = document.getElementById("bairro").value;
    const cidade = document.getElementById("cidade").value;
    const uf = document.getElementById("uf").value;
    const telefone = document.getElementById("telefone").value;
    const celular = document.getElementById("celular").value;
    const email = document.getElementById("email").value;
    const senha = document.getElementById("senha").value;
    const confirmeSenha = document.getElementById("confirmeSenha").value;

    if (validaCadastro()) {
        resultadoSection.innerHTML = "<p>Entrando...</p>";

        const dadosCadastro = {
            nome: nome,
            cpf: cpf,
            endereco: endereco,
            numero: numero,
            complemento: complemento,
            cep: cep,
            bairro: bairro,
            cidade: cidade,
            uf: uf,
            telefone: telefone,
            celular: celular,
            email: email,
            senha: senha,
            confirmeSenha: confirmeSenha,
        };

        axios.post('http://localhost:3000/cadastro', dadosCadastro, {
            headers: {
                'Content-Type': 'application/json',
            },
        })
        .then(response => {
            console.log(response.data);
        
            if (response.data && response.data.success) {
                resultadoSection.innerHTML = "<p>Cadastro realizado com sucesso!</p>";
            } else {
                resultadoSection.innerHTML = "<p>Erro ao cadastrar. Tente novamente.</p>";
            }
        })
        .catch(error => {
            console.error(error);
        
            if (error.response && error.response.status === 422) {
                resultadoSection.innerHTML = "<p>Erro de validação. Por favor, verifique os campos e tente novamente.</p>";
            } else {
                resultadoSection.innerHTML = "<p>Erro desconhecido. Tente novamente mais tarde.</p>";
            }
        });
    }}
        

function validaCadastro() {
 
    const email = document.getElementById("email").value;
    const senha = document.getElementById("senha").value;
    return validaEmail(email) && validaSenha(senha);
}

function validaEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const isValid = emailRegex.test(email);


    return isValid;
}

function validaSenha(senha) {

    const minCaracteresRegex = /^.{6,}$/;

    const minNumerosRegex = /^(.*?\d){3,}/;

    const minCaracterEspecialRegex = /^(.*?[!@#$%^&*()_+{}\[\]:;<>,.?~\\/-]){1,}/;

    const minLetraMaiusculaRegex = /^(.*?[A-Z]){1,}/;

    const isValid =
        minCaracteresRegex.test(senha) &&
        minNumerosRegex.test(senha) &&
        minCaracterEspecialRegex.test(senha) &&
        minLetraMaiusculaRegex.test(senha);

    return isValid;
}
    
