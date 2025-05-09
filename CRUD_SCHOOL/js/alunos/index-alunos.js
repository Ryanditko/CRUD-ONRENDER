
import apiAlunos from "../alunos/alunos.js"
// criando as variaveis que irão receber os danos cadastrados na seção aluno
const formulario = document.getElementById('alunosForm')
const input_Nome_aluno = document.getElementById('nome_aluno')
const input_Email = document.getElementById('email_aluno') 
const input_Data_nascimento = document.getElementById('data_nascimento')
const input_Nota1 = document.getElementById('nota_1') 
const input_Nota2 = document.getElementById('nota_2')
const lista_Aluno = document.getElementById('lista_aluno')

// com essa função faz com que qualquer evento padrão da web sera cancelado
formulario.addEventListener('submit', async (events) => {
    events.preventDefault()
    const aluno  = {
        nome: input_Nome_aluno.value, 
        email: input_Email.value, 
        data_nascimento: input_Data_nascimento.value,
        nota_1: input_Nota1.value, 
        nota_2: input_Nota2.value, 
    }
    criar_Aluno(aluno);
    postAluno(aluno); 

} )

function criar_Aluno(aluno) {
    let media = (aluno.nota_1 + aluno.nota_2 / 2)
    console.log('aluno criado')
    lista_Aluno.innerHTML=`
                 <tr>
                    <th>${aluno.nome}</th>
                    <th>${aluno.email}</th>
                    <th>${aluno.data_nascimento}</th>
                    <th>${media}</th>
                   
                </tr>` 
                console.log(aluno)
}

async function visualizar_Aluno() {
    let alunos = await apiAlunos.getAlunos(); 
    console.log(alunos)
    alunos.forEach(aluno => { 
        criarAluno(aluno)
    });
}


visualizar_Aluno(); 