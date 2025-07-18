document.addEventListener('DOMContentLoaded', () => {
    const materiaFacade = new MateriaFacade(); 

    const params = new URLSearchParams(window.location.search);
    const materiaId = parseInt(params.get('id'));

    if (isNaN(materiaId)) {
        document.getElementById('materia-detalhes').classList.add('hidden');
        document.getElementById('erro-msg').classList.remove('hidden');
        document.getElementById('materia-titulo').innerText = "Erro: ID inválido";
        return;
    }

    const materia = materiaFacade.getMateriaDetails(materiaId);

    if (materia) {
        document.getElementById('materia-titulo').innerText = materia.nome;
        document.getElementById('detalhe-codigo').innerText = materia.codigo;
        document.getElementById('detalhe-creditos').innerText = materia.creditos;
        document.getElementById('detalhe-professor').innerText = materia.professor;
        document.getElementById('detalhe-descricao').innerText = materia.descricao;

        const statusSpan = document.getElementById('detalhe-status');
        statusSpan.innerText = materia.status;
        statusSpan.className = `px-2 py-0.5 rounded-full text-sm font-medium ${StatusColorStrategy.getColor(materia.status)}`;

    } else {
        document.getElementById('materia-detalhes').classList.add('hidden');
        document.getElementById('erro-msg').classList.remove('hidden');
        document.getElementById('materia-titulo').innerText = "Matéria não encontrada";
        console.error(`Matéria com ID ${materiaId} não encontrada nos dados.`);
    }
});