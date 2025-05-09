document.getElementById('cadastroForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Evita que o formulário seja enviado da maneira padrão

    const nome = document.getElementById('nome_usuario').value;
    const email = document.getElementById('email_usuario').value;
    const senha = document.getElementById('senha_usuario').value;

    fetch('/cadastro', {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({ nome: nome, email: email, senha: senha }),
    })
    .then(response => response.json())
    .then(data => {
        if (data.success) {
            window.location.href = 'index.html'; // Redireciona para a página index.html
        } else {
            alert('Ocorreu um erro ao cadastrar. Por favor, tente novamente.');
        }
    })
    .catch((error) => {
        console.error('Erro:', error);
    });
});