class MateriaCardView {
  constructor(materia) {
    this.materia = materia;
  }

  render() {
    const cardLink = document.createElement("a");
    cardLink.href = `detalhes-materia.html?id=${this.materia.id}`;
    cardLink.className = "block no-underline";

    const card = document.createElement("div");
    card.className =
      "bg-white rounded-lg shadow-md p-4 mb-4 border border-gray-100 transform transition-transform hover:scale-[1.02] cursor-pointer";

    const statusColorClass = StatusColorStrategy.getColor(this.materia.status);

    card.innerHTML = `
            <h3 class="text-lg font-semibold text-gray-800 mb-1">${this.materia.nome}</h3>
            <p class="text-sm text-gray-600 mb-2">Código: ${this.materia.codigo} | ${this.materia.creditos} Créditos</p>
            <div class="flex items-center justify-between text-sm text-gray-700">
                <span>Professor: ${this.materia.professor}</span>
                <span class="px-2 py-0.5 ${statusColorClass} rounded-full text-xs font-medium">${this.materia.status}</span>
            </div>
           
        `;
    cardLink.appendChild(card);
    return cardLink;
  }
}
