// ========================================
// SOLICITAÇÕES JAVASCRIPT
// ========================================

// Dados simulados de solicitações de serviços
const solicitationsData = [
    {
        id: 1,
        title: "Reforma completa de banheiro",
        category: "Construção e Reformas",
        categorySlug: "construcao",
        client: "Maria Silva",
        clientAvatar: "MS",
        description: "Preciso reformar completamente meu banheiro. Incluindo troca de revestimentos, louças sanitárias, chuveiro elétrico e toda a parte hidráulica. O banheiro tem aproximadamente 4m².",
        budget: "R$ 2.500 - R$ 3.500",
        budgetRange: "1000+",
        urgency: "medium",
        deadline: "Em 15 dias",
        postedDate: "2 dias atrás",
        location: "Centro - Parauapebas",
        proposalsCount: 8,
        tags: ["Azulejo", "Hidráulica", "Elétrica", "Louças"],
        requirements: [
            "Experiência comprovada em reformas",
            "Fornecimento de materiais",
            "Garantia de 1 ano"
        ]
    },
    {
        id: 2,
        title: "Desenvolvimento de site para empresa",
        category: "Tecnologia e TI",
        categorySlug: "tecnologia",
        client: "João Santos",
        clientAvatar: "JS",
        description: "Empresa de contabilidade precisa de site institucional moderno e responsivo. Deve conter páginas sobre a empresa, serviços, equipe, contato e blog. Preferência por WordPress.",
        budget: "R$ 1.500 - R$ 2.500",
        budgetRange: "1000+",
        urgency: "low",
        deadline: "Em 30 dias",
        postedDate: "1 dia atrás",
        location: "Da Paz - Parauapebas",
        proposalsCount: 5,
        tags: ["WordPress", "Responsivo", "SEO", "Blog"],
        requirements: [
            "Portfolio com sites similares",
            "Conhecimento em SEO",
            "Suporte pós-entrega"
        ]
    },
    {
        id: 3,
        title: "Aulas particulares de matemática",
        category: "Educação",
        categorySlug: "educacao",
        client: "Ana Costa",
        clientAvatar: "AC",
        description: "Minha filha está no 2º ano do ensino médio e precisa de reforço em matemática. São 2 aulas por semana, preferencialmente às terças e quintas à tarde.",
        budget: "R$ 200 - R$ 300",
        budgetRange: "100-500",
        urgency: "high",
        deadline: "Esta semana",
        postedDate: "3 horas atrás",
        location: "Cidade Nova - Parauapebas",
        proposalsCount: 12,
        tags: ["Ensino Médio", "Domicílio", "Álgebra", "Geometria"],
        requirements: [
            "Formação em matemática",
            "Experiência com adolescentes",
            "Material didático próprio"
        ]
    },
    {
        id: 4,
        title: "Design de logo e identidade visual",
        category: "Design",
        categorySlug: "design",
        client: "Pedro Lima",
        clientAvatar: "PL",
        description: "Startup de delivery precisa de logo profissional e identidade visual completa. Incluindo cartão de visita, papel timbrado e manual de marca.",
        budget: "R$ 800 - R$ 1.200",
        budgetRange: "500-1000",
        urgency: "medium",
        deadline: "Em 10 dias",
        postedDate: "5 horas atrás",
        location: "Liberdade - Parauapebas",
        proposalsCount: 3,
        tags: ["Logo", "Branding", "Manual", "Delivery"],
        requirements: [
            "Portfolio de identidades visuais",
            "Arquivos vetoriais",
            "3 revisões incluídas"
        ]
    },
    {
        id: 5,
        title: "Instalação de ar condicionado",
        category: "Manutenção",
        categorySlug: "manutencao",
        client: "Carlos Oliveira",
        clientAvatar: "CO",
        description: "Preciso instalar 2 aparelhos de ar condicionado split em minha residência. Um de 12.000 BTUs na sala e outro de 9.000 BTUs no quarto. Já tenho os equipamentos.",
        budget: "R$ 300 - R$ 500",
        budgetRange: "100-500",
        urgency: "high",
        deadline: "Urgente - 2 dias",
        postedDate: "1 dia atrás",
        location: "Minérios - Parauapebas",
        proposalsCount: 15,
        tags: ["Split", "Instalação", "BTUs", "Residencial"],
        requirements: [
            "Técnico qualificado",
            "Ferramentas próprias",
            "Garantia da instalação"
        ]
    },
    {
        id: 6,
        title: "Personal trainer para hipertrofia",
        category: "Saúde e Bem-estar",
        categorySlug: "saude",
        client: "Roberta Mendes",
        clientAvatar: "RM",
        description: "Busco personal trainer especializado em hipertrofia muscular. Treinos 3x por semana, preferencialmente pela manhã. Tenho acesso à academia completa.",
        budget: "R$ 400 - R$ 600",
        budgetRange: "100-500",
        urgency: "low",
        deadline: "Sem pressa",
        postedDate: "4 dias atrás",
        location: "Betânia - Parauapebas",
        proposalsCount: 7,
        tags: ["Hipertrofia", "Academia", "Manhã", "3x semana"],
        requirements: [
            "CREF ativo",
            "Especialização em hipertrofia",
            "Flexibilidade de horários"
        ]
    },
    {
        id: 7,
        title: "Pintura externa de casa",
        category: "Construção e Reformas",
        categorySlug: "construcao",
        client: "Luiza Ferreira",
        clientAvatar: "LF",
        description: "Casa térrea de 120m² precisa de pintura externa completa. Incluindo preparação da parede, massa corrida onde necessário e duas demãos de tinta acrílica.",
        budget: "R$ 1.200 - R$ 1.800",
        budgetRange: "1000+",
        urgency: "low",
        deadline: "Em 20 dias",
        postedDate: "6 horas atrás",
        location: "União - Parauapebas",
        proposalsCount: 4,
        tags: ["Pintura", "Externa", "Acrílica", "Preparação"],
        requirements: [
            "Experiência em pintura externa",
            "Materiais inclusos",
            "Limpeza pós-serviço"
        ]
    },
    {
        id: 8,
        title: "Cabelo e maquiagem para casamento",
        category: "Beleza e Estética",
        categorySlug: "beleza",
        client: "Fernanda Santos",
        clientAvatar: "FS",
        description: "Casamento no dia 15/02. Preciso de profissional para fazer cabelo (penteado) e maquiagem para noiva. Teste préviio obrigatório. Cerimônia à tarde.",
        budget: "R$ 350 - R$ 500",
        budgetRange: "100-500",
        urgency: "medium",
        deadline: "15 de Fevereiro",
        postedDate: "2 dias atrás",
        location: "Rio Verde - Parauapebas",
        proposalsCount: 9,
        tags: ["Casamento", "Noiva", "Penteado", "Teste"],
        requirements: [
            "Portfolio de noivas",
            "Teste obrigatório",
            "Pontualidade essencial"
        ]
    }
];

// Estado da aplicação
let filteredSolicitations = [...solicitationsData];
let currentPage = 1;
const itemsPerPage = 6;

// Elementos DOM
const solicitationsList = document.getElementById('solicitationsList');
const resultsCount = document.getElementById('resultsCount');
const searchInput = document.getElementById('searchInput');
const categoryFilter = document.getElementById('categoryFilter');
const btnSearch = document.getElementById('btnSearch');
const btnClearFilters = document.getElementById('btnClearFilters');
const sortBy = document.getElementById('sortBy');

// ========================================
// INICIALIZAÇÃO
// ========================================
document.addEventListener('DOMContentLoaded', function() {
    renderSolicitations();
    setupEventListeners();
});

// ========================================
// EVENT LISTENERS
// ========================================
function setupEventListeners() {
    // Busca
    btnSearch.addEventListener('click', applyFilters);
    searchInput.addEventListener('keypress', function(e) {
        if (e.key === 'Enter') {
            applyFilters();
        }
    });

    // Filtros
    categoryFilter.addEventListener('change', applyFilters);
    btnClearFilters.addEventListener('click', clearFilters);
    
    // Ordenação
    sortBy.addEventListener('change', function() {
        applySorting(this.value);
    });

    // Checkboxes dos filtros
    const filterCheckboxes = document.querySelectorAll('.checkbox-group input[type="checkbox"]');
    filterCheckboxes.forEach(checkbox => {
        checkbox.addEventListener('change', applyFilters);
    });

    // Modal
    setupModal();
}

// ========================================
// RENDERIZAÇÃO
// ========================================
function renderSolicitations() {
    if (filteredSolicitations.length === 0) {
        solicitationsList.innerHTML = `
            <div style="text-align: center; padding: 3rem; color: var(--neutral-color);">
                <i class="fas fa-search" style="font-size: 3rem; margin-bottom: 1rem; opacity: 0.5;"></i>
                <h3>Nenhuma solicitação encontrada</h3>
                <p>Tente ajustar os filtros ou fazer uma nova busca.</p>
            </div>
        `;
        return;
    }

    const startIndex = (currentPage - 1) * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;
    const currentSolicitations = filteredSolicitations.slice(startIndex, endIndex);

    solicitationsList.innerHTML = currentSolicitations.map(solicitation => createSolicitationCard(solicitation)).join('');
    
    updateResultsCount();
    updatePagination();
}

function createSolicitationCard(solicitation) {
    const urgencyClass = `urgency-${solicitation.urgency}`;
    const urgencyText = {
        'high': 'Alta',
        'medium': 'Média', 
        'low': 'Baixa'
    }[solicitation.urgency];

    return `
        <div class="solicitation-card ${urgencyClass}">
            <div class="solicitation-header">
                <div>
                    <h3 class="solicitation-title">${solicitation.title}</h3>
                    <span class="solicitation-category">${solicitation.category}</span>
                </div>
                <span class="urgency-badge ${solicitation.urgency}">${urgencyText}</span>
            </div>

            <div class="solicitation-meta">
                <span>
                    <i class="fas fa-user"></i>
                    ${solicitation.client}
                </span>
                <span>
                    <i class="fas fa-map-marker-alt"></i>
                    ${solicitation.location}
                </span>
                <span>
                    <i class="fas fa-clock"></i>
                    ${solicitation.postedDate}
                </span>
                <span>
                    <i class="fas fa-calendar"></i>
                    ${solicitation.deadline}
                </span>
            </div>

            <div class="solicitation-description">
                ${solicitation.description}
            </div>

            <div class="solicitation-budget">
                <strong>Orçamento:</strong> ${solicitation.budget}
            </div>

            <div class="solicitation-tags">
                ${solicitation.tags.map(tag => `<span class="solicitation-tag">${tag}</span>`).join('')}
            </div>

            <div class="solicitation-actions">
                <button class="btn-send-proposal" onclick="sendProposal(${solicitation.id})">
                    <i class="fas fa-paper-plane"></i>
                    Enviar Proposta
                </button>
                <button class="btn-chat" onclick="startChat(${solicitation.id})">
                    <i class="fas fa-comments"></i>
                    Chat
                </button>
                <span class="proposals-count">${solicitation.proposalsCount} propostas recebidas</span>
            </div>
        </div>
    `;
}

// ========================================
// FILTROS E BUSCA
// ========================================
function applyFilters() {
    let filtered = [...solicitationsData];
    
    // Filtro por texto
    const searchTerm = searchInput.value.toLowerCase().trim();
    if (searchTerm) {
        filtered = filtered.filter(solicitation => 
            solicitation.title.toLowerCase().includes(searchTerm) ||
            solicitation.description.toLowerCase().includes(searchTerm) ||
            solicitation.tags.some(tag => tag.toLowerCase().includes(searchTerm))
        );
    }

    // Filtro por categoria
    const selectedCategory = categoryFilter.value;
    if (selectedCategory) {
        filtered = filtered.filter(solicitation => solicitation.categorySlug === selectedCategory);
    }

    // Filtros de checkbox
    const urgencyFilters = getCheckedValues('input[name="urgency"]:checked') || getCheckedFilters('urgency');
    const budgetFilters = getCheckedFilters('budget');
    const dateFilters = getCheckedFilters('date');

    if (urgencyFilters.length > 0) {
        filtered = filtered.filter(solicitation => urgencyFilters.includes(solicitation.urgency));
    }

    if (budgetFilters.length > 0) {
        filtered = filtered.filter(solicitation => budgetFilters.includes(solicitation.budgetRange));
    }

    // Filtros de data (simplificado)
    if (dateFilters.includes('hoje')) {
        filtered = filtered.filter(solicitation => solicitation.postedDate.includes('hora'));
    } else if (dateFilters.includes('semana')) {
        filtered = filtered.filter(solicitation => 
            solicitation.postedDate.includes('dia') || 
            solicitation.postedDate.includes('hora')
        );
    }

    filteredSolicitations = filtered;
    currentPage = 1;
    renderSolicitations();
}

function getCheckedFilters(filterType) {
    const checkboxes = document.querySelectorAll(`.filter-group input[type="checkbox"]:checked`);
    return Array.from(checkboxes)
        .map(cb => cb.value)
        .filter(value => {
            if (filterType === 'urgency') return ['high', 'medium', 'low'].includes(value);
            if (filterType === 'budget') return ['0-100', '100-500', '500-1000', '1000+', 'negociar'].includes(value);
            if (filterType === 'date') return ['hoje', 'semana', 'mes'].includes(value);
            return false;
        });
}

function clearFilters() {
    // Limpar campos
    searchInput.value = '';
    categoryFilter.value = '';
    sortBy.value = 'recent';
    
    // Limpar checkboxes
    document.querySelectorAll('input[type="checkbox"]').forEach(cb => cb.checked = false);
    
    // Resetar dados
    filteredSolicitations = [...solicitationsData];
    currentPage = 1;
    renderSolicitations();
}

function applySorting(sortType) {
    switch(sortType) {
        case 'urgent':
            filteredSolicitations.sort((a, b) => {
                const urgencyOrder = { 'high': 3, 'medium': 2, 'low': 1 };
                return urgencyOrder[b.urgency] - urgencyOrder[a.urgency];
            });
            break;
        case 'budget':
            filteredSolicitations.sort((a, b) => {
                // Ordenar por faixa de orçamento (aproximado)
                const budgetOrder = { '1000+': 4, '500-1000': 3, '100-500': 2, '0-100': 1 };
                return (budgetOrder[b.budgetRange] || 0) - (budgetOrder[a.budgetRange] || 0);
            });
            break;
        case 'proposals':
            filteredSolicitations.sort((a, b) => a.proposalsCount - b.proposalsCount);
            break;
        case 'recent':
        default:
            // Manter ordem original (mais recentes primeiro)
            filteredSolicitations = [...filteredSolicitations];
            break;
    }
    renderSolicitations();
}

// ========================================
// AÇÕES
// ========================================
function sendProposal(solicitationId) {
    alert(`Funcionalidade de enviar proposta para solicitação ${solicitationId} será implementada em breve!`);
    // Aqui integraria com o sistema de propostas
}

function startChat(solicitationId) {
    // Redirecionar para a página de chat
    window.location.href = `chat.html?solicitation=${solicitationId}`;
}

// ========================================
// MODAL
// ========================================
function setupModal() {
    const modal = document.getElementById('postServiceModal');
    const form = document.getElementById('postServiceForm');

    // Fechar modal ao clicar fora
    modal.addEventListener('click', function(e) {
        if (e.target === modal) {
            closePostServiceModal();
        }
    });

    // Submissão do formulário
    form.addEventListener('submit', function(e) {
        e.preventDefault();
        
        // Simular postagem
        alert('Solicitação postada com sucesso! Em breve profissionais começarão a enviar propostas.');
        closePostServiceModal();
        form.reset();
    });
}

function openPostServiceModal() {
    const modal = document.getElementById('postServiceModal');
    modal.style.display = 'flex';
    document.body.style.overflow = 'hidden';
}

function closePostServiceModal() {
    const modal = document.getElementById('postServiceModal');
    modal.style.display = 'none';
    document.body.style.overflow = '';
}

// ========================================
// UTILITÁRIOS
// ========================================
function updateResultsCount() {
    resultsCount.textContent = `${filteredSolicitations.length} solicitações encontradas`;
}

function updatePagination() {
    const totalPages = Math.ceil(filteredSolicitations.length / itemsPerPage);
    const paginationNumbers = document.getElementById('paginationNumbers');
    const btnPrevPage = document.getElementById('btnPrevPage');
    const btnNextPage = document.getElementById('btnNextPage');

    // Atualizar botões prev/next
    btnPrevPage.disabled = currentPage === 1;
    btnNextPage.disabled = currentPage === totalPages;

    // Atualizar números das páginas
    paginationNumbers.innerHTML = '';
    for (let i = 1; i <= totalPages; i++) {
        const button = document.createElement('button');
        button.className = `pagination-number ${i === currentPage ? 'active' : ''}`;
        button.textContent = i;
        button.addEventListener('click', () => {
            currentPage = i;
            renderSolicitations();
        });
        paginationNumbers.appendChild(button);
    }

    // Event listeners para prev/next
    btnPrevPage.onclick = () => {
        if (currentPage > 1) {
            currentPage--;
            renderSolicitations();
        }
    };

    btnNextPage.onclick = () => {
        if (currentPage < totalPages) {
            currentPage++;
            renderSolicitations();
        }
    };
}