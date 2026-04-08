// ========================================
// BUSCAR JAVASCRIPT
// ======================================== */

// Dados simulados de profissionais
const professionalsData = [
    {
        id: 1,
        name: "Carlos Silva",
        age: 45,
        avatar: "Eletricista",
        gender: "Masculino",
        category: "Eletricista",
        categorySlug: "manutenção",
        rating: 4.9,
        reviewsCount: 127,
        // CORRIGIDO: Nome sem **
        description: "⚡️ Segurança e eficiência que você pode confiar! Sou Carlos Silva (45), seu Eletricista em Parauapebas com mais de 15 anos de estrada. Chega de gambiarras! Sou especialista em adequação à NBR 5410, manutenção preventiva e emergências 24h para residências e pequenos comércios. Se o assunto é eletricidade, garanto um serviço limpo, seguro e com excelência. Peça seu orçamento e acenda a tranquilidade!",
        tags: ["Instalação", "Manutenção", "Emergência"],
        location: "Parauapebas - PA",
        experience: "10+",
        availability: "imediata"
    },
    {
        id: 2,
        name: "Ana Paula Costa",
        age: 32,
        avatar: "Designer",
        gender: "Feminino",
        category: "Designer Gráfico",
        categorySlug: "design",
        rating: 5.0,
        reviewsCount: 89,
        // CORRIGIDO: Nome sem **
        description: "🎨 Sua marca, minha paixão! Eu sou Ana Paula Costa (32), Designer Gráfico obcecada por Identidade Visual e Branding. Crio o 'rosto' que faz o seu negócio ser notado, desde um logo inesquecível até um feed coeso no Instagram. Se você está em Curionópolis e quer parar de ser 'só mais um', vamos dar um *upgrade* visual na sua história. Bora conversar sobre o seu projeto?",
        tags: ["Branding", "Logo", "Social Media"],
        location: "Curionópolis - PA",
        experience: "5-10",
        availability: "semana"
    },
    {
        id: 3,
        name: "Roberto Mendes",
        age: 38,
        avatar: "Programador",
        gender: "Masculino",
        category: "Desenvolvedor Web",
        categorySlug: "tecnologia",
        rating: 4.8,
        reviewsCount: 156,
        // CORRIGIDO: Nome sem **
        description: "💻 Transformo ideias em sistemas que *realmente* funcionam. Sou Roberto Mendes (38), Desenvolvedor Full-Stack focado em React/Node.js. Sua empresa em Curionópolis precisa de um e-commerce parrudo, um sistema administrativo ágil ou um site que rankeia no Google? Com mais de 10 anos de código, eu entrego soluções robustas, escaláveis e sob medida. Próxima linha de código? A do seu projeto de sucesso!",
        tags: ["React", "Node.js", "WordPress"],
        location: "Curionópolis - PA",
        experience: "5-10",
        availability: "mes"
    },
    {
        id: 4,
        name: "Juliana Santos",
        age: 29,
        avatar: "Professora",
        gender: "Feminino",
        category: "Professora Particular",
        categorySlug: "educacao",
        rating: 4.7,
        reviewsCount: 94,
        // CORRIGIDO: Nome sem **
        description: "📚 Matemática e Física não precisam ser um bicho de sete cabeças! Sou Juliana Santos (29), sua Profa. Particular em Parauapebas. Minha missão é tirar o 'trauma' de exatas com uma didática clara e ultra focada. Se o objetivo é gabaritar a prova, passar no vestibular ou *finalmente* entender a matéria, eu tenho o plano de estudos certo para você. Vamos juntos vencer esses desafios?",
        tags: ["Matemática", "Física", "Reforço"],
        location: "Parauapebas - PA",
        experience: "3-5",
        availability: "imediata"
    },
    {
        id: 5,
        name: "Pedro Oliveira",
        age: 52,
        avatar: "Pedreiro",
        gender: "Masculino",
        category: "Pedreiro",
        categorySlug: "construcao",
        rating: 4.6,
        reviewsCount: 203,
        // CORRIGIDO: Nome sem **
        description: "🧱 Obra sem dor de cabeça tem nome e sobrenome: Pedro Oliveira (52), Pedreiro Profissional. Mais de 20 anos de experiência em Canaã dos Carajás, garantindo que sua fundação seja sólida e seu acabamento, impecável. Especialista em alvenaria e reforma. Valorizo a pontualidade, o capricho e a limpeza. Sua satisfação é a minha régua. Orçamento rápido e sem enrolação!",
        tags: ["Alvenaria", "Reforma", "Acabamento"],
        location: "Canaã dos Carajás - PA",
        experience: "10+",
        availability: "semana"
    },
    {
        id: 6,
        name: "Mariana Ferreira",
        age: 27,
        avatar: "Manicure",
        gender: "Feminino",
        category: "Manicure e Pedicure",
        categorySlug: "beleza",
        rating: 5.0,
        reviewsCount: 178,
        // CORRIGIDO: Nome sem **
        description: "💅 Self-care sem sair de casa! Sou Mariana Ferreira (27), Manicure e Pedicure Profissional, levando biossegurança e as últimas tendências até você em Parauapebas. Especialista em alongamento (gel/fibra) e nail art de arrasar. O combo conforto + higiene + unhas perfeitas que elevam sua autoestima. Agende seu horário e sinta a diferença de um cuidado 5 estrelas!",
        tags: ["Unhas", "Decoração", "Alongamento"],
        location: "Parauapebas - PA",
        experience: "5-10",
        availability: "imediata"
    },
    {
        id: 7,
        name: "Fernando Alves",
        age: 48,
        avatar: "Encanador",
        gender: "Masculino",
        category: "Encanador",
        categorySlug: "manutencao",
        rating: 4.5,
        reviewsCount: 112,
        // CORRIGIDO: Nome sem **
        description: "💧 O pingo que te tira o sono, eu resolvo! Sou Fernando Alves (48), Encanador com 12 anos de expertise em Parauapebas. Rápido, honesto e focado na detecção e reparo de vazamentos e problemas hidráulicos complexos. De torneira pingando à troca de tubulação, o meu serviço é garantir que sua conta de água baixe e seu sistema funcione perfeitamente. Solução imediata e sem sujeira!",
        tags: ["Instalação", "Vazamentos", "Manutenção"],
        location: "Parauapebas - PA",
        experience: "10+",
        availability: "imediata"
    },
    {
        id: 8,
        name: "Camila Rodrigues",
        age: 34,
        avatar: "Fotógrafa",
        gender: "Feminino",
        category: "Fotógrafa",
        categorySlug: "eventos",
        rating: 4.9,
        reviewsCount: 145,
        // CORRIGIDO: Nome sem **
        description: "📸 Congelo a emoção para que a memória dure para sempre. Sou Camila Rodrigues (34), Fotógrafa de Casamentos e Famílias em Canaã dos Carajás. Meu trabalho é sutil, criativo e conta a sua história com sensibilidade. Mais do que fotos, entrego um legado visual do seu dia especial, com edição de cinema. Vamos transformar seu evento em arte?",
        tags: ["Casamentos", "Eventos", "Ensaios"],
        location: "Canaã dos Carajás - PA",
        experience: "5-10",
        availability: "mes"
    },
    {
        id: 9,
        name: "Lucas Barbosa",
        age: 31,
        avatar: "Personal",
        gender: "Masculino",
        category: "Personal Trainer",
        categorySlug: "saude",
        rating: 4.8,
        reviewsCount: 87,
        // CORRIGIDO: Nome sem **
        description: "💪 Chega de treinar sem rumo! Sou Lucas Barbosa (31), Personal Trainer em Parauapebas. Seus objetivos (emagrecer, hipertrofia ou condicionamento) são a minha meta. Meu plano de treino é 100% personalizado e inclui orientação nutricional básica para otimizar seus ganhos. Pare de adiar o corpo que você quer. Bora sair da zona de conforto com propósito e resultados!",
        tags: ["Emagrecimento", "Hipertrofia", "Funcional"],
        location: "Parauapebas - PA",
        experience: "3-5",
        availability: "imediata"
    },
    {
        id: 10,
        name: "Beatriz Lima",
        age: 41,
        avatar: "Contadora",
        gender: "Feminino",
        category: "Consultora Financeira",
        categorySlug: "consultoria",
        rating: 5.0,
        reviewsCount: 62,
        // CORRIGIDO: Nome sem **
        description: "💰 Simplifique sua relação com o dinheiro! Sou Beatriz Lima (41), Consultora Financeira. Seja para sua empresa ou para suas finanças pessoais em Curionópolis, meu foco é te dar o controle total. Chega de estresse com planejamento, investimentos e contas. Ofereço o mapa para sua tranquilidade financeira. Vamos sentar e organizar sua vida econômica?",
        tags: ["Planejamento", "Investimentos", "Finanças"],
        location: "Curionópolis - PA",
        experience: "5-10",
        availability: "semana"
    },
    {
        id: 11,
        name: "Ricardo Souza",
        age: 55,
        avatar: "Pintor",
        gender: "Masculino",
        category: "Pintor",
        categorySlug: "construcao",
        rating: 4.7,
        reviewsCount: 134,
        // CORRIGIDO: Nome sem **
        description: "🎨 Da parede sem vida para um ambiente inspirador! Sou Ricardo Souza (55), o Pintor que zela pelo seu espaço em Parauapebas. Não é só pintura, é acabamento impecável, seja textura, grafiato ou o liso perfeito. Meu diferencial? Organização *antes*, *durante* e limpeza total *depois*. Peça seu orçamento e veja como a atenção aos detalhes transforma o resultado final.",
        tags: ["Residencial", "Comercial", "Textura"],
        location: "Parauapebas - PA",
        experience: "10+",
        availability: "semana"
    },
    {
        id: 12,
        name: "Tatiana Moreira",
        age: 36,
        avatar: "Cabeleireira",
        gender: "Feminino",
        category: "Cabeleireira",
        categorySlug: "beleza",
        rating: 4.9,
        reviewsCount: 201,
        // CORRIGIDO: Nome sem **
        description: "✨ Seu cabelo dos sonhos, no conforto da sua casa! Sou Tatiana Moreira (36), Cabeleireira em Parauapebas. Especialista em coloração que brilha, cortes modernos e tratamentos que resgatam a saúde do seu fio. Levo todo o serviço de salão (com produtos premium) até você. Minha arte é realçar a sua beleza e garantir que você se sinta incrível!",
        tags: ["Corte", "Coloração", "Tratamento"],
        location: "Parauapebas - PA",
        experience: "5-10",
        availability: "imediata"
    },
    {
        id: 13,
        name: "André Carvalho",
        age: 42,
        avatar: "Mecânico",
        gender: "Masculino",
        category: "Mecânico de Veículos",
        categorySlug: "manutencao",
        rating: 4.8,
        reviewsCount: 165,
        // CORRIGIDO: Nome sem **
        description: "🚗 Seu carro em boas mãos, sem surpresas na conta. Sou André Carvalho (42), seu Mecânico de confiança em Canaã dos Carajás. Especialista em diagnóstico eletrônico e injeção, dou a manutenção que seu veículo precisa para rodar *seguro* e *eficiente*. Compromisso com a honestidade e a qualidade em cada reparo. Traga seu carro e tenha a certeza de um serviço transparente!",
        tags: ["Mecânica Geral", "Injeção Eletrônica", "Freios"],
        location: "Canaã dos Carajás - PA",
        experience: "10+",
        availability: "imediata"
    },
    {
        id: 14,
        name: "Patrícia Almeida",
        age: 26,
        avatar: "Nutricionista",
        gender: "Feminino",
        category: "Nutricionista",
        categorySlug: "saude",
        rating: 5.0,
        reviewsCount: 73,
        // CORRIGIDO: Nome sem **
        description: "🥗 Fim das dietas radicais! Sou Patrícia Almeida (26), Nutricionista que acredita na Reeducação Alimentar e em resultados duradouros. Seja para emagrecimento, performance esportiva ou mais saúde, crio planos 100% alinhados à sua rotina. Atendo em Curionópolis (presencial ou online). Vamos nutrir seu corpo e sua mente sem terrorismo alimentar?",
        tags: ["Emagrecimento", "Nutrição Esportiva", "Reeducação"],
        location: "Curionópolis - PA",
        experience: "3-5",
        availability: "semana"
    },
    {
        id: 15,
        name: "Marcos Vinicius",
        age: 39,
        avatar: "Advogado",
        gender: "Masculino",
        category: "Advogado",
        categorySlug: "consultoria",
        rating: 4.6,
        reviewsCount: 118,
        // CORRIGIDO: Nome sem **
        description: "⚖️ Seu direito com a agilidade e clareza que você precisa. Sou Marcos Vinicius (39), Advogado em Canaã dos Carajás, especialista em Direito Trabalhista e Civil. Ofereço consultoria focada em soluções rápidas, eficazes e transparentes. Minha prioridade é lutar pelos seus direitos e te dar a tranquilidade jurídica para focar no que realmente importa. Sua defesa começa aqui!",
        tags: ["Trabalhista", "Civil", "Consultoria"],
        location: "Canaã dos Carajás - PA",
        experience: "10+",
        availability: "semana"
    }
];

// Estado da aplicação
let currentPage = 1;
const itemsPerPage = 9;
let filteredProfessionals = [...professionalsData];

// ========================================
// ELEMENTOS DO DOM
// ========================================
const searchInput = document.getElementById('searchInput');
const locationInput = document.getElementById('locationInput');
const btnSearchMain = document.getElementById('btnSearchMain');
const btnClearFilters = document.getElementById('btnClearFilters');
const filterCategory = document.getElementById('filterCategory');
const sortBy = document.getElementById('sortBy');
const professionalsGrid = document.getElementById('professionalsGrid');
const resultsCount = document.getElementById('resultsCount');
const resultsDescription = document.getElementById('resultsDescription');
const btnToggleFilters = document.getElementById('btnToggleFilters');
const filtersSidebar = document.querySelector('.filters-sidebar');
const btnApplyFiltersMobile = document.getElementById('btnApplyFiltersMobile');

// ========================================
// INICIALIZAÇÃO
// ========================================
document.addEventListener('DOMContentLoaded', function () {
    // Define Parauapebas como localização padrão se não houver valor
    if (!locationInput.value) {
        locationInput.value = 'Parauapebas - PA';
    }

    renderProfessionals();
    setupEventListeners();
    createFiltersOverlay();
});

// ========================================
// EVENT LISTENERS
// ========================================
function setupEventListeners() {
    // Busca principal
    btnSearchMain.addEventListener('click', applyFilters);
    searchInput.addEventListener('keypress', (e) => {
        if (e.key === 'Enter') applyFilters();
    });
    locationInput.addEventListener('keypress', (e) => {
        if (e.key === 'Enter') applyFilters();
    });

    // Filtros
    btnClearFilters.addEventListener('click', clearFilters);
    filterCategory.addEventListener('change', applyFilters);
    sortBy.addEventListener('change', applySorting);

    // Rating filter
    document.querySelectorAll('input[name="rating"]').forEach(radio => {
        radio.addEventListener('change', applyFilters);
    });

    // Checkboxes
    document.querySelectorAll('.checkbox-option input[type="checkbox"]').forEach(checkbox => {
        checkbox.addEventListener('change', applyFilters);
    });

    // Toggle filtros mobile
    if (btnToggleFilters) {
        btnToggleFilters.addEventListener('click', toggleFiltersSidebar);
    }

    if (btnApplyFiltersMobile) {
        btnApplyFiltersMobile.addEventListener('click', () => {
            applyFilters();
            toggleFiltersSidebar();
        });
    }
}

// ========================================
// RENDERIZAÇÃO
// ========================================
function renderProfessionals() {
    const start = (currentPage - 1) * itemsPerPage;
    const end = start + itemsPerPage;
    const professionalsToShow = filteredProfessionals.slice(start, end);

    professionalsGrid.innerHTML = '';

    if (professionalsToShow.length === 0) {
        professionalsGrid.innerHTML = `
            <div style="grid-column: 1/-1; text-align: center; padding: 3rem;">
                <i class="fas fa-search" style="font-size: 4rem; color: var(--neutral-color); margin-bottom: 1rem;"></i>
                <h3 style="color: var(--primary-color); margin-bottom: 0.5rem;">Nenhum profissional encontrado</h3>
                <p style="color: var(--neutral-color);">Tente ajustar os filtros ou fazer uma nova busca</p>
            </div>
        `;
        updateResultsInfo();
        return;
    }

    professionalsToShow.forEach(professional => {
        const card = createProfessionalCard(professional);
        professionalsGrid.appendChild(card);
    });

    updateResultsInfo();
    renderPagination();
}

function createProfessionalCard(professional) {
    const card = document.createElement('div');
    card.className = 'professional-card';
    card.onclick = () => goToProfessionalProfile(professional.id);

    const initials = professional.name.split(' ').map(n => n[0]).join('').substring(0, 2);
    const fullStars = Math.floor(professional.rating);
    const hasHalfStar = professional.rating % 1 !== 0;

    let starsHTML = '';
    for (let i = 0; i < fullStars; i++) {
        starsHTML += '<i class="fas fa-star"></i>';
    }
    if (hasHalfStar) {
        starsHTML += '<i class="fas fa-star-half-alt"></i>';
    }
    const emptyStars = 5 - Math.ceil(professional.rating);
    for (let i = 0; i < emptyStars; i++) {
        starsHTML += '<i class="far fa-star"></i>';
    }

    card.innerHTML = `
        <div class="professional-header">
            <img class="professional-avatar" src="../assets/static/images/profissionais/${professional.avatar}/${professional.avatar}.png">
            <div class="professional-info">
                <h3 class="professional-name">${professional.name}</h3>
                <p class="professional-category">${professional.category}</p>
                <div class="professional-rating">
                    <span class="stars">${starsHTML}</span>
                    <span class="rating-value">${professional.rating.toFixed(1)}</span>
                    <span class="rating-count">(${professional.reviewsCount})</span>
                </div>
            </div>
        </div>
        <p class="professional-description">${professional.description}</p>
        <div class="professional-tags">
            ${professional.tags.map(tag => `<span class="tag">${tag}</span>`).join('')}
        </div>
        <div class="professional-footer">
            <span class="professional-location">
                <i class="fas fa-map-marker-alt"></i>
                ${professional.location}
            </span>
            <span class="professional-experience">${getExperienceText(professional.experience)}</span>
        </div>
    `;

    return card;
}

function getExperienceText(experience) {
    const experienceMap = {
        '0-1': '< 1 ano',
        '1-3': '1-3 anos',
        '3-5': '3-5 anos',
        '5-10': '5-10 anos',
        '10+': '10+ anos'
    };
    return experienceMap[experience] || experience;
}

// ========================================
// FILTROS
// ========================================
function applyFilters() {
    const searchTerm = searchInput.value.toLowerCase().trim();
    const locationTerm = locationInput.value.toLowerCase().trim();
    const category = filterCategory.value;
    const minRating = parseFloat(document.querySelector('input[name="rating"]:checked').value);

    // Checkboxes de experiência
    const experienceCheckboxes = document.querySelectorAll('.filter-group:nth-child(4) input[type="checkbox"]:checked');
    const selectedExperiences = Array.from(experienceCheckboxes).map(cb => cb.value);

    // Checkboxes de disponibilidade
    const availabilityCheckboxes = document.querySelectorAll('.filter-group:nth-child(5) input[type="checkbox"]:checked');
    const selectedAvailabilities = Array.from(availabilityCheckboxes).map(cb => cb.value);

    filteredProfessionals = professionalsData.filter(professional => {
        // Filtro de busca
        const matchesSearch = !searchTerm ||
            professional.name.toLowerCase().includes(searchTerm) ||
            professional.category.toLowerCase().includes(searchTerm) ||
            professional.description.toLowerCase().includes(searchTerm) ||
            professional.tags.some(tag => tag.toLowerCase().includes(searchTerm));

        // Filtro de localização
        const matchesLocation = !locationTerm ||
            professional.location.toLowerCase().includes(locationTerm);

        // Filtro de categoria
        const matchesCategory = !category || professional.categorySlug === category;

        // Filtro de avaliação
        const matchesRating = professional.rating >= minRating;

        // Filtro de experiência
        const matchesExperience = selectedExperiences.length === 0 ||
            selectedExperiences.includes(professional.experience);

        // Filtro de disponibilidade
        const matchesAvailability = selectedAvailabilities.length === 0 ||
            selectedAvailabilities.includes(professional.availability);

        return matchesSearch && matchesLocation && matchesCategory &&
            matchesRating && matchesExperience && matchesAvailability;
    });

    currentPage = 1;
    applySorting();
}

function applySorting() {
    const sortValue = sortBy.value;

    switch (sortValue) {
        case 'rating':
            filteredProfessionals.sort((a, b) => b.rating - a.rating);
            break;
        case 'experience':
            const expOrder = { '10+': 4, '5-10': 3, '3-5': 2, '1-3': 1, '0-1': 0 };
            filteredProfessionals.sort((a, b) => expOrder[b.experience] - expOrder[a.experience]);
            break;
        case 'recent':
            // Simulação: inverte a ordem
            filteredProfessionals.reverse();
            break;
        default: // relevance
            // Mantém ordem padrão
            break;
    }

    renderProfessionals();
}

function clearFilters() {
    searchInput.value = '';
    locationInput.value = '';
    filterCategory.value = '';
    sortBy.value = 'relevance';

    document.querySelectorAll('input[name="rating"]').forEach(radio => {
        radio.checked = radio.value === '0';
    });

    document.querySelectorAll('input[type="checkbox"]').forEach(checkbox => {
        checkbox.checked = false;
    });

    applyFilters();
}

// ========================================
// PAGINAÇÃO
// ========================================
function renderPagination() {
    const totalPages = Math.ceil(filteredProfessionals.length / itemsPerPage);
    const paginationNumbers = document.getElementById('paginationNumbers');
    const btnPrevPage = document.getElementById('btnPrevPage');
    const btnNextPage = document.getElementById('btnNextPage');

    paginationNumbers.innerHTML = '';

    // Determina quais páginas mostrar
    let startPage = Math.max(1, currentPage - 2);
    let endPage = Math.min(totalPages, currentPage + 2);

    for (let i = startPage; i <= endPage; i++) {
        const pageBtn = document.createElement('button');
        pageBtn.className = 'page-number';
        pageBtn.textContent = i;
        if (i === currentPage) {
            pageBtn.classList.add('active');
        }
        pageBtn.onclick = () => goToPage(i);
        paginationNumbers.appendChild(pageBtn);
    }

    btnPrevPage.disabled = currentPage === 1;
    btnNextPage.disabled = currentPage === totalPages || totalPages === 0;

    btnPrevPage.onclick = () => goToPage(currentPage - 1);
    btnNextPage.onclick = () => goToPage(currentPage + 1);
}

function goToPage(page) {
    currentPage = page;
    renderProfessionals();
    window.scrollTo({ top: 0, behavior: 'smooth' });
}

// ========================================
// ATUALIZAÇÃO DE INFO
// ========================================
function updateResultsInfo() {
    const count = filteredProfessionals.length;
    resultsCount.textContent = `${count} ${count === 1 ? 'profissional encontrado' : 'profissionais encontrados'}`;

    const searchTerm = searchInput.value.trim();
    const locationTerm = locationInput.value.trim();

    if (searchTerm || locationTerm) {
        let description = 'Resultados para ';
        if (searchTerm) description += `"${searchTerm}"`;
        if (searchTerm && locationTerm) description += ' em ';
        if (locationTerm) description += `"${locationTerm}"`;
        resultsDescription.textContent = description;
    } else {
        resultsDescription.textContent = 'Mostrando todos os profissionais disponíveis';
    }
}

// ========================================
// NAVEGAÇÃO
// ========================================
function goToProfessionalProfile(id) {
    window.location.href = `perfil.html?id=${id}`;
}

// ========================================
// FILTROS MOBILE
// ========================================
function createFiltersOverlay() {
    const overlay = document.createElement('div');
    overlay.className = 'filters-overlay';
    overlay.onclick = toggleFiltersSidebar;
    document.body.appendChild(overlay);
}

function toggleFiltersSidebar() {
    filtersSidebar.classList.toggle('active');
    document.querySelector('.filters-overlay').classList.toggle('active');
    document.body.style.overflow = filtersSidebar.classList.contains('active') ? 'hidden' : '';
}

