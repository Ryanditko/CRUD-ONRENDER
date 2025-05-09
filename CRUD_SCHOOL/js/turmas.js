async function getTurmas() {
    try {
      const api = await fetch("https://school-system-spi.onrender.com/api/turmas/");
      const response = await api.json();
      console.log(response);
      return response;
    } catch (error) {
      alert("Erro ao buscar as turmas");
      console.error(error);
    }
  } 

async function getTurmas_id(id) { 
    try {
        const api = await fetch(`https://school-system-spi.onrender.com/api/turmas/${id}`); 
        const response = await api.json();
        console.log(response);
        return response;
    } catch (error) {
        alert("Erro ao buscar a turma");
        console.error(error);
    }
}

async function postTurma(turma) {
    try {
        const api = await fetch("https://school-system-spi.onrender.com/api/turmas", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(turma)
        });
        const response = await api.json();
        console.log(response);
        return response;
    } catch (error) {
        alert("Erro ao cadastrar a turma dentro do sistema ");
        console.error(error);
    }
} 

async function updateTurma(id,turma) {
    try {
        const api = await fetch(`https://school-system-spi.onrender.com/api/turmas/${id}`,  {
            method: "PUT",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(turma)
        });
        const response = await api.json();
        console.log(response);
        return response;
    } catch (error) {
        alert("Erro ao atualizar a turma");
        console.error(error);
    }
} 

async function deleteTurma(id_turma) {
    try {
        const api = await fetch(`https://school-system-spi.onrender.com/api/turmas/${id_turma}`, {
            method: "DELETE"
        });
        const response = await api.json();
        console.log(response);
        return response;
    } catch (error) {
        alert("Erro ao deletar a turma");
        console.error(error);
    }
}