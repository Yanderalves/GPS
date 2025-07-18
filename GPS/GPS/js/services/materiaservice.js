class MateriaService {
  static instance = null;
  static STORAGE_KEY = "materiasData";

  constructor() {
    if (MateriaService.instance) {
      return MateriaService.instance;
    }
    MateriaService.instance = this;
    this.materias = this._loadMaterias();
    this._mockDataIfNeeded();
  }

  _loadMaterias() {
    const dataString = localStorage.getItem(MateriaService.STORAGE_KEY);
    if (dataString) {
      try {
        const parsedData = JSON.parse(dataString);
        return parsedData.map(
          (m) =>
            new Materia(
              m.id,
              m.nome,
              m.codigo,
              m.creditos,
              m.professor,
              m.status,
              m.descricao
            )
        );
      } catch (e) {
        console.error("Erro ao parsear dados do localStorage:", e);
        return [];
      }
    }
    return [];
  }

  _saveMaterias() {
    localStorage.setItem(
      MateriaService.STORAGE_KEY,
      JSON.stringify(this.materias)
    );
  }

  _mockDataIfNeeded() {
    if (
      !this.materias ||
      this.materias.length === 0 ||
      !(this.materias[0] instanceof Materia)
    ) {
      const mockMaterias = [
        new Materia(
          1,
          "Futebol II - Como o Flamengo se tornou o maior do brasil?",
          "INF101",
          4,
          "Dr. Zico",
          "Concluída",
          "Esta Disciplina aprofunda na história do clube de regata do Flamengo mostrando todos os detalhes da suas glórias"
        ),
        new Materia(
          2,
          "Computador II - Como trocar pasta térmica?",
          "MAT201",
          6,
          "Dr. Alves",
          "Pendente",
          "Estudando profundamente acerca do funcionamento do computador"
        ),
        new Materia(
          3,
          "Uber III - Formei e não arrumei emprego. E agora?",
          "INF302",
          4,
          "Dr. Carlos Santos",
          "Cursando",
          "Aborda as principais estratégias de mercado para se posicionar profissionalmente em contato com possíveis vagas de trabalho"
        ),
        new Materia(
          4,
          "Gerência de projetos de software",
          "INF403",
          4,
          "Mayrton",
          "Cursando",
          "Estuda todo o processo de concepção de um projeto. Incluindo também alguns padrões de código e semelhantes."
        ),
        new Materia(
          5,
          "Engenharia de Software I",
          "INF504",
          4,
          "Dr. Pedro Lima",
          "Pendente",
          "Introdução aos princípios e práticas da engenharia de software, abordando o ciclo de vida do desenvolvimento de software, requisitos e modelagem."
        ),
        new Materia(
          6,
          "Banco de Dados",
          "BDD605",
          4,
          "Dra. Laura Mendes",
          "Cursando",
          "Conceitos de sistemas de gerenciamento de banco de dados (SGBD), modelagem de dados (ER, relacional), SQL e normalização."
        ),
        new Materia(
          7,
          "Redes de Computadores",
          "RED706",
          4,
          "Dr. Paulo Viana",
          "Pendente",
          "Fundamentos de redes de computadores, modelos OSI e TCP/IP, protocolos de rede, endereçamento IP e conceitos de segurança de rede."
        ),
      ];
      this.materias = mockMaterias;
      this._saveMaterias();
    }
  }

  getAllMaterias() {
    return this.materias;
  }

  getMateriaById(id) {
    return this.materias.find((materia) => materia.id === id);
  }
}
