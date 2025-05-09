async function getProfessores() {
    try {
      const api = await fetch("https://school-system-spi.onrender.com/api/professores/");
      const response = await api.json();
      console.log(response);
      return response;
    } catch (error) {
      alert("Erro ao buscar os professores");
      console.error(error);
    }
  }

async function getProfessor_id(id) { 
    try {
        const api = await fetch(`https://school-system-spi.onrender.com/api/professores/${id}`); 
        const response = await api.json();
        console.log(response);
        return response;
    } catch (error) {
        alert("Erro ao buscar o professor");
        console.error(error);
    }
}

async function postProfessor(professor) {
    try {
        const api = await fetch("https://school-system-spi.onrender.com/api/professores", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(professor)
        });
        const response = await api.json();
        console.log(response);
        return response;
    } catch (error) {
        alert("Erro ao cadastrar o(a) professor dentro do sistema");
        console.error(error);
    }
} 

async function updateProfessor(id, professor) {
    try {
        const api = await fetch(`https://school-system-spi.onrender.com/api/professores/${id}`, {
            method: "PUT",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(professor)
        });
        const response = await api.json();
        console.log(response);
        return response;
    } catch (error) {
        alert("Erro ao atualizar o professor");
        console.error(error);
    }
} 

async function deleteProfessor(id_professor) {
    try {
        const api = await fetch(`https://school-system-spi.onrender.com/api/professores/${id_professor}`, {
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