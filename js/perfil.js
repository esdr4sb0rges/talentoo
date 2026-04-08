// ========================================
// PERFIL JAVASCRIPT
// ========================================

// Dados simulados de profissionais (sincronizado com buscar.js)
const professionalsDatabase = {
    1: {
        id: 1,
        name: "Carlos Silva",
        age: 45,
        avatar: "Eletricista",
        gender: "Masculino",
        category: "Eletricista",
        categorySlug: "manutenção",
        rating: 4.9,
        reviewsCount: 127,
        description: "⚡️ Segurança e eficiência que você pode confiar! Sou Carlos Silva (45), seu Eletricista em Parauapebas com mais de 15 anos de estrada. Chega de gambiarras! Sou especialista em adequação à NBR 5410, manutenção preventiva e emergências 24h para residências e pequenos comércios. Se o assunto é eletricidade, garanto um serviço limpo, seguro e com excelência. Peça seu orçamento e acenda a tranquilidade!",
        tags: ["Instalação", "Manutenção", "Emergência"],
        location: "Parauapebas - PA",
        experience: "10+",
        availability: "Disponibilidade imediata",
        memberSince: "Janeiro 2020",
        services: [
            "Instalação elétrica completa",
            "Manutenção preventiva e corretiva",
            "Adequação de quadros elétricos",
            "Instalação de iluminação LED",
            "Automação residencial",
            "Atendimento emergencial 24h"
        ],
        certifications: [
            "NR-10 - Segurança em Instalações Elétricas",
            "Curso de Automação Residencial",
            "Certificação ABNT NBR 5410"
        ],
        portfolio: [
            { image: "../assets/static/images/portfolio/Eletricista profissional/Eletricista Profissional.jpg", caption: "Instalação elétrica residencial completa" },
            { image: "../assets/static/images/portfolio/Eletricista profissional/Eletricista Profissional 2.jpg", caption: "Quadro elétrico industrial" },
            { image: "../assets/static/images/portfolio/Eletricista profissional/Eletricista Profissional 3.jpg", caption: "Sistema de iluminação LED" },
            { image: "../assets/static/images/portfolio/Eletricista profissional/Eletricista Profissional 4.jpg", caption: "Automação residencial" }
        ],
        reviews: [
            { author: "Maria Santos", rating: 5, date: "15 de Outubro de 2025", text: "Excelente profissional! Fez a instalação elétrica da minha casa nova com muita qualidade e atenção aos detalhes. Muito pontual e organizado. Recomendo!" },
            { author: "João Oliveira", rating: 5, date: "8 de Outubro de 2025", text: "Carlos é muito competente e honesto. Resolveu um problema elétrico que outros eletricistas não conseguiram identificar. Preço justo e trabalho de qualidade." },
            { author: "Ana Paula Costa", rating: 4, date: "2 de Outubro de 2025", text: "Profissional exemplar! Instalou toda a iluminação LED da minha loja e ficou perfeito." }
        ]
    },
    2: {
        id: 2,
        name: "Ana Paula Costa",
        age: 32,
        avatar: "Designer",
        gender: "Feminino",
        category: "Designer Gráfico",
        categorySlug: "design",
        rating: 5.0,
        reviewsCount: 89,
        description: "🎨 Sua marca, minha paixão! Eu sou Ana Paula Costa (32), Designer Gráfico obcecada por Identidade Visual e Branding. Crio o 'rosto' que faz o seu negócio ser notado, desde um logo inesquecível até um feed coeso no Instagram. Se você está em Curionópolis e quer parar de ser 'só mais um', vamos dar um *upgrade* visual na sua história. Bora conversar sobre o seu projeto?",
        tags: ["Branding", "Logo", "Social Media"],
        location: "Curionópolis - PA",
        experience: "5-10",
        availability: "Disponível esta semana",
        memberSince: "Março 2019",
        services: [
            "Criação de logotipos e identidade visual",
            "Design para redes sociais",
            "Materiais impressos (cartões, flyers, banners)",
            "Apresentações e slides corporativos",
            "Edição de imagens",
            "Design para web e apps"
        ],
        certifications: [
            "Adobe Certified Professional",
            "Design Thinking Certification",
            "Curso Avançado de Branding"
        ],
        portfolio: [
            { image: "../assets/static/images/portfolio/Designer gráfico/Designer gráfico 1.jpg", caption: "Identidade visual para restaurante" },
            { image: "../assets/static/images/portfolio/Designer gráfico/Designer gráfico 2.jpg", caption: "Campanha de redes sociais" },
            { image: "../assets/static/images/portfolio/Designer gráfico/Designer gráfico 3.jpg", caption: "Manual de marca completo" },
            { image: "../assets/static/images/portfolio/Designer gráfico/Designer gráfico 4.jpg", caption: "Projeto de branding completo" }
        ],
        reviews: [
            { author: "Ricardo Moreira", rating: 5, date: "20 de Outubro de 2025", text: "Ana é extremamente criativa e atenciosa. Criou a identidade visual da minha empresa e superou todas as expectativas. Recomendo muito!" },
            { author: "Juliana Campos", rating: 5, date: "12 de Outubro de 2025", text: "Trabalho impecável! Entendeu perfeitamente o que eu queria e entregou no prazo combinado." }
        ]
    },
    3: {
        id: 3,
        name: "Roberto Mendes",
        age: 38,
        avatar: "Programador",
        gender: "Masculino",
        category: "Desenvolvedor Web",
        categorySlug: "tecnologia",
        rating: 4.8,
        reviewsCount: 156,
        description: "💻 Transformo ideias em sistemas que *realmente* funcionam. Sou Roberto Mendes (38), Desenvolvedor Full-Stack focado em React/Node.js. Sua empresa em Curionópolis precisa de um e-commerce parrudo, um sistema administrativo ágil ou um site que rankeia no Google? Com mais de 10 anos de código, eu entrego soluções robustas, escaláveis e sob medida. Próxima linha de código? A do seu projeto de sucesso!",
        tags: ["React", "Node.js", "WordPress"],
        location: "Curionópolis - PA",
        experience: "5-10",
        availability: "Disponível este mês",
        memberSince: "Julho 2018",
        services: [
            "Desenvolvimento de sites responsivos",
            "Criação de e-commerce",
            "Sistemas web personalizados",
            "Sites em WordPress",
            "APIs e integrações",
            "Manutenção e suporte técnico"
        ],
        certifications: [
            "Meta Front-End Developer Certificate",
            "Node.js Certification",
            "Google Analytics Certified"
        ],
        portfolio: [
            { image: "../assets/static/images/portfolio/Desenvolvedor web full-stack/Desenvolvedor web full-stack 1.jpg", caption: "E-commerce de moda" },
            { image: "../assets/static/images/portfolio/Desenvolvedor web full-stack/Desenvolvedor web full-stack 2.jpg", caption: "Sistema de gestão empresarial" },
            { image: "../assets/static/images/portfolio/Desenvolvedor web full-stack/Desenvolvedor web full-stack 3.jpg", caption: "Landing page para startup" },
            { image: "../assets/static/images/portfolio/Desenvolvedor web full-stack/Desenvolvedor web full-stack 4.jpg", caption: "Aplicativo web responsivo" }
        ],
        reviews: [
            { author: "Fernando Silva", rating: 5, date: "18 de Outubro de 2025", text: "Roberto desenvolveu nosso e-commerce do zero e ficou perfeito! Muito profissional e sempre disponível para ajustes." },
            { author: "Carla Santos", rating: 4, date: "10 de Outubro de 2025", text: "Bom trabalho, site ficou funcional e bonito. Apenas demorou um pouco mais que o previsto." }
        ]
    },
    4: {
        id: 4,
        name: "Juliana Santos",
        age: 29,
        avatar: "Professora",
        gender: "Feminino",
        category: "Professora Particular",
        categorySlug: "educacao",
        rating: 4.7,
        reviewsCount: 94,
        description: "📚 Matemática e Física não precisam ser um bicho de sete cabeças! Sou Juliana Santos (29), sua Profa. Particular em Parauapebas. Minha missão é tirar o 'trauma' de exatas com uma didática clara e ultra focada. Se o objetivo é gabaritar a prova, passar no vestibular ou *finalmente* entender a matéria, eu tenho o plano de estudos certo para você. Vamos juntos vencer esses desafios?",
        tags: ["Matemática", "Física", "Reforço"],
        location: "Parauapebas - PA",
        experience: "3-5",
        availability: "Disponibilidade imediata",
        memberSince: "Setembro 2020",
        services: [
            "Aulas de matemática (todos os níveis)",
            "Aulas de física",
            "Reforço escolar",
            "Preparação para ENEM e vestibulares",
            "Acompanhamento de tarefas",
            "Aulas online e presenciais"
        ],
        certifications: [
            "Graduação em Engenharia Civil",
            "Curso de Didática e Metodologia",
            "Treinamento em Ensino Online"
        ],
        portfolio: [
            { image: "../assets/static/images/portfolio/Professora de matemática e física/Professora de matemática e física 1.jpg", caption: "Material didático personalizado" },
            { image: "../assets/static/images/portfolio/Professora de matemática e física/Professora de matemática e física 2.jpg", caption: "Alunos aprovados em vestibulares" },
            { image: "../assets/static/images/portfolio/Professora de matemática e física/Professora de matemática e física 3.jpg", caption: "Aula de física experimental" },
            { image: "../assets/static/images/portfolio/Professora de matemática e física/Professora de matemática e física 4.jpg", caption: "Preparação para ENEM" }
        ],
        reviews: [
            { author: "Mariana Costa", rating: 5, date: "22 de Outubro de 2025", text: "Minha filha melhorou muito em matemática com as aulas da Juliana. Excelente professora, paciente e dedicada!" },
            { author: "Pedro Alves", rating: 4, date: "15 de Outubro de 2025", text: "Boas aulas, explicação clara. Me ajudou muito a passar no ENEM." }
        ]
    },
    5: {
        id: 5,
        name: "Pedro Oliveira",
        age: 52,
        avatar: "Pedreiro",
        gender: "Masculino",
        category: "Pedreiro",
        categorySlug: "construcao",
        rating: 4.6,
        reviewsCount: 203,
        description: "🧱 Obra sem dor de cabeça tem nome e sobrenome: Pedro Oliveira (52), Pedreiro Profissional. Mais de 20 anos de experiência em Canaã dos Carajás, garantindo que sua fundação seja sólida e seu acabamento, impecável. Especialista em alvenaria e reforma. Valorizo a pontualidade, o capricho e a limpeza. Sua satisfação é a minha régua. Orçamento rápido e sem enrolação!",
        tags: ["Alvenaria", "Reforma", "Acabamento"],
        location: "Canaã dos Carajás - PA",
        experience: "10+",
        availability: "Disponível esta semana",
        memberSince: "Fevereiro 2018",
        services: [
            "Construção de muros e paredes",
            "Alvenaria em geral",
            "Reboco e emboço",
            "Assentamento de pisos e azulejos",
            "Contrapiso e nivelamento",
            "Reformas residenciais e comerciais"
        ],
        certifications: [
            "Curso de Segurança do Trabalho",
            "Treinamento em Alvenaria Estrutural",
            "NR-35 - Trabalho em Altura"
        ],
        portfolio: [
            { image: "../assets/static/images/portfolio/Pedreiro profissional/Pedreiro profissional 2.jpg", caption: "Construção residencial completa" },
            { image: "../assets/static/images/portfolio/Pedreiro profissional/Pedreiro profissional 3.jpg", caption: "Reforma de cozinha" },
            { image: "../assets/static/images/portfolio/Pedreiro profissional/Pedreiro profissional 4.jpg", caption: "Acabamento em piso" },
            { image: "../assets/static/images/portfolio/Pedreiro profissional/Pedreiro profissional 5.jpg", caption: "Alvenaria estrutural" }
        ],
        reviews: [
            { author: "Lucas Mendes", rating: 5, date: "19 de Outubro de 2025", text: "Pedro fez toda a construção da minha casa. Trabalho impecável, muito caprichoso. Super recomendo!" },
            { author: "Beatriz Lima", rating: 4, date: "11 de Outubro de 2025", text: "Bom profissional, reformou minha cozinha e ficou ótima. Preço justo." }
        ]
    },
    6: {
        id: 6,
        name: "Mariana Ferreira",
        age: 27,
        avatar: "Manicure",
        gender: "Feminino",
        category: "Manicure e Pedicure",
        categorySlug: "beleza",
        rating: 5.0,
        reviewsCount: 178,
        description: "💅 Self-care sem sair de casa! Sou Mariana Ferreira (27), Manicure e Pedicure Profissional, levando biossegurança e as últimas tendências até você em Parauapebas. Especialista em alongamento (gel/fibra) e nail art de arrasar. O combo conforto + higiene + unhas perfeitas que elevam sua autoestima. Agende seu horário e sinta a diferença de um cuidado 5 estrelas!",
        tags: ["Unhas", "Decoração", "Alongamento"],
        location: "Parauapebas - PA",
        experience: "5-10",
        availability: "Disponibilidade imediata",
        memberSince: "Abril 2019",
        services: [
            "Manicure e pedicure completa",
            "Unhas decoradas e nail art",
            "Alongamento em gel e fibra",
            "Blindagem de unhas",
            "Esmaltação em gel",
            "Atendimento domiciliar"
        ],
        certifications: [
            "Curso Profissionalizante de Manicure",
            "Especialização em Nail Art",
            "Curso de Biossegurança e Esterilização"
        ],
        portfolio: [
            { image: "../assets/static/images/portfolio/Manicure profissional/Manicure profissional 1.jpg", caption: "Nail art personalizada" },
            { image: "../assets/static/images/portfolio/Manicure profissional/Manicure profissional 2.jpg", caption: "Alongamento em gel" },
            { image: "../assets/static/images/portfolio/Manicure profissional/Manicure profissional 3.jpg", caption: "Unhas decoradas para festa" },
            { image: "../assets/static/images/portfolio/Manicure profissional/Manicure profissional 4.jpg", caption: "Design de unhas moderno" }
        ],
        reviews: [
            { author: "Camila Santos", rating: 5, date: "21 de Outubro de 2025", text: "Mariana é maravilhosa! Minhas unhas sempre ficam perfeitas. Super caprichosa e pontual." },
            { author: "Tatiana Costa", rating: 5, date: "14 de Outubro de 2025", text: "Melhor manicure da região! Trabalho impecável e produtos de ótima qualidade." }
        ]
    },
    7: {
        id: 7,
        name: "Fernando Alves",
        age: 48,
        avatar: "Encanador",
        gender: "Masculino",
        category: "Encanador",
        categorySlug: "manutencao",
        rating: 4.5,
        reviewsCount: 112,
        description: "💧 O pingo que te tira o sono, eu resolvo! Sou Fernando Alves (48), Encanador com 12 anos de expertise em Parauapebas. Rápido, honesto e focado na detecção e reparo de vazamentos e problemas hidráulicos complexos. De torneira pingando à troca de tubulação, o meu serviço é garantir que sua conta de água baixe e seu sistema funcione perfeitamente. Solução imediata e sem sujeira!",
        tags: ["Instalação", "Vazamentos", "Manutenção"],
        location: "Parauapebas - PA",
        experience: "10+",
        availability: "Disponibilidade imediata",
        memberSince: "Maio 2017",
        services: [
            "Instalação hidráulica completa",
            "Detecção e reparo de vazamentos",
            "Desentupimento de pias, ralos e vasos",
            "Instalação de louças e metais",
            "Troca de tubulações",
            "Atendimento emergencial 24h"
        ],
        certifications: [
            "Curso de Encanador Profissional",
            "Treinamento em Sistemas Hidráulicos",
            "Certificação em Detecção de Vazamentos"
        ],
        portfolio: [
            { image: "../assets/static/images/portfolio/Encanador residencial/Encanador residencial 1.jpg", caption: "Instalação hidráulica residencial" },
            { image: "../assets/static/images/portfolio/Encanador residencial/Encanador residencial 2.webp", caption: "Reparo de vazamento" },
            { image: "../assets/static/images/portfolio/Encanador residencial/Encanador residencial 3.jpg", caption: "Sistema de água quente" },
            { image: "../assets/static/images/portfolio/Encanador residencial/Encanador residencial 4.webp", caption: "Tubulação nova" }
        ],
        reviews: [
            { author: "Roberto Silva", rating: 5, date: "17 de Outubro de 2025", text: "Fernando resolveu um vazamento que ninguém conseguia encontrar. Muito competente!" },
            { author: "Sandra Oliveira", rating: 4, date: "9 de Outubro de 2025", text: "Bom profissional, fez a instalação do banheiro da minha casa. Recomendo." }
        ]
    },
    8: {
        id: 8,
        name: "Camila Rodrigues",
        age: 34,
        avatar: "Fotógrafa",
        gender: "Feminino",
        category: "Fotógrafa",
        categorySlug: "eventos",
        rating: 4.9,
        reviewsCount: 145,
        description: "📸 Congelo a emoção para que a memória dure para sempre. Sou Camila Rodrigues (34), Fotógrafa de Casamentos e Famílias em Canaã dos Carajás. Meu trabalho é sutil, criativo e conta a sua história com sensibilidade. Mais do que fotos, entrego um legado visual do seu dia especial, com edição de cinema. Vamos transformar seu evento em arte?",
        tags: ["Casamentos", "Eventos", "Ensaios"],
        location: "Canaã dos Carajás - PA",
        experience: "5-10",
        availability: "Disponível este mês",
        memberSince: "Janeiro 2016",
        services: [
            "Fotografia de casamentos",
            "Cobertura de eventos corporativos",
            "Ensaios fotográficos (família, gestante, newborn)",
            "Book fotográfico profissional",
            "Fotografia de produtos",
            "Edição profissional inclusa"
        ],
        certifications: [
            "Graduação em Fotografia Digital",
            "Curso Avançado de Iluminação",
            "Certificação em Edição Adobe Lightroom e Photoshop"
        ],
        portfolio: [
            { image: "../assets/static/images/portfolio/Fotógrafa profissional/Fotógrafa profissional 2.jpg", caption: "Fotografia de casamento" },
            { image: "../assets/static/images/portfolio/Fotógrafa profissional/Fotógrafa profissional 3.jpg", caption: "Ensaio fotográfico família" },
            { image: "../assets/static/images/portfolio/Fotógrafa profissional/Fotógrafa profissional 4.jpg", caption: "Cobertura de evento corporativo" },
            { image: "../assets/static/images/portfolio/Fotógrafa profissional/Fotógrafa profissional 5.jpg", caption: "Book profissional" }
        ],
        reviews: [
            { author: "Patricia Mendes", rating: 5, date: "23 de Outubro de 2025", text: "Camila fotografou meu casamento e as fotos ficaram lindas! Profissional incrível, super atenciosa." },
            { author: "André Costa", rating: 5, date: "16 de Outubro de 2025", text: "Excelente fotógrafa! Fez o book da minha empresa e superou as expectativas." }
        ]
    },
    9: {
        id: 9,
        name: "Lucas Barbosa",
        age: 31,
        avatar: "Personal",
        gender: "Masculino",
        category: "Personal Trainer",
        categorySlug: "saude",
        rating: 4.8,
        reviewsCount: 87,
        description: "💪 Chega de treinar sem rumo! Sou Lucas Barbosa (31), Personal Trainer em Parauapebas. Seus objetivos (emagrecer, hipertrofia ou condicionamento) são a minha meta. Meu plano de treino é 100% personalizado e inclui orientação nutricional básica para otimizar seus ganhos. Pare de adiar o corpo que você quer. Bora sair da zona de conforto com propósito e resultados!",
        tags: ["Emagrecimento", "Hipertrofia", "Funcional"],
        location: "Parauapebas - PA",
        experience: "3-5",
        availability: "Disponibilidade imediata",
        memberSince: "Agosto 2021",
        services: [
            "Treinos personalizados",
            "Emagrecimento e perda de gordura",
            "Hipertrofia e ganho de massa",
            "Treinamento funcional",
            "Condicionamento físico",
            "Orientação nutricional básica"
        ],
        certifications: [
            "Bacharel em Educação Física",
            "Especialização em Treinamento Funcional",
            "Curso de Nutrição Esportiva"
        ],
        portfolio: [
            { image: "../assets/static/images/portfolio/Personal trainer/Personal trainer 1.jpg", caption: "Treino funcional ao ar livre" },
            { image: "../assets/static/images/portfolio/Personal trainer/Personal trainer 2.jpg", caption: "Transformação de aluno" },
            { image: "../assets/static/images/portfolio/Personal trainer/Personal trainer 3.jpg", caption: "Treino de hipertrofia" },
            { image: "../assets/static/images/portfolio/Personal trainer/Personal trainer 4.jpg", caption: "Condicionamento físico" }
        ],
        reviews: [
            { author: "Fernanda Lima", rating: 5, date: "20 de Outubro de 2025", text: "Lucas é um excelente profissional! Perdi 15kg em 6 meses com acompanhamento dele. Super recomendo!" },
            { author: "Carlos Mendes", rating: 4, date: "13 de Outubro de 2025", text: "Bom personal, treinos eficientes e sempre motivador." }
        ]
    },
    10: {
        id: 10,
        name: "Beatriz Lima",
        age: 41,
        avatar: "Contadora",
        gender: "Feminino",
        category: "Consultora Financeira",
        categorySlug: "consultoria",
        rating: 5.0,
        reviewsCount: 62,
        description: "💰 Simplifique sua relação com o dinheiro! Sou Beatriz Lima (41), Consultora Financeira. Seja para sua empresa ou para suas finanças pessoais em Curionópolis, meu foco é te dar o controle total. Chega de estresse com planejamento, investimentos e contas. Ofereço o mapa para sua tranquilidade financeira. Vamos sentar e organizar sua vida econômica?",
        tags: ["Planejamento", "Investimentos", "Finanças"],
        location: "Curionópolis - PA",
        experience: "5-10",
        availability: "Disponível esta semana",
        memberSince: "Outubro 2017",
        services: [
            "Planejamento financeiro pessoal",
            "Consultoria financeira empresarial",
            "Análise e controle de gastos",
            "Orientação sobre investimentos",
            "Educação financeira",
            "Organização de finanças familiares"
        ],
        certifications: [
            "Graduação em Administração",
            "CFP - Certified Financial Planner",
            "MBA em Finanças"
        ],
        portfolio: [
            { image: "https://via.placeholder.com/400x400/FFD700/FFFFFF?text=Consultoria", caption: "Planejamento financeiro" },
            { image: "https://via.placeholder.com/400x400/DAA520/FFFFFF?text=Workshop", caption: "Workshop de educação financeira" }
        ],
        reviews: [
            { author: "Marcos Silva", rating: 5, date: "24 de Outubro de 2025", text: "Beatriz transformou minhas finanças! Agora consigo poupar e investir. Profissional excepcional." },
            { author: "Julia Santos", rating: 5, date: "18 de Outubro de 2025", text: "Excelente consultora! Me ajudou a organizar as finanças da minha empresa." }
        ]
    },
    11: {
        id: 11,
        name: "Ricardo Souza",
        age: 55,
        avatar: "Pintor",
        gender: "Masculino",
        category: "Pintor",
        categorySlug: "construcao",
        rating: 4.7,
        reviewsCount: 134,
        description: "🎨 Da parede sem vida para um ambiente inspirador! Sou Ricardo Souza (55), o Pintor que zela pelo seu espaço em Parauapebas. Não é só pintura, é acabamento impecável, seja textura, grafiato ou o liso perfeito. Meu diferencial? Organização *antes*, *durante* e limpeza total *depois*. Peça seu orçamento e veja como a atenção aos detalhes transforma o resultado final.",
        tags: ["Residencial", "Comercial", "Textura"],
        location: "Parauapebas - PA",
        experience: "10+",
        availability: "Disponível esta semana",
        memberSince: "Dezembro 2016",
        services: [
            "Pintura residencial interna e externa",
            "Pintura comercial",
            "Aplicação de textura",
            "Grafiato e efeitos especiais",
            "Massa corrida e preparação de parede",
            "Pintura de portões e grades"
        ],
        certifications: [
            "Curso Profissionalizante de Pintor",
            "Treinamento em Texturas Decorativas",
            "Curso de Segurança do Trabalho"
        ],
        portfolio: [
            { image: "https://via.placeholder.com/400x400/9370DB/FFFFFF?text=Casa+1", caption: "Pintura residencial completa" },
            { image: "https://via.placeholder.com/400x400/8A2BE2/FFFFFF?text=Textura", caption: "Aplicação de textura decorativa" },
            { image: "https://via.placeholder.com/400x400/9932CC/FFFFFF?text=Comercial", caption: "Pintura de loja comercial" }
        ],
        reviews: [
            { author: "Angela Costa", rating: 5, date: "19 de Outubro de 2025", text: "Ricardo pintou minha casa inteira. Trabalho impecável, muito limpo e organizado. Super recomendo!" },
            { author: "Paulo Mendes", rating: 4, date: "12 de Outubro de 2025", text: "Bom pintor, fez um bom serviço na minha loja. Preço justo." }
        ]
    },
    12: {
        id: 12,
        name: "Tatiana Moreira",
        age: 36,
        avatar: "Cabeleireira",
        gender: "Feminino",
        category: "Cabeleireira",
        categorySlug: "beleza",
        rating: 4.9,
        reviewsCount: 201,
        description: "✨ Seu cabelo dos sonhos, no conforto da sua casa! Sou Tatiana Moreira (36), Cabeleireira em Parauapebas. Especialista em coloração que brilha, cortes modernos e tratamentos que resgatam a saúde do seu fio. Levo todo o serviço de salão (com produtos premium) até você. Minha arte é realçar a sua beleza e garantir que você se sinta incrível!",
        tags: ["Corte", "Coloração", "Tratamento"],
        location: "Parauapebas - PA",
        experience: "5-10",
        availability: "Disponibilidade imediata",
        memberSince: "Fevereiro 2016",
        services: [
            "Cortes femininos e masculinos",
            "Coloração e mechas",
            "Alisamentos (progressiva, botox, etc)",
            "Hidratação e tratamentos capilares",
            "Penteados para festas e eventos",
            "Atendimento domiciliar"
        ],
        certifications: [
            "Curso Profissionalizante de Cabeleireiro",
            "Especialização em Colorimetria",
            "Curso de Cortes Modernos"
        ],
        portfolio: [
            { image: "https://via.placeholder.com/400x400/FF1493/FFFFFF?text=Corte+1", caption: "Corte feminino moderno" },
            { image: "https://via.placeholder.com/400x400/FF69B4/FFFFFF?text=Coloracao", caption: "Coloração e mechas" },
            { image: "https://via.placeholder.com/400x400/DB7093/FFFFFF?text=Penteado", caption: "Penteado para festa" }
        ],
        reviews: [
            { author: "Vanessa Silva", rating: 5, date: "22 de Outubro de 2025", text: "Tatiana é maravilhosa! Meu cabelo sempre fica perfeito. Profissional super atenciosa e competente." },
            { author: "Monica Costa", rating: 5, date: "15 de Outubro de 2025", text: "Melhor cabeleireira! Faz milagres no meu cabelo. Super indico!" }
        ]
    },
    13: {
        id: 13,
        name: "André Carvalho",
        age: 42,
        avatar: "Mecânico",
        gender: "Masculino",
        category: "Mecânico de Veículos",
        categorySlug: "manutencao",
        rating: 4.8,
        reviewsCount: 165,
        description: "🚗 Seu carro em boas mãos, sem surpresas na conta. Sou André Carvalho (42), seu Mecânico de confiança em Canaã dos Carajás. Especialista em diagnóstico eletrônico e injeção, dou a manutenção que seu veículo precisa para rodar *seguro* e *eficiente*. Compromisso com a honestidade e a qualidade em cada reparo. Traga seu carro e tenha a certeza de um serviço transparente!",
        tags: ["Mecânica Geral", "Injeção Eletrônica", "Freios"],
        location: "Canaã dos Carajás - PA",
        experience: "10+",
        availability: "Disponibilidade imediata",
        memberSince: "Junho 2015",
        services: [
            "Manutenção preventiva completa",
            "Diagnóstico eletrônico",
            "Reparo de injeção eletrônica",
            "Troca de óleo e filtros",
            "Sistema de freios e suspensão",
            "Reparo de motor e câmbio"
        ],
        certifications: [
            "Curso Técnico em Mecânica Automotiva",
            "Certificação em Injeção Eletrônica",
            "Treinamento em Diagnóstico por Scanner"
        ],
        portfolio: [
            { image: "https://via.placeholder.com/400x400/2F4F4F/FFFFFF?text=Oficina", caption: "Oficina completa e equipada" },
            { image: "https://via.placeholder.com/400x400/696969/FFFFFF?text=Diagnostico", caption: "Diagnóstico eletrônico" }
        ],
        reviews: [
            { author: "Gustavo Lima", rating: 5, date: "21 de Outubro de 2025", text: "André é muito competente! Resolveu um problema no meu carro que outros mecânicos não conseguiram. Recomendo!" },
            { author: "Rafael Santos", rating: 4, date: "14 de Outubro de 2025", text: "Bom mecânico, preço honesto. Faz revisão do meu carro há anos." }
        ]
    },
    14: {
        id: 14,
        name: "Patrícia Almeida",
        age: 26,
        avatar: "Nutricionista",
        gender: "Feminino",
        category: "Nutricionista",
        categorySlug: "saude",
        rating: 5.0,
        reviewsCount: 73,
        description: "🥗 Fim das dietas radicais! Sou Patrícia Almeida (26), Nutricionista que acredita na Reeducação Alimentar e em resultados duradouros. Seja para emagrecimento, performance esportiva ou mais saúde, crio planos 100% alinhados à sua rotina. Atendo em Curionópolis (presencial ou online). Vamos nutrir seu corpo e sua mente sem terrorismo alimentar?",
        tags: ["Emagrecimento", "Nutrição Esportiva", "Reeducação"],
        location: "Curionópolis - PA",
        experience: "3-5",
        availability: "Disponível esta semana",
        memberSince: "Novembro 2020",
        services: [
            "Consulta nutricional completa",
            "Planos alimentares personalizados",
            "Nutrição para emagrecimento",
            "Nutrição esportiva",
            "Reeducação alimentar",
            "Atendimento online e presencial"
        ],
        certifications: [
            "Graduação em Nutrição - CRN ativo",
            "Pós-graduação em Nutrição Esportiva",
            "Curso de Nutrição Comportamental"
        ],
        portfolio: [
            { image: "https://via.placeholder.com/400x400/32CD32/FFFFFF?text=Consulta", caption: "Consultório de nutrição" },
            { image: "https://via.placeholder.com/400x400/228B22/FFFFFF?text=Resultado", caption: "Resultados de pacientes" }
        ],
        reviews: [
            { author: "Amanda Silva", rating: 5, date: "23 de Outubro de 2025", text: "Patrícia é incrível! Perdi 12kg de forma saudável com acompanhamento dela. Super indico!" },
            { author: "Diego Costa", rating: 5, date: "16 de Outubro de 2025", text: "Excelente nutricionista! Me ajudou a melhorar minha performance nos treinos." }
        ]
    },
    15: {
        id: 15,
        name: "Marcos Vinicius",
        age: 39,
        avatar: "Advogado",
        gender: "Masculino",
        category: "Advogado",
        categorySlug: "consultoria",
        rating: 4.6,
        reviewsCount: 118,
        description: "⚖️ Seu direito com a agilidade e clareza que você precisa. Sou Marcos Vinicius (39), Advogado em Canaã dos Carajás, especialista em Direito Trabalhista e Civil. Ofereço consultoria focada em soluções rápidas, eficazes e transparentes. Minha prioridade é lutar pelos seus direitos e te dar a tranquilidade jurídica para focar no que realmente importa. Sua defesa começa aqui!",
        tags: ["Trabalhista", "Civil", "Consultoria"],
        location: "Canaã dos Carajás - PA",
        experience: "10+",
        availability: "Disponível esta semana",
        memberSince: "Março 2014",
        services: [
            "Direito trabalhista (reclamações, rescisões)",
            "Direito civil (contratos, indenizações)",
            "Consultoria jurídica empresarial",
            "Elaboração e revisão de contratos",
            "Acompanhamento processual",
            "Orientação jurídica preventiva"
        ],
        certifications: [
            "Graduação em Direito - OAB ativo",
            "Pós-graduação em Direito do Trabalho",
            "Especialização em Direito Civil"
        ],
        portfolio: [
            { image: "https://via.placeholder.com/400x400/000080/FFFFFF?text=Escritorio", caption: "Escritório de advocacia" },
            { image: "https://via.placeholder.com/400x400/191970/FFFFFF?text=Atendimento", caption: "Atendimento personalizado" }
        ],
        reviews: [
            { author: "Renato Oliveira", rating: 5, date: "20 de Outubro de 2025", text: "Marcos é um excelente advogado! Me ajudou em uma causa trabalhista complexa e ganhamos. Muito competente!" },
            { author: "Silvia Mendes", rating: 4, date: "13 de Outubro de 2025", text: "Bom advogado, me orientou bem em questões contratuais." }
        ]
    }
};

// Estado da aplicação
let currentProfessional = null;
let currentTab = 'sobre';

// ========================================
// INICIALIZAÇÃO
// ========================================
document.addEventListener('DOMContentLoaded', function() {
    loadProfessionalData();
    setupTabs();
    setupContactForm();
});

// ========================================
// CARREGAR DADOS DO PROFISSIONAL
// ========================================
function loadProfessionalData() {
    // Pega o ID da URL
    const urlParams = new URLSearchParams(window.location.search);
    const professionalId = parseInt(urlParams.get('id')) || 1;

    // Carrega dados do profissional
    currentProfessional = professionalsDatabase[professionalId];

    if (!currentProfessional) {
        // Se não encontrar, redireciona para 404
        window.location.href = '404.html';
        return;
    }

    renderProfessionalData();
}

function renderProfessionalData() {
    const prof = currentProfessional;

    // Breadcrumb
    document.getElementById('breadcrumbName').textContent = prof.name;

    // Avatar - Exibir foto do profissional
    const profileAvatarEl = document.getElementById('profileAvatar');
    if (prof.avatar) {
        // Criar elemento de imagem
        profileAvatarEl.innerHTML = `<img src="../assets/static/images/profissionais/${prof.avatar}/${prof.avatar}.png" alt="${prof.name}" style="width: 100%; height: 100%; object-fit: cover; border-radius: 50%;" onerror="this.onerror=null; this.parentElement.textContent='${prof.name.split(' ').map(n => n[0]).join('').substring(0, 2)}'">`;
    } else {
        // Fallback para iniciais
        const initials = prof.name.split(' ').map(n => n[0]).join('').substring(0, 2);
        profileAvatarEl.textContent = initials;
    }

    // Informações básicas
    document.getElementById('profileName').textContent = prof.name;
    document.getElementById('profileCategory').textContent = prof.category;
    document.getElementById('profileLocation').textContent = prof.location;
    document.getElementById('profileExperience').textContent = getExperienceText(prof.experience);

    // Rating
    document.getElementById('profileRating').textContent = prof.rating.toFixed(1);
    document.getElementById('profileReviews').textContent = `(${prof.reviewsCount} avaliações)`;
    document.getElementById('profileStars').innerHTML = generateStars(prof.rating);

    // Tab Sobre
    document.getElementById('profileDescription').textContent = prof.description;
    document.getElementById('profileAvailability').textContent = prof.availability;
    document.getElementById('profileMemberSince').textContent = prof.memberSince;

    // Tags
    const tagsContainer = document.getElementById('profileTags');
    tagsContainer.innerHTML = prof.tags.map(tag => `<span class="tag">${tag}</span>`).join('');

    // Serviços
    const servicesContainer = document.getElementById('profileServices');
    servicesContainer.innerHTML = prof.services.map(service => `<li>${service}</li>`).join('');

    // Certificações
    const certificationsContainer = document.getElementById('profileCertifications');
    certificationsContainer.innerHTML = prof.certifications.map(cert => `
        <div class="certification-item">
            <i class="fas fa-certificate"></i>
            <span>${cert}</span>
        </div>
    `).join('');

    // Portfólio
    renderPortfolio();

    // Avaliações
    renderReviews();

    // Formulário de contato
    populateContactForm();
}

// ========================================
// TABS
// ========================================
function setupTabs() {
    const tabButtons = document.querySelectorAll('.tab-btn');
    
    tabButtons.forEach(button => {
        button.addEventListener('click', function() {
            const tabName = this.dataset.tab;
            switchTab(tabName);
        });
    });
}

function switchTab(tabName) {
    // Remove active de todos os botões e conteúdos
    document.querySelectorAll('.tab-btn').forEach(btn => btn.classList.remove('active'));
    document.querySelectorAll('.tab-content').forEach(content => content.classList.remove('active'));

    // Adiciona active no botão e conteúdo clicado
    document.querySelector(`[data-tab="${tabName}"]`).classList.add('active');
    document.getElementById(`tab-${tabName}`).classList.add('active');

    currentTab = tabName;
}

// ========================================
// PORTFÓLIO
// ========================================
function renderPortfolio() {
    const portfolioGrid = document.getElementById('portfolioGrid');
    const prof = currentProfessional;

    if (!prof.portfolio || prof.portfolio.length === 0) {
        portfolioGrid.innerHTML = '<p style="text-align: center; color: var(--neutral-color);">Nenhum trabalho no portfólio ainda.</p>';
        return;
    }

    portfolioGrid.innerHTML = prof.portfolio.map((item, index) => `
        <div class="portfolio-item" onclick="openPortfolioModal(${index})">
            <img src="${item.image}" alt="${item.caption}">
            <div class="portfolio-overlay">
                <p>${item.caption}</p>
            </div>
        </div>
    `).join('');
}

function openPortfolioModal(index) {
    const item = currentProfessional.portfolio[index];
    const modal = document.getElementById('portfolioModal');
    const modalImage = document.getElementById('modalImage');
    const modalCaption = document.getElementById('modalCaption');

    modalImage.src = item.image;
    modalCaption.textContent = item.caption;
    modal.classList.add('active');
    document.body.style.overflow = 'hidden';
}

function closePortfolioModal() {
    const modal = document.getElementById('portfolioModal');
    modal.classList.remove('active');
    document.body.style.overflow = '';
}

// ========================================
// AVALIAÇÕES
// ========================================
function renderReviews() {
    const reviewsList = document.getElementById('reviewsList');
    const prof = currentProfessional;

    // Summary
    document.getElementById('summaryRating').textContent = prof.rating.toFixed(1);
    document.getElementById('summaryStars').innerHTML = generateStars(prof.rating);
    document.getElementById('summaryCount').textContent = `${prof.reviewsCount} avaliações`;

    // Lista de avaliações
    if (!prof.reviews || prof.reviews.length === 0) {
        reviewsList.innerHTML = '<p style="text-align: center; color: var(--neutral-color);">Nenhuma avaliação ainda.</p>';
        return;
    }

    reviewsList.innerHTML = prof.reviews.map(review => {
        const authorInitials = review.author.split(' ').map(n => n[0]).join('').substring(0, 2);
        return `
            <div class="review-item">
                <div class="review-header">
                    <div class="review-author">
                        <div class="review-avatar">${authorInitials}</div>
                        <div class="review-author-info">
                            <h4>${review.author}</h4>
                            <span class="review-date">${review.date}</span>
                        </div>
                    </div>
                    <div class="review-rating">${generateStars(review.rating)}</div>
                </div>
                <p class="review-text">${review.text}</p>
            </div>
        `;
    }).join('');
}

// ========================================
// FORMULÁRIO DE CONTATO
// ========================================
function populateContactForm() {
    const contactService = document.getElementById('contactService');
    const prof = currentProfessional;

    contactService.innerHTML = '<option value="">Selecione o serviço</option>' +
        prof.services.map(service => `<option value="${service}">${service}</option>`).join('');
}

function setupContactForm() {
    const contactForm = document.getElementById('contactForm');
    const contactPhone = document.getElementById('contactPhone');

    // Máscara de telefone
    contactPhone.addEventListener('input', function(e) {
        let value = e.target.value.replace(/\D/g, '');
        
        if (value.length <= 11) {
            value = value.replace(/^(\d{2})(\d)/g, '($1) $2');
            value = value.replace(/(\d)(\d{4})$/, '$1-$2');
        }
        
        e.target.value = value;
    });

    // Submissão do formulário
    contactForm.addEventListener('submit', function(e) {
        e.preventDefault();
        processContactForm();
    });
}

/**
 * Processa o formulário de contato
 * 
 * ⚠️ IMPORTANTE - CONEXÃO COM BANCO DE DADOS:
 * 
 * Esta função atualmente simula o envio da solicitação.
 * Para conectar ao backend, você precisará:
 * 
 * 1. Criar endpoint de contato (ex: POST /api/contact/request)
 * 2. Enviar dados do formulário via AJAX/Fetch
 * 3. Backend envia email para o profissional
 * 4. Backend salva a solicitação no banco de dados
 * 5. Retornar confirmação para o cliente
 */
function processContactForm() {
    const formData = {
        professionalId: currentProfessional.id,
        professionalName: currentProfessional.name,
        name: document.getElementById('contactName').value,
        email: document.getElementById('contactEmail').value,
        phone: document.getElementById('contactPhone').value,
        service: document.getElementById('contactService').value,
        message: document.getElementById('contactMessage').value
    };

    const btnSubmit = document.querySelector('.btn-submit-contact');
    const btnText = btnSubmit.querySelector('span') || btnSubmit;
    const btnIcon = btnSubmit.querySelector('i');

    btnText.textContent = 'Enviando...';
    if (btnIcon) btnIcon.className = 'fas fa-spinner fa-spin';
    btnSubmit.disabled = true;

    // SIMULAÇÃO
    setTimeout(() => {
        console.log('Dados da solicitação:', formData);
        
        alert(`Solicitação enviada com sucesso!\n\n${currentProfessional.name} receberá sua mensagem e entrará em contato em breve.`);
        
        // Limpa formulário
        document.getElementById('contactForm').reset();
        
        // Restaura botão
        btnText.textContent = 'Enviar Solicitação';
        if (btnIcon) btnIcon.className = 'fas fa-paper-plane';
        btnSubmit.disabled = false;
    }, 1500);
}

// ========================================
// FUNÇÕES AUXILIARES
// ========================================
function generateStars(rating) {
    const fullStars = Math.floor(rating);
    const hasHalfStar = rating % 1 !== 0;
    let starsHTML = '';

    for (let i = 0; i < fullStars; i++) {
        starsHTML += '<i class="fas fa-star"></i>';
    }
    if (hasHalfStar) {
        starsHTML += '<i class="fas fa-star-half-alt"></i>';
    }
    const emptyStars = 5 - Math.ceil(rating);
    for (let i = 0; i < emptyStars; i++) {
        starsHTML += '<i class="far fa-star"></i>';
    }

    return starsHTML;
}

function getExperienceText(experience) {
    const experienceMap = {
        '0-1': 'Menos de 1 ano',
        '1-3': '1 a 3 anos',
        '3-5': '3 a 5 anos',
        '5-10': '5 a 10 anos',
        '10+': 'Mais de 10 anos'
    };
    return experienceMap[experience] || experience;
}

// ========================================
// AÇÕES GLOBAIS
// ========================================
function scrollToContact() {
    switchTab('contato');
    setTimeout(() => {
        document.getElementById('tab-contato').scrollIntoView({ behavior: 'smooth' });
    }, 100);
}

function shareProfile() {
    const url = window.location.href;
    const text = `Confira o perfil de ${currentProfessional.name} no Talentoo!`;

    if (navigator.share) {
        navigator.share({
            title: currentProfessional.name,
            text: text,
            url: url
        }).catch(err => console.log('Erro ao compartilhar:', err));
    } else {
        // Fallback: copia URL
        navigator.clipboard.writeText(url).then(() => {
            alert('Link copiado para a área de transferência!');
        });
    }
}

