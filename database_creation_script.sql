-- =====================================
-- TALENTOO - SCRIPT COMPLETO DE CRIAÇÃO DO BANCO DE DADOS
-- Versão: 1.0
-- Data: Janeiro 2025
-- Plataforma: MySQL/MariaDB
-- 
-- DESCRIÇÃO: Este script cria a estrutura completa do banco de dados
-- para a plataforma Talentoo, incluindo todas as tabelas necessárias
-- para suportar o modelo de prestação de serviços autônomos.
-- =====================================

-- Criar o banco de dados
CREATE DATABASE IF NOT EXISTS talentoo_db 
CHARACTER SET utf8mb4 
COLLATE utf8mb4_unicode_ci;

-- Usar o banco de dados criado
USE talentoo_db;

-- =====================================
-- 1. TABELA DE USUÁRIOS
-- =====================================
-- Esta é a tabela principal que armazena informações básicas de todos os usuários
-- (tanto clientes quanto profissionais). Serve como base para autenticação e
-- informações gerais compartilhadas.
-- =====================================

CREATE TABLE usuarios (
    id INT AUTO_INCREMENT PRIMARY KEY,
    nome_completo VARCHAR(255) NOT NULL,
    email VARCHAR(255) UNIQUE NOT NULL,
    senha_hash VARCHAR(255) NOT NULL,
    telefone VARCHAR(20),
    data_nascimento DATE,
    cpf VARCHAR(14) UNIQUE,
    foto_perfil VARCHAR(500),
    endereco_completo TEXT,
    cep VARCHAR(10),
    cidade VARCHAR(100) DEFAULT 'Parauapebas',
    estado VARCHAR(2) DEFAULT 'PA',
    tipo_usuario ENUM('cliente', 'profissional', 'ambos') NOT NULL,
    status_conta ENUM('ativa', 'inativa', 'suspensa', 'banida') DEFAULT 'ativa',
    email_verificado BOOLEAN DEFAULT FALSE,
    telefone_verificado BOOLEAN DEFAULT FALSE,
    data_cadastro TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    data_ultimo_acesso TIMESTAMP NULL,
    data_atualizacao TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
    aceite_termos BOOLEAN DEFAULT FALSE,
    aceite_privacidade BOOLEAN DEFAULT FALSE,
    data_aceite_termos TIMESTAMP NULL,
    ip_cadastro VARCHAR(45),
    user_agent_cadastro TEXT,
    
    -- Índices para melhor performance
    INDEX idx_email (email),
    INDEX idx_cpf (cpf),
    INDEX idx_tipo_usuario (tipo_usuario),
    INDEX idx_status_conta (status_conta),
    INDEX idx_cidade (cidade)
);

-- =====================================
-- 2. TABELA DE PROFISSIONAIS
-- =====================================
-- Extensão da tabela usuários para armazenar informações específicas
-- de profissionais autônomos. Aqui ficam dados sobre qualificações,
-- MEI, experiência e informações profissionais.
-- =====================================

CREATE TABLE profissionais (
    id INT AUTO_INCREMENT PRIMARY KEY,
    usuario_id INT NOT NULL,
    mei_cnpj VARCHAR(18) UNIQUE,
    razao_social VARCHAR(255),
    inscricao_municipal VARCHAR(50),
    profissao_principal VARCHAR(100) NOT NULL,
    descricao_servicos TEXT NOT NULL,
    experiencia_anos INT DEFAULT 0,
    preco_minimo DECIMAL(10,2),
    preco_maximo DECIMAL(10,2),
    disponibilidade TEXT,
    raio_atendimento INT DEFAULT 10, -- em quilômetros
    trabalha_finais_semana BOOLEAN DEFAULT FALSE,
    trabalha_feriados BOOLEAN DEFAULT FALSE,
    horario_inicio TIME DEFAULT '08:00:00',
    horario_fim TIME DEFAULT '18:00:00',
    portfolio TEXT, -- JSON com URLs de imagens
    certificacoes TEXT, -- JSON com certificações
    ferramentas_equipamentos TEXT,
    status_profissional ENUM('ativo', 'inativo', 'pausado') DEFAULT 'ativo',
    data_aprovacao TIMESTAMP NULL,
    aprovado_por INT NULL,
    nota_media DECIMAL(3,2) DEFAULT 0.00,
    total_avaliacoes INT DEFAULT 0,
    total_servicos_realizados INT DEFAULT 0,
    taxa_resposta DECIMAL(5,2) DEFAULT 0.00,
    tempo_resposta_medio INT DEFAULT 0, -- em minutos
    data_criacao TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    data_atualizacao TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
    
    FOREIGN KEY (usuario_id) REFERENCES usuarios(id) ON DELETE CASCADE,
    FOREIGN KEY (aprovado_por) REFERENCES usuarios(id),
    
    -- Índices para busca e performance
    INDEX idx_usuario_id (usuario_id),
    INDEX idx_mei_cnpj (mei_cnpj),
    INDEX idx_profissao (profissao_principal),
    INDEX idx_status (status_profissional),
    INDEX idx_nota_media (nota_media),
    INDEX idx_raio_atendimento (raio_atendimento)
);

-- =====================================
-- 3. TABELA DE CATEGORIAS DE SERVIÇOS
-- =====================================
-- Define as principais categorias de serviços oferecidos na plataforma.
-- Permite organização hierárquica com categorias pai e subcategorias.
-- =====================================

CREATE TABLE categorias_servicos (
    id INT AUTO_INCREMENT PRIMARY KEY,
    nome VARCHAR(100) NOT NULL,
    descricao TEXT,
    categoria_pai_id INT NULL, -- Para subcategorias
    icone VARCHAR(100), -- Classe do ícone Font Awesome
    cor_hexadecimal VARCHAR(7) DEFAULT '#2563eb',
    slug VARCHAR(100) UNIQUE NOT NULL,
    ordem_exibicao INT DEFAULT 0,
    ativa BOOLEAN DEFAULT TRUE,
    meta_keywords TEXT,
    meta_description TEXT,
    data_criacao TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    
    FOREIGN KEY (categoria_pai_id) REFERENCES categorias_servicos(id),
    
    INDEX idx_categoria_pai (categoria_pai_id),
    INDEX idx_slug (slug),
    INDEX idx_ativa (ativa),
    INDEX idx_ordem (ordem_exibicao)
);

-- =====================================
-- 4. TABELA DE RELACIONAMENTO: PROFISSIONAIS x CATEGORIAS
-- =====================================
-- Tabela de ligação que permite que um profissional atue em múltiplas
-- categorias de serviços. Relacionamento N:N.
-- =====================================

CREATE TABLE profissional_categorias (
    id INT AUTO_INCREMENT PRIMARY KEY,
    profissional_id INT NOT NULL,
    categoria_id INT NOT NULL,
    experiencia_categoria INT DEFAULT 0, -- anos de experiência nesta categoria
    preco_base_categoria DECIMAL(10,2),
    principal BOOLEAN DEFAULT FALSE, -- se é a categoria principal do profissional
    data_associacao TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    
    FOREIGN KEY (profissional_id) REFERENCES profissionais(id) ON DELETE CASCADE,
    FOREIGN KEY (categoria_id) REFERENCES categorias_servicos(id),
    
    -- Garantir que não haja duplicatas
    UNIQUE KEY unique_prof_categoria (profissional_id, categoria_id),
    
    INDEX idx_profissional (profissional_id),
    INDEX idx_categoria (categoria_id),
    INDEX idx_principal (principal)
);

-- =====================================
-- 5. TABELA DE SOLICITAÇÕES DE SERVIÇO
-- =====================================
-- Registra todas as solicitações feitas pelos clientes.
-- É o ponto inicial do processo de contratação de um serviço.
-- =====================================

CREATE TABLE solicitacoes_servico (
    id INT AUTO_INCREMENT PRIMARY KEY,
    cliente_id INT NOT NULL,
    categoria_id INT NOT NULL,
    titulo VARCHAR(255) NOT NULL,
    descricao TEXT NOT NULL,
    endereco_servico TEXT NOT NULL,
    cep_servico VARCHAR(10),
    data_desejada DATE,
    horario_preferido TIME,
    flexivel_horario BOOLEAN DEFAULT TRUE,
    orcamento_estimado DECIMAL(10,2),
    urgente BOOLEAN DEFAULT FALSE,
    fotos_referencia TEXT, -- JSON com URLs das fotos
    requisitos_especiais TEXT,
    status_solicitacao ENUM('aberta', 'em_analise', 'cancelada', 'finalizada') DEFAULT 'aberta',
    data_limite_propostas TIMESTAMP NULL,
    visualizacoes INT DEFAULT 0,
    total_propostas INT DEFAULT 0,
    proposta_aceita_id INT NULL,
    data_criacao TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    data_atualizacao TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
    
    FOREIGN KEY (cliente_id) REFERENCES usuarios(id) ON DELETE CASCADE,
    FOREIGN KEY (categoria_id) REFERENCES categorias_servicos(id),
    
    INDEX idx_cliente (cliente_id),
    INDEX idx_categoria (categoria_id),
    INDEX idx_status (status_solicitacao),
    INDEX idx_data_desejada (data_desejada),
    INDEX idx_urgente (urgente),
    INDEX idx_cep_servico (cep_servico)
);

-- =====================================
-- 6. TABELA DE PROPOSTAS
-- =====================================
-- Armazena as propostas enviadas pelos profissionais em resposta
-- às solicitações dos clientes. Inclui preços, prazos e detalhes.
-- =====================================

CREATE TABLE propostas (
    id INT AUTO_INCREMENT PRIMARY KEY,
    solicitacao_id INT NOT NULL,
    profissional_id INT NOT NULL,
    preco_proposto DECIMAL(10,2) NOT NULL,
    prazo_execucao INT NOT NULL, -- em dias
    descricao_proposta TEXT NOT NULL,
    materiais_inclusos BOOLEAN DEFAULT FALSE,
    detalhes_materiais TEXT,
    forma_pagamento TEXT,
    observacoes TEXT,
    anexos TEXT, -- JSON com arquivos anexos
    status_proposta ENUM('enviada', 'visualizada', 'aceita', 'rejeitada', 'cancelada') DEFAULT 'enviada',
    data_validade TIMESTAMP NULL,
    data_envio TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    data_visualizacao TIMESTAMP NULL,
    data_resposta TIMESTAMP NULL,
    
    FOREIGN KEY (solicitacao_id) REFERENCES solicitacoes_servico(id) ON DELETE CASCADE,
    FOREIGN KEY (profissional_id) REFERENCES profissionais(id) ON DELETE CASCADE,
    
    -- Evitar propostas duplicadas
    UNIQUE KEY unique_solicitacao_profissional (solicitacao_id, profissional_id),
    
    INDEX idx_solicitacao (solicitacao_id),
    INDEX idx_profissional (profissional_id),
    INDEX idx_status (status_proposta),
    INDEX idx_data_envio (data_envio)
);

-- =====================================
-- 7. TABELA DE CONTRATOS/SERVIÇOS
-- =====================================
-- Registra os contratos firmados entre clientes e profissionais.
-- É criado quando uma proposta é aceita e contém todos os detalhes
-- acordados para execução do serviço.
-- =====================================

CREATE TABLE contratos_servicos (
    id INT AUTO_INCREMENT PRIMARY KEY,
    solicitacao_id INT NOT NULL,
    proposta_id INT NOT NULL,
    cliente_id INT NOT NULL,
    profissional_id INT NOT NULL,
    numero_contrato VARCHAR(50) UNIQUE NOT NULL,
    valor_acordado DECIMAL(10,2) NOT NULL,
    prazo_execucao INT NOT NULL, -- em dias
    data_inicio_prevista DATE NOT NULL,
    data_fim_prevista DATE NOT NULL,
    data_inicio_real DATE NULL,
    data_fim_real DATE NULL,
    descricao_servico TEXT NOT NULL,
    endereco_execucao TEXT NOT NULL,
    termos_contratuais TEXT,
    status_contrato ENUM(
        'aguardando_inicio',
        'em_andamento',
        'pausado',
        'finalizado',
        'cancelado',
        'disputado'
    ) DEFAULT 'aguardando_inicio',
    motivo_cancelamento TEXT NULL,
    cancelado_por ENUM('cliente', 'profissional', 'plataforma') NULL,
    data_cancelamento TIMESTAMP NULL,
    valor_multa DECIMAL(10,2) DEFAULT 0.00,
    observacoes TEXT,
    data_criacao TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    data_atualizacao TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
    
    FOREIGN KEY (solicitacao_id) REFERENCES solicitacoes_servico(id),
    FOREIGN KEY (proposta_id) REFERENCES propostas(id),
    FOREIGN KEY (cliente_id) REFERENCES usuarios(id),
    FOREIGN KEY (profissional_id) REFERENCES profissionais(id),
    
    INDEX idx_numero_contrato (numero_contrato),
    INDEX idx_cliente (cliente_id),
    INDEX idx_profissional (profissional_id),
    INDEX idx_status (status_contrato),
    INDEX idx_data_inicio (data_inicio_prevista),
    INDEX idx_data_fim (data_fim_prevista)
);

-- =====================================
-- 8. TABELA DE AVALIAÇÕES
-- =====================================
-- Sistema de avaliações mútuas entre clientes e profissionais.
-- Permite avaliar qualidade, pontualidade, comunicação e preço.
-- =====================================

CREATE TABLE avaliacoes (
    id INT AUTO_INCREMENT PRIMARY KEY,
    contrato_id INT NOT NULL,
    avaliador_id INT NOT NULL, -- quem está avaliando
    avaliado_id INT NOT NULL, -- quem está sendo avaliado
    tipo_avaliador ENUM('cliente', 'profissional') NOT NULL,
    
    -- Notas de 1 a 5
    nota_geral DECIMAL(2,1) NOT NULL,
    nota_qualidade DECIMAL(2,1) NULL,
    nota_pontualidade DECIMAL(2,1) NULL,
    nota_comunicacao DECIMAL(2,1) NULL,
    nota_preco DECIMAL(2,1) NULL,
    nota_limpeza DECIMAL(2,1) NULL,
    
    comentario TEXT,
    pontos_positivos TEXT,
    pontos_negativos TEXT,
    recomendaria BOOLEAN DEFAULT TRUE,
    fotos_resultado TEXT, -- JSON com URLs das fotos
    
    resposta_avaliacao TEXT NULL, -- resposta do avaliado
    data_resposta TIMESTAMP NULL,
    
    publica BOOLEAN DEFAULT TRUE,
    aprovada BOOLEAN DEFAULT TRUE,
    motivo_reprovacao TEXT NULL,
    
    data_criacao TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    data_atualizacao TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
    
    FOREIGN KEY (contrato_id) REFERENCES contratos_servicos(id) ON DELETE CASCADE,
    FOREIGN KEY (avaliador_id) REFERENCES usuarios(id),
    FOREIGN KEY (avaliado_id) REFERENCES usuarios(id),
    
    -- Garantir uma avaliação por pessoa por contrato
    UNIQUE KEY unique_avaliacao_contrato (contrato_id, avaliador_id),
    
    INDEX idx_contrato (contrato_id),
    INDEX idx_avaliador (avaliador_id),
    INDEX idx_avaliado (avaliado_id),
    INDEX idx_nota_geral (nota_geral),
    INDEX idx_publica (publica),
    INDEX idx_aprovada (aprovada)
);

-- =====================================
-- 9. TABELA DE MENSAGENS/CHAT
-- =====================================
-- Sistema de mensagens interno da plataforma para comunicação
-- segura entre clientes e profissionais.
-- =====================================

CREATE TABLE mensagens (
    id INT AUTO_INCREMENT PRIMARY KEY,
    conversa_id VARCHAR(100) NOT NULL, -- ID único da conversa
    remetente_id INT NOT NULL,
    destinatario_id INT NOT NULL,
    contrato_id INT NULL, -- se relacionado a um contrato específico
    solicitacao_id INT NULL, -- se relacionado a uma solicitação
    
    conteudo TEXT NOT NULL,
    tipo_mensagem ENUM('texto', 'imagem', 'arquivo', 'sistema') DEFAULT 'texto',
    arquivo_url VARCHAR(500) NULL,
    arquivo_nome VARCHAR(255) NULL,
    arquivo_tamanho INT NULL, -- em bytes
    
    lida BOOLEAN DEFAULT FALSE,
    data_leitura TIMESTAMP NULL,
    
    editada BOOLEAN DEFAULT FALSE,
    data_edicao TIMESTAMP NULL,
    
    excluida BOOLEAN DEFAULT FALSE,
    data_exclusao TIMESTAMP NULL,
    
    data_envio TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    
    FOREIGN KEY (remetente_id) REFERENCES usuarios(id) ON DELETE CASCADE,
    FOREIGN KEY (destinatario_id) REFERENCES usuarios(id) ON DELETE CASCADE,
    FOREIGN KEY (contrato_id) REFERENCES contratos_servicos(id),
    FOREIGN KEY (solicitacao_id) REFERENCES solicitacoes_servico(id),
    
    INDEX idx_conversa (conversa_id),
    INDEX idx_remetente (remetente_id),
    INDEX idx_destinatario (destinatario_id),
    INDEX idx_contrato (contrato_id),
    INDEX idx_lida (lida),
    INDEX idx_data_envio (data_envio)
);

-- =====================================
-- 10. TABELA DE NOTIFICAÇÕES
-- =====================================
-- Sistema de notificações para manter os usuários informados
-- sobre atividades relevantes na plataforma.
-- =====================================

CREATE TABLE notificacoes (
    id INT AUTO_INCREMENT PRIMARY KEY,
    usuario_id INT NOT NULL,
    tipo_notificacao ENUM(
        'nova_solicitacao',
        'nova_proposta',
        'proposta_aceita',
        'proposta_rejeitada',
        'contrato_iniciado',
        'contrato_finalizado',
        'nova_avaliacao',
        'nova_mensagem',
        'pagamento_realizado',
        'sistema',
        'promocional'
    ) NOT NULL,
    
    titulo VARCHAR(255) NOT NULL,
    conteudo TEXT NOT NULL,
    
    -- IDs relacionados para contexto
    solicitacao_id INT NULL,
    proposta_id INT NULL,
    contrato_id INT NULL,
    usuario_relacionado_id INT NULL,
    
    lida BOOLEAN DEFAULT FALSE,
    data_leitura TIMESTAMP NULL,
    
    enviada_email BOOLEAN DEFAULT FALSE,
    enviada_sms BOOLEAN DEFAULT FALSE,
    enviada_push BOOLEAN DEFAULT FALSE,
    
    data_criacao TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    data_expiracao TIMESTAMP NULL,
    
    FOREIGN KEY (usuario_id) REFERENCES usuarios(id) ON DELETE CASCADE,
    FOREIGN KEY (solicitacao_id) REFERENCES solicitacoes_servico(id),
    FOREIGN KEY (proposta_id) REFERENCES propostas(id),
    FOREIGN KEY (contrato_id) REFERENCES contratos_servicos(id),
    FOREIGN KEY (usuario_relacionado_id) REFERENCES usuarios(id),
    
    INDEX idx_usuario (usuario_id),
    INDEX idx_tipo (tipo_notificacao),
    INDEX idx_lida (lida),
    INDEX idx_data_criacao (data_criacao)
);

-- =====================================
-- 11. TABELA DE FAVORITOS
-- =====================================
-- Permite que clientes marquem profissionais como favoritos
-- para facilitar contatos futuros.
-- =====================================

CREATE TABLE favoritos (
    id INT AUTO_INCREMENT PRIMARY KEY,
    cliente_id INT NOT NULL,
    profissional_id INT NOT NULL,
    observacoes TEXT NULL,
    data_adicionado TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    
    FOREIGN KEY (cliente_id) REFERENCES usuarios(id) ON DELETE CASCADE,
    FOREIGN KEY (profissional_id) REFERENCES profissionais(id) ON DELETE CASCADE,
    
    -- Evitar favoritos duplicados
    UNIQUE KEY unique_cliente_profissional (cliente_id, profissional_id),
    
    INDEX idx_cliente (cliente_id),
    INDEX idx_profissional (profissional_id)
);

-- =====================================
-- 12. TABELA DE LOGS DO SISTEMA
-- =====================================
-- Registra ações importantes para auditoria, segurança e
-- conformidade com LGPD.
-- =====================================

CREATE TABLE logs_sistema (
    id INT AUTO_INCREMENT PRIMARY KEY,
    usuario_id INT NULL,
    ip_address VARCHAR(45) NOT NULL,
    user_agent TEXT,
    acao VARCHAR(100) NOT NULL,
    detalhes TEXT,
    tabela_afetada VARCHAR(100) NULL,
    registro_afetado_id INT NULL,
    dados_anteriores JSON NULL,
    dados_novos JSON NULL,
    resultado ENUM('sucesso', 'erro', 'bloqueado') DEFAULT 'sucesso',
    codigo_erro VARCHAR(50) NULL,
    mensagem_erro TEXT NULL,
    data_acao TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    
    FOREIGN KEY (usuario_id) REFERENCES usuarios(id) ON DELETE SET NULL,
    
    INDEX idx_usuario (usuario_id),
    INDEX idx_acao (acao),
    INDEX idx_data_acao (data_acao),
    INDEX idx_ip_address (ip_address),
    INDEX idx_resultado (resultado)
);

-- =====================================
-- 13. TABELA DE CONFIGURAÇÕES DO SISTEMA
-- =====================================
-- Armazena configurações globais da plataforma que podem
-- ser alteradas pelos administradores.
-- =====================================

CREATE TABLE configuracoes_sistema (
    id INT AUTO_INCREMENT PRIMARY KEY,
    chave VARCHAR(100) UNIQUE NOT NULL,
    valor TEXT NOT NULL,
    descricao TEXT,
    tipo_valor ENUM('string', 'integer', 'boolean', 'json', 'decimal') DEFAULT 'string',
    categoria VARCHAR(50) DEFAULT 'geral',
    publica BOOLEAN DEFAULT FALSE, -- se pode ser acessada publicamente
    editavel BOOLEAN DEFAULT TRUE,
    data_criacao TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    data_atualizacao TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
    
    INDEX idx_chave (chave),
    INDEX idx_categoria (categoria),
    INDEX idx_publica (publica)
);

-- =====================================
-- 14. TABELA DE BANIMENTOS E SUSPENSÕES
-- =====================================
-- Registra ações disciplinares tomadas contra usuários
-- que violam os termos de uso.
-- =====================================

CREATE TABLE moderacao_usuarios (
    id INT AUTO_INCREMENT PRIMARY KEY,
    usuario_id INT NOT NULL,
    moderador_id INT NOT NULL,
    tipo_acao ENUM('advertencia', 'suspensao_temporaria', 'banimento_permanente') NOT NULL,
    motivo TEXT NOT NULL,
    detalhes_violacao TEXT,
    duracao_dias INT NULL, -- para suspensões temporárias
    data_inicio TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    data_fim TIMESTAMP NULL,
    ativa BOOLEAN DEFAULT TRUE,
    
    -- Dados do recurso/apelação
    recurso_solicitado BOOLEAN DEFAULT FALSE,
    data_recurso TIMESTAMP NULL,
    motivo_recurso TEXT NULL,
    recurso_analisado_por INT NULL,
    recurso_aprovado BOOLEAN NULL,
    data_analise_recurso TIMESTAMP NULL,
    observacoes_recurso TEXT NULL,
    
    FOREIGN KEY (usuario_id) REFERENCES usuarios(id) ON DELETE CASCADE,
    FOREIGN KEY (moderador_id) REFERENCES usuarios(id),
    FOREIGN KEY (recurso_analisado_por) REFERENCES usuarios(id),
    
    INDEX idx_usuario (usuario_id),
    INDEX idx_moderador (moderador_id),
    INDEX idx_tipo_acao (tipo_acao),
    INDEX idx_ativa (ativa),
    INDEX idx_data_inicio (data_inicio),
    INDEX idx_data_fim (data_fim)
);

-- =====================================
-- 15. TABELA DE DENÚNCIAS
-- =====================================
-- Sistema de denúncias para reportar comportamentos
-- inadequados ou violações dos termos de uso.
-- =====================================

CREATE TABLE denuncias (
    id INT AUTO_INCREMENT PRIMARY KEY,
    denunciante_id INT NOT NULL,
    denunciado_id INT NOT NULL,
    tipo_denuncia ENUM(
        'comportamento_inadequado',
        'servico_mal_executado',
        'nao_pagamento',
        'abandono_servico',
        'conteudo_inapropriado',
        'spam',
        'fraude',
        'outros'
    ) NOT NULL,
    
    descricao TEXT NOT NULL,
    evidencias TEXT, -- JSON com URLs de arquivos/imagens
    contrato_relacionado_id INT NULL,
    
    status_denuncia ENUM('pendente', 'em_analise', 'resolvida', 'arquivada') DEFAULT 'pendente',
    analisada_por INT NULL,
    data_analise TIMESTAMP NULL,
    resolucao TEXT NULL,
    
    data_criacao TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    data_atualizacao TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
    
    FOREIGN KEY (denunciante_id) REFERENCES usuarios(id) ON DELETE CASCADE,
    FOREIGN KEY (denunciado_id) REFERENCES usuarios(id) ON DELETE CASCADE,
    FOREIGN KEY (contrato_relacionado_id) REFERENCES contratos_servicos(id),
    FOREIGN KEY (analisada_por) REFERENCES usuarios(id),
    
    INDEX idx_denunciante (denunciante_id),
    INDEX idx_denunciado (denunciado_id),
    INDEX idx_tipo (tipo_denuncia),
    INDEX idx_status (status_denuncia),
    INDEX idx_data_criacao (data_criacao)
);

-- =====================================
-- INSERÇÃO DE DADOS INICIAIS
-- =====================================

-- Inserir configurações básicas do sistema
INSERT INTO configuracoes_sistema (chave, valor, descricao, categoria, publica) VALUES
('nome_plataforma', 'Talentoo', 'Nome da plataforma', 'geral', TRUE),
('versao_sistema', '1.0.0', 'Versão atual do sistema', 'sistema', FALSE),
('cidade_principal', 'Parauapebas', 'Cidade principal de operação', 'localizacao', TRUE),
('estado_principal', 'PA', 'Estado principal de operação', 'localizacao', TRUE),
('email_contato', 'contato@talentoo.com', 'E-mail de contato principal', 'contato', TRUE),
('email_juridico', 'juridico@talentoo.com', 'E-mail do departamento jurídico', 'contato', TRUE),
('email_privacidade', 'privacidade@talentoo.com', 'E-mail para questões de privacidade', 'contato', TRUE),
('telefone_contato', '(94) 99999-9999', 'Telefone de contato', 'contato', TRUE),
('manutencao_ativa', 'false', 'Sistema em manutenção', 'sistema', TRUE),
('registros_abertos', 'true', 'Permitir novos cadastros', 'sistema', TRUE),
('taxa_plataforma_percentual', '5.00', 'Taxa da plataforma em percentual', 'financeiro', FALSE),
('limite_propostas_por_solicitacao', '10', 'Limite de propostas por solicitação', 'sistema', FALSE),
('tempo_expiracao_proposta_dias', '7', 'Tempo para expiração de propostas em dias', 'sistema', FALSE),
('nota_minima_profissional', '3.0', 'Nota mínima para manter perfil ativo', 'qualidade', FALSE);

-- Inserir categorias principais de serviços
INSERT INTO categorias_servicos (nome, descricao, icone, cor_hexadecimal, slug, ordem_exibicao) VALUES
('Construção e Reformas', 'Serviços de construção civil, reformas, reparos e manutenção predial', 'fas fa-hard-hat', '#e97533', 'construcao-reformas', 1),
('Tecnologia', 'Serviços de informática, desenvolvimento, design e assistência técnica', 'fas fa-laptop-code', '#3b82f6', 'tecnologia', 2),
('Beleza e Estética', 'Serviços de beleza, cabeleireiros, manicures, esteticistas', 'fas fa-cut', '#ec4899', 'beleza-estetica', 3),
('Educação', 'Aulas particulares, tutoria, cursos e consultoria educacional', 'fas fa-graduation-cap', '#10b981', 'educacao', 4),
('Saúde e Bem-estar', 'Serviços de saúde, fisioterapia, massagem e bem-estar', 'fas fa-heartbeat', '#ef4444', 'saude-bem-estar', 5),
('Limpeza', 'Serviços de limpeza residencial, comercial e organizacional', 'fas fa-broom', '#06b6d4', 'limpeza', 6),
('Transporte e Mudanças', 'Serviços de transporte, mudanças e logística', 'fas fa-truck', '#f59e0b', 'transporte-mudancas', 7),
('Alimentação', 'Serviços de gastronomia, buffet, confeitaria e delivery', 'fas fa-utensils', '#84cc16', 'alimentacao', 8),
('Eventos', 'Organização de eventos, decoração, fotografia e entretenimento', 'fas fa-calendar-star', '#8b5cf6', 'eventos', 9),
('Consultoria', 'Serviços de consultoria empresarial, jurídica, contábil', 'fas fa-chart-line', '#6366f1', 'consultoria', 10);

-- Inserir subcategorias para Construção e Reformas
INSERT INTO categorias_servicos (nome, descricao, categoria_pai_id, slug, ordem_exibicao) VALUES
('Pedreiro', 'Serviços de alvenaria, assentamento de pisos e azulejos', 1, 'pedreiro', 1),
('Eletricista', 'Instalações elétricas, reparos e manutenção elétrica', 1, 'eletricista', 2),
('Encanador', 'Instalações hidráulicas, reparos em tubulações e torneiras', 1, 'encanador', 3),
('Pintor', 'Pintura residencial, comercial e decorativa', 1, 'pintor', 4),
('Marceneiro', 'Móveis sob medida, reparos em madeira', 1, 'marceneiro', 5),
('Jardineiro', 'Manutenção de jardins, paisagismo e poda', 1, 'jardineiro', 6);

-- Inserir subcategorias para Tecnologia
INSERT INTO categorias_servicos (nome, descricao, categoria_pai_id, slug, ordem_exibicao) VALUES
('Desenvolvimento Web', 'Criação de sites, sistemas web e e-commerce', 2, 'desenvolvimento-web', 1),
('Design Gráfico', 'Criação de logotipos, materiais gráficos e identidade visual', 2, 'design-grafico', 2),
('Assistência Técnica', 'Manutenção de computadores, smartphones e equipamentos', 2, 'assistencia-tecnica', 3),
('Marketing Digital', 'Gestão de redes sociais, campanhas online e SEO', 2, 'marketing-digital', 4);

-- Inserir subcategorias para Beleza e Estética
INSERT INTO categorias_servicos (nome, descricao, categoria_pai_id, slug, ordem_exibicao) VALUES
('Cabeleireiro', 'Cortes, coloração, tratamentos capilares', 3, 'cabeleireiro', 1),
('Manicure/Pedicure', 'Cuidados com unhas das mãos e pés', 3, 'manicure-pedicure', 2),
('Maquiagem', 'Maquiagem social, artística e para eventos', 3, 'maquiagem', 3),
('Estética Corporal', 'Massagens, drenagem linfática, tratamentos corporais', 3, 'estetica-corporal', 4);

-- =====================================
-- TRIGGERS PARA MANUTENÇÃO AUTOMÁTICA
-- =====================================

-- Trigger para atualizar estatísticas do profissional quando uma avaliação é inserida
DELIMITER //
CREATE TRIGGER atualizar_estatisticas_profissional_avaliacao
AFTER INSERT ON avaliacoes
FOR EACH ROW
BEGIN
    DECLARE profissional_user_id INT;
    
    -- Buscar o ID do usuário profissional
    SELECT usuario_id INTO profissional_user_id
    FROM profissionais 
    WHERE id = (
        SELECT profissional_id 
        FROM contratos_servicos 
        WHERE id = NEW.contrato_id
    );
    
    -- Atualizar estatísticas apenas se o avaliado for o profissional
    IF NEW.avaliado_id = profissional_user_id THEN
        UPDATE profissionais 
        SET 
            nota_media = (
                SELECT AVG(nota_geral) 
                FROM avaliacoes a
                JOIN contratos_servicos c ON a.contrato_id = c.id
                WHERE c.profissional_id = profissionais.id
                AND a.avaliado_id = profissional_user_id
                AND a.aprovada = TRUE
            ),
            total_avaliacoes = (
                SELECT COUNT(*) 
                FROM avaliacoes a
                JOIN contratos_servicos c ON a.contrato_id = c.id
                WHERE c.profissional_id = profissionais.id
                AND a.avaliado_id = profissional_user_id
                AND a.aprovada = TRUE
            )
        WHERE usuario_id = profissional_user_id;
    END IF;
END//
DELIMITER ;

-- Trigger para atualizar contador de propostas na solicitação
DELIMITER //
CREATE TRIGGER atualizar_contador_propostas
AFTER INSERT ON propostas
FOR EACH ROW
BEGIN
    UPDATE solicitacoes_servico 
    SET total_propostas = (
        SELECT COUNT(*) 
        FROM propostas 
        WHERE solicitacao_id = NEW.solicitacao_id
    )
    WHERE id = NEW.solicitacao_id;
END//
DELIMITER ;

-- Trigger para atualizar total de serviços realizados
DELIMITER //
CREATE TRIGGER atualizar_servicos_realizados
AFTER UPDATE ON contratos_servicos
FOR EACH ROW
BEGIN
    IF NEW.status_contrato = 'finalizado' AND OLD.status_contrato != 'finalizado' THEN
        UPDATE profissionais 
        SET total_servicos_realizados = total_servicos_realizados + 1
        WHERE id = NEW.profissional_id;
    END IF;
END//
DELIMITER ;

-- =====================================
-- VIEWS ÚTEIS PARA CONSULTAS FREQUENTES
-- =====================================

-- View para listar profissionais com suas informações completas
CREATE VIEW vw_profissionais_completo AS
SELECT 
    p.id as profissional_id,
    u.id as usuario_id,
    u.nome_completo,
    u.email,
    u.telefone,
    u.cidade,
    u.foto_perfil,
    p.mei_cnpj,
    p.profissao_principal,
    p.descricao_servicos,
    p.experiencia_anos,
    p.preco_minimo,
    p.preco_maximo,
    p.raio_atendimento,
    p.nota_media,
    p.total_avaliacoes,
    p.total_servicos_realizados,
    p.status_profissional,
    GROUP_CONCAT(cs.nome SEPARATOR ', ') as categorias
FROM profissionais p
JOIN usuarios u ON p.usuario_id = u.id
LEFT JOIN profissional_categorias pc ON p.id = pc.profissional_id
LEFT JOIN categorias_servicos cs ON pc.categoria_id = cs.id
WHERE u.status_conta = 'ativa' AND p.status_profissional = 'ativo'
GROUP BY p.id;

-- View para estatísticas gerais da plataforma
CREATE VIEW vw_estatisticas_plataforma AS
SELECT 
    (SELECT COUNT(*) FROM usuarios WHERE tipo_usuario IN ('cliente', 'ambos')) as total_clientes,
    (SELECT COUNT(*) FROM usuarios WHERE tipo_usuario IN ('profissional', 'ambos')) as total_profissionais,
    (SELECT COUNT(*) FROM solicitacoes_servico WHERE status_solicitacao = 'aberta') as solicitacoes_abertas,
    (SELECT COUNT(*) FROM contratos_servicos WHERE status_contrato = 'em_andamento') as contratos_andamento,
    (SELECT COUNT(*) FROM contratos_servicos WHERE status_contrato = 'finalizado') as contratos_finalizados,
    (SELECT AVG(nota_geral) FROM avaliacoes WHERE aprovada = TRUE) as nota_media_geral,
    (SELECT COUNT(*) FROM avaliacoes WHERE aprovada = TRUE) as total_avaliacoes;

-- =====================================
-- ÍNDICES ADICIONAIS PARA PERFORMANCE
-- =====================================

-- Índices compostos para consultas frequentes
CREATE INDEX idx_usuario_tipo_status ON usuarios(tipo_usuario, status_conta);
CREATE INDEX idx_profissional_status_nota ON profissionais(status_profissional, nota_media DESC);
CREATE INDEX idx_solicitacao_status_data ON solicitacoes_servico(status_solicitacao, data_criacao DESC);
CREATE INDEX idx_contrato_status_profissional ON contratos_servicos(status_contrato, profissional_id);
CREATE INDEX idx_avaliacao_aprovada_nota ON avaliacoes(aprovada, nota_geral DESC);
CREATE INDEX idx_mensagem_conversa_data ON mensagens(conversa_id, data_envio DESC);
CREATE INDEX idx_notificacao_usuario_lida ON notificacoes(usuario_id, lida, data_criacao DESC);

-- =====================================
-- COMENTÁRIOS FINAIS E VERIFICAÇÃO
-- =====================================

-- Este script cria um banco de dados completo para a plataforma Talentoo
-- com as seguintes funcionalidades:

-- ✅ GESTÃO DE USUÁRIOS
-- - Cadastro de clientes e profissionais
-- - Autenticação e verificação
-- - Perfis detalhados

-- ✅ SISTEMA DE SERVIÇOS
-- - Categorias hierárquicas
-- - Solicitações de serviço
-- - Propostas e negociação
-- - Contratos formalizados

-- ✅ COMUNICAÇÃO
-- - Sistema de mensagens interno
-- - Notificações personalizadas

-- ✅ AVALIAÇÕES E QUALIDADE
-- - Avaliações mútuas detalhadas
-- - Sistema de reputação
-- - Estatísticas automáticas

-- ✅ SEGURANÇA E COMPLIANCE
-- - Logs de auditoria
-- - Sistema de denúncias
-- - Moderação de usuários
-- - Conformidade com LGPD

-- ✅ ADMINISTRAÇÃO
-- - Configurações do sistema
-- - Views para relatórios
-- - Triggers para manutenção automática

-- IMPORTANTE: Após executar este script, lembre-se de:
-- 1. Criar um usuário administrador inicial
-- 2. Configurar backups automáticos
-- 3. Implementar rotinas de limpeza de logs antigos
-- 4. Configurar SSL para conexões seguras
-- 5. Estabelecer política de retenção de dados conforme LGPD

-- Total de tabelas criadas: 15
-- Total de views criadas: 2  
-- Total de triggers criados: 3
-- Total de índices adicionais: 7

SELECT 'Script de criação do banco de dados Talentoo executado com sucesso!' as status;