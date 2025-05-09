async function getAlunos() {
    try {
      const api = await fetch("https://school-system-spi.onrender.com/api/alunos/");
      const response = await api.json();
      console.log(response);
      return response;
    } catch (error) {
      alert("Erro ao buscar alunos");
      console.error(error);
    }
  }

async function getAluno_id(id_aluno) {
    try {
        const api = await fetch(`https://school-system-spi.onrender.com/api/alunos/${id_aluno}`);
        const response = await api.json();
        console.log(response); 
        return response;
    } catch (error) {
        alert("Erro ao buscar aluno");
        console.error(error);
    }
}

async function postAluno(aluno) {
    try {
        const api = await fetch(`https://school-system-spi.onrender.com/api/alunos`, { 
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(aluno)
        });
        const response = await api.json();
        console.log(response);
        return response;
    } catch (error) {
        alert("Erro ao cadastrar aluno");
        console.error(error);
    }
} 

async function updateAluno(id, aluno) {
    try {
        const api = await fetch(`https://school-system-spi.onrender.com/api/alunos/${id}`,  {
            method: "PUT",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(aluno)
        });
        const response = await api.json();
        console.log(response);
        return response;
    } catch (error) {
        alert("Erro ao atualizar aluno");
        console.error(error);
    }
} 

async function deleteAluno(id_aluno) {
    try {
        const api = await fetch(`https://school-system-spi.onrender.com/api/alunos/${id_aluno}`, {
            method: "DELETE"
        });
        const response = await api.json();
        console.log(response);
        return response;
    } catch (error) {
        alert("Erro ao deletar aluno");
        console.error(error);
    }
}

