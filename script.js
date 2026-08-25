// Base de dados geográfica rica para as 5 regiões do Brasil
const dadosRegioes = {
    "Norte": {
        tag: "Região Norte",
        area: "3.853.676 km² (45% do país)",
        populacao: "Aproximadamente 18,7 milhões",
        clima: "Eatorial Úmido",
        biomas: "Amazônia e Cerrado",
        estados: "Acre, Amapá, Amazonas, Pará, Rondônia, Roraima e Tocantins",
        descricao: "É a maior região do Brasil em área territorial. Destaca-se por abrigar a Floresta Amazônica, a maior bacia hidrográfica do mundo e uma vasta biodiversidade nativa."
    },
    "Nordeste": {
        tag: "Região Nordeste",
        area: "1.554.291 km² (18% do país)",
        populacao: "Aproximadamente 57 milhões",
        clima: "Semiárido, Tropical e Equatorial",
        biomas: "Caatinga, Mata Atlântica e Cerrado",
        estados: "Alagoas, Bahia, Ceará, Maranhão, Paraíba, Pernambuco, Piauí, Rio Grande do Norte e Sergipe",
        descricao: "Possui a maior faixa litorânea do país. É rica cultural e historicamente, marcada pelo sertão semiárido, pela vegetação de Caatinga e polos agrícolas irrigados."
    },
    "Centro-Oeste": {
        tag: "Região Centro-Oeste",
        area: "1.606.371 km² (19% do país)",
        populacao: "Aproximadamente 16,5 milhões",
        clima: "Tropical Continental",
        biomas: "Cerrado e Pantanal",
        estados: "Goiás, Mato Grosso, Mato Grosso do Sul e Distrito Federal",
        descricao: "Coração do agronegócio nacional. Abriga a capital do país, Brasília, além do Pantanal — a maior planície alagável do planeta — e extensas áreas de Cerrado."
    },
    "Sudeste": {
        tag: "Região Sudeste",
        area: "924.620 km² (11% do país)",
        populacao: "Aproximadamente 89 milhões",
        clima: "Tropical de Altitude e Subtropical",
        biomas: "Mata Atlântica e Cerrado",
        estados: "Espírito Santo, Minas Gerais, Rio de Janeiro e São Paulo",
        descricao: "É o centro econômico, industrial e financeiro do Brasil. Com a maior densidade demográfica, possui grandes metrópoles nacionais e relevo dominado por planaltos e serras."
    },
    "Sul": {
        tag: "Região Sul",
        area: "576.777 km² (7% do país)",
        populacao: "Aproximadamente 30 milhões",
        clima: "Subtropical",
        biomas: "Mata das Araucárias e Pampa",
        estados: "Paraná, Rio Grande do Sul e Santa Catarina",
        descricao: "É a menor região em extensão territorial e a mais fria do Brasil, apresentando geadas e eventuais nevadas. Destaca-se pelo alto IDH, agropecuária forte e relevo de planaltos."
    }
};

// 1. Inicializa o Mapa interativo focado no Brasil
const map = L.map('map', {
    center: [-14.235, -51.925],
    zoom: 4,
    zoomControl: true
});

// 2. Adiciona camada de mapa elegante (CartoDB Positron)
L.tileLayer('https://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}{r}.png', {
    attribution: '&copy; OpenStreetMap contributors &copy; CARTO',
    subdomains: 'abcd',
    maxZoom: 7,
    minZoom: 3
}).addTo(map);

// 3. Marcadores/Polígonos aproximados das 5 Regiões para navegação e clique
const regioesGeo = [
    { nome: "Norte", coords: [-3.0, -60.0], color: "#27ae60" },
    { nome: "Nordeste", coords: [-7.0, -40.0], color: "#e67e22" },
    { nome: "Centro-Oeste", coords: [-15.0, -55.0], color: "#f1c40f" },
    { nome: "Sudeste", coords: [-20.0, -44.0], color: "#e74c3c" },
    { nome: "Sul", coords: [-27.0, -52.0], color: "#2980b9" }
];

// Adiciona círculos interativos destacados no centro de cada região
regioesGeo.forEach(reg => {
    const circle = L.circleMarker(reg.coords, {
        color: reg.color,
        fillColor: reg.color,
        fillOpacity: 0.7,
        radius: 22
    }).addTo(map);

    circle.bindTooltip(`<b>Região ${reg.nome}</b>`, { permanent: false, direction: "top" });

    // Eventos ao clicar no ponto do mapa
    circle.on('click', () => {
        carregarDadosRegiao(reg.nome);
        map.flyTo(reg.coords, 5, { duration: 1.2 });
    });
});

// 4. Função para atualizar os dados no painel lateral
function carregarDadosRegiao(nomeRegiao) {
    const dados = dadosRegioes[nomeRegiao];
    if (!dados) return;

    document.getElementById('regiao-tag').innerText = dados.tag;
    document.getElementById('regiao-titulo').innerText = nomeRegiao;
    document.getElementById('regiao-desc').innerText = dados.descricao;
    
    document.getElementById('det-area').innerText = dados.area;
    document.getElementById('det-populacao').innerText = dados.populacao;
    document.getElementById('det-clima').innerText = dados.clima;
    document.getElementById('det-biomas').innerText = dados.biomas;
    document.getElementById('det-estados').innerText = dados.estados;

    // Exibe o grid com informações técnicas
    document.getElementById('regiao-detalhes').style.display = 'grid';
}
