function validarForm() {
    var
        name = document.getElementById("nome").value,
        email = document.getElementById("email").value,
        message = document.getElementById("mensagem").value;

    if (name == "" || email == "" || message == "") {
        alert("Os campos 'nome', 'email' e 'mensagem' precisam ser preenchidos!");
    }

    if (name != "" && email != "" && mensagem != "") {
        alert("Dados enviados com sucesso!");
    }
}