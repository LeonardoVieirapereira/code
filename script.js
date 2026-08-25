const dadosRegioes = {
    "norte": {
        titulo: "Região Norte",
        descricao: "A maior região em extensão territorial, dominada pelo bioma Amazônia e pela bacia hidrográfica Amazônica."
    },
    "nordeste": {
        titulo: "Região Nordeste",
        descricao: "Conhecida por seu extenso litoral, cultura rica e pelos biomas da Caatinga e Mata Atlântica."
    },
    "centro-oeste": {
        titulo: "Região Centro-Oeste",
        descricao: "Atrativo do agronegócio e lar do Pantanal e do Cerrado, além de abrigar a capital federal, Brasília."
    },
    "sudeste": {
        titulo: "Região Sudeste",
        descricao: "Centro econômico e demográfico do país, altamente industrializado e urbanizado."
    },
    "sul": {
        titulo: "Região Sul",
        descricao: "Possui clima temperado, bioma dos Pampas e das Matas de Araucárias, com forte influência de imigração europeia."
    }
};

const regioes = document.querySelectorAll('.regiao');
const tituloEl = document.getElementById('regiao-titulo');
const descEl = document.getElementById('regiao-desc');

regioes.forEach(regiao => {
    regiao.addEventListener('click', (e) => {
        const idRegiao = e.target.id;
        if (dadosRegioes[idRegiao]) {
            tituloEl.innerText = dadosRegioes[idRegiao].titulo;
            descEl.innerText = dadosRegioes[idRegiao].descricao;
        }
    });
});
