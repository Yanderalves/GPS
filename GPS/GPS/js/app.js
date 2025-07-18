document.addEventListener('DOMContentLoaded', () => {
    const materiasListContainer = document.getElementById('materias-list');
    const materiaFacade = new MateriaFacade(); 

    const materiaCards = materiaFacade.getAllMateriaCards();
    materiaCards.forEach(card => {
        materiasListContainer.appendChild(card);
    });
});