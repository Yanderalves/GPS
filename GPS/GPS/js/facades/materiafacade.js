class MateriaFacade {
    static instance = null; 

    constructor() {
        if (MateriaFacade.instance) {
            return MateriaFacade.instance;
        }
        MateriaFacade.instance = this;
        this.materiaService = new MateriaService(); 
    }

    getAllMateriaCards() {
        const materias = this.materiaService.getAllMaterias();
        const cardViews = [];
        for (const materia of materias) {
            const cardView = new MateriaCardView(materia);
            cardViews.push(cardView.render());
        }
        return cardViews;
    }

    getMateriaDetails(id) {
        return this.materiaService.getMateriaById(id);
    }
}