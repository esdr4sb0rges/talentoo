# 📋 DOCUMENTAÇÃO COMPLETA DO BANCO DE DADOS TALENTOO

## 🎯 Visão Geral

O banco de dados do Talentoo foi projetado especificamente para suportar uma **plataforma de intermediação tecnológica** que conecta **profissionais autônomos independentes** com clientes, seguindo rigorosamente o modelo legal estabelecido pelo **Art. 442-B da CLT** e **Lei 13.467/2017**.

### 📊 Estatísticas do Banco
- **15 Tabelas Principais** - Cobertura completa de todas as funcionalidades
- **2 Views Personalizadas** - Consultas otimizadas frequentes
- **3 Triggers Automáticos** - Manutenção de dados em tempo real
- **35+ Índices** - Performance otimizada para consultas
- **Conformidade LGPD** - Logs de auditoria e controle de dados

---

## 🗂️ ESTRUTURA DAS TABELAS

### 1. 👥 **TABELA: usuarios**
**Propósito**: Tabela central que armazena informações básicas de todos os usuários da plataforma.

**Por que existe**: Serve como base para autenticação e dados compartilhados entre clientes e profissionais. Implementa o sistema de tipos flexível onde um usuário pode ser cliente, profissional ou ambos.

**Campos importantes**:
- `tipo_usuario`: ENUM('cliente', 'profissional', 'ambos') - Flexibilidade total
- `status_conta`: Controle de contas ativas/suspensas
- `aceite_termos/aceite_privacidade`: **Conformidade LGPD**
- `ip_cadastro/user_agent_cadastro`: **Auditoria e segurança**

**Relações**: É referenciada por praticamente todas as outras tabelas.

---

### 2. 🔧 **TABELA: profissionais**
**Propósito**: Extensão da tabela usuarios para dados específicos de profissionais autônomos.

**Por que existe**: Armazena informações que caracterizam a **autonomia profissional** conforme legislação trabalhista brasileira. Dados sobre MEI, qualificações e independência operacional.

**Campos importantes**:
- `mei_cnpj`: Registro MEI (recomendado para formalização)
- `preco_minimo/preco_maximo`: **Autonomia de precificação**
- `raio_atendimento`: Flexibilidade geográfica
- `horario_inicio/fim`: **Controle próprio de horários**
- `ferramentas_equipamentos`: **Recursos próprios** (não fornecidos pela plataforma)
- `status_profissional`: Controle de atividade independente da conta geral

**Conformidade Legal**: Todos os campos reforçam a **natureza autônoma** do profissional.

---

### 3. 📋 **TABELA: categorias_servicos**
**Propósito**: Organização hierárquica dos tipos de serviços oferecidos.

**Por que existe**: Facilita a busca e categorização de serviços. Estrutura hierárquica permite categorias principais e subcategorias detalhadas.

**Estrutura**:
- **Categorias Pai**: Construção, Tecnologia, Beleza, etc.
- **Subcategorias**: Pedreiro, Eletricista, Desenvolvedor Web, etc.

**Benefícios**:
- Busca organizada e intuitiva
- SEO otimizado com slugs únicos
- Interface visual com ícones e cores

---

### 4. 🔗 **TABELA: profissional_categorias**
**Propósito**: Relacionamento N:N entre profissionais e categorias de serviços.

**Por que existe**: Um profissional pode atuar em múltiplas áreas, e uma categoria pode ter vários profissionais. Permite especialização gradual e diversificação de serviços.

**Recursos**:
- `principal`: Marca a categoria principal do profissional
- `experiencia_categoria`: Experiência específica por categoria
- `preco_base_categoria`: Preços diferenciados por especialização

---

### 5. 📝 **TABELA: solicitacoes_servico**
**Propósito**: Registra pedidos de serviços feitos pelos clientes.

**Por que existe**: Ponto de entrada do processo de contratação. Centraliza todas as informações necessárias para que profissionais possam avaliar e responder às demandas.

**Fluxo**:
1. Cliente cria solicitação
2. Profissionais visualizam
3. Sistema conta propostas recebidas
4. Cliente escolhe proposta (se houver)

**Campos especiais**:
- `orcamento_estimado`: Referência de preço
- `urgente`: Priorização na exibição
- `fotos_referencia`: Visual do que é desejado
- `data_limite_propostas`: Controle temporal

---

### 6. 💰 **TABELA: propostas**
**Propósito**: Armazena ofertas de profissionais para solicitações específicas.

**Por que existe**: Implementa o **livre mercado** onde profissionais autônomos definem seus próprios preços e condições, sem interferência da plataforma.

**Autonomia Reforçada**:
- `preco_proposto`: **Definido livremente pelo profissional**
- `prazo_execucao`: **Profissional controla próprio tempo**
- `materiais_inclusos`: **Decisão operacional própria**
- `forma_pagamento`: **Negociação direta**

**Restrições**: Um profissional = uma proposta por solicitação (evita spam).

---

### 7. 📋 **TABELA: contratos_servicos**
**Propósito**: Formaliza acordos entre clientes e profissionais.

**Por que existe**: Quando uma proposta é aceita, vira contrato. Documenta todos os termos acordados e serve como base legal para a relação **comercial** (não trabalhista).

**Características Legais**:
- `numero_contrato`: Identificação única legal
- `termos_contratuais`: Condições específicas do acordo
- `data_inicio_prevista/real`: **Flexibilidade de execução**
- Status completo do ciclo de vida

**Status Possíveis**: aguardando_inicio → em_andamento → finalizado
**Cancelamentos**: Podem ser feitos por qualquer parte (autonomia)

---

### 8. ⭐ **TABELA: avaliacoes**
**Propósito**: Sistema de reputação mútua entre clientes e profissionais.

**Por que existe**: Constrói confiança na plataforma e permite que profissionais autônomos construam sua **reputação profissional independente**.

**Sistema de Notas**:
- Nota geral (1-5)
- Qualidade, pontualidade, comunicação, preço, limpeza
- Comentários detalhados
- Possibilidade de resposta

**Transparência**: Avaliações são públicas (quando aprovadas) e ajudam na escolha.

---

### 9. 💬 **TABELA: mensagens**
**Propósito**: Sistema de comunicação interno seguro.

**Por que existe**: Mantém toda comunicação dentro da plataforma para **segurança LGPD** e histórico de interações. Evita exposição de contatos pessoais prematuramente.

**Recursos**:
- Mensagens de texto, imagem e arquivo
- Controle de leitura
- Histórico completo por conversa
- Ligação com contratos e solicitações

---

### 10. 🔔 **TABELA: notificacoes**
**Propósito**: Sistema de alertas para manter usuários informados.

**Por que existe**: Engajamento da plataforma. Usuários precisam saber sobre novas propostas, mensagens, avaliacoes, etc.

**Tipos de Notificação**:
- Nova solicitação (para profissionais da categoria)
- Nova proposta (para clientes)
- Contratos iniciados/finalizados
- Novas mensagens
- Sistema/promocional

**Canais**: Email, SMS, Push (configurável por usuário)

---

### 11. ❤️ **TABELA: favoritos**
**Propósito**: Permite marcar profissionais favoritos.

**Por que existe**: Facilita recontratação de profissionais que já prestaram bons serviços. Melhora a experiência do usuário e fideliza relacionamentos.

**Uso**: Lista de profissionais favoritados com notas pessoais.

---

### 12. 📊 **TABELA: logs_sistema**
**Propósito**: Auditoria completa de ações na plataforma.

**Por que existe**: **Conformidade LGPD** e segurança. Todo acesso e modificação de dados é registrado para auditoria e investigação de problemas.

**Conformidade**:
- Registro de acessos
- Modificações de dados (antes/depois)
- IPs e user agents
- Resultados de operações

**Retenção**: Seguindo políticas de retenção LGPD.

---

### 13. ⚙️ **TABELA: configuracoes_sistema**
**Propósito**: Configurações globais administráveis.

**Por que existe**: Permite ajustar comportamentos do sistema sem mudanças de código. Flexibilidade operacional.

**Configurações Importantes**:
- Taxa da plataforma
- Limites de propostas
- Informações de contato
- Modo manutenção
- Notas mínimas para profissionais

---

### 14. 🚫 **TABELA: moderacao_usuarios**
**Propósito**: Sistema disciplinar para violações dos termos.

**Por que existe**: Manter qualidade da plataforma através de ações disciplinares justas e documentadas.

**Tipos de Ação**:
- Advertência
- Suspensão temporária
- Banimento permanente

**Recurso**: Sistema de apelação completo para garantir direitos dos usuários.

---

### 15. 🚨 **TABELA: denuncias**
**Propósito**: Sistema de reporte de problemas e violações.

**Por que existe**: Permite que a comunidade autorregule-se reportando comportamentos inadequados, serviços mal executados, fraudes, etc.

**Fluxo**: Denúncia → Análise → Resolução
**Evidências**: Suporte a arquivos e imagens como prova.

---

## 🔄 TRIGGERS AUTOMÁTICOS

### 1. **atualizar_estatisticas_profissional_avaliacao**
- **Quando**: Nova avaliação inserida
- **Ação**: Recalcula nota média e total de avaliações do profissional
- **Por que**: Mantém estatísticas sempre atualizadas

### 2. **atualizar_contador_propostas**
- **Quando**: Nova proposta inserida
- **Ação**: Incrementa contador na solicitação
- **Por que**: Mostra quantas propostas uma solicitação recebeu

### 3. **atualizar_servicos_realizados**
- **Quando**: Contrato marcado como finalizado
- **Ação**: Incrementa contador de serviços do profissional
- **Por que**: Estatística de experiência

---

## 📈 VIEWS OTIMIZADAS

### 1. **vw_profissionais_completo**
- **Propósito**: Dados completos de profissionais para busca
- **Uso**: Listagem pública de profissionais com todas as informações relevantes
- **Performance**: Evita múltiplos JOINs nas consultas frequentes

### 2. **vw_estatisticas_plataforma**
- **Propósito**: Métricas gerais da plataforma
- **Uso**: Dashboard administrativo e relatórios
- **Dados**: Totais de usuários, contratos, avaliações, médias, etc.

---

## 🔍 VERIFICAÇÃO FINAL - CHECKLIST COMPLETO

### ✅ **Funcionalidades Obrigatórias**
- [x] **Cadastro de usuários** (clientes e profissionais)
- [x] **Sistema de autenticação** e verificação
- [x] **Perfis detalhados** de profissionais autônomos
- [x] **Categorização hierárquica** de serviços
- [x] **Solicitações de serviço** pelos clientes
- [x] **Sistema de propostas** dos profissionais
- [x] **Contratos formalizados** entre partes
- [x] **Sistema de mensagens** interno
- [x] **Avaliações mútuas** e sistema de reputação
- [x] **Notificações** personalizadas
- [x] **Sistema de favoritos** para clientes
- [x] **Administração e moderação** de usuários

### ✅ **Conformidade Legal**
- [x] **Campos MEI/CNPJ** para formalização autônoma
- [x] **Controle de preços** pelo profissional
- [x] **Flexibilidade de horários** e condições
- [x] **Ausência de subordinação** (sem controle pela plataforma)
- [x] **Registros de auditoria** completos
- [x] **Aceite de termos** e política de privacidade
- [x] **Logs LGPD** para conformidade

### ✅ **Segurança e Performance**
- [x] **Índices otimizados** para consultas frequentes
- [x] **Chaves estrangeiras** para integridade
- [x] **Constraints únicos** onde necessário
- [x] **Triggers automáticos** para manutenção
- [x] **Sistema de logs** completo
- [x] **Views otimizadas** para consultas complexas

### ✅ **Escalabilidade**
- [x] **Estrutura modular** e extensível
- [x] **Configurações dinâmicas** do sistema
- [x] **Sistema de categorias** flexível
- [x] **Múltiplas categorias** por profissional
- [x] **Histórico completo** de interações
- [x] **Sistema de backup** de dados (estrutura preparada)

### ✅ **User Experience**
- [x] **Busca otimizada** com filtros
- [x] **Sistema de favoritos** para recontratação
- [x] **Comunicação interna** segura
- [x] **Notificações** em múltiplos canais
- [x] **Avaliações detalhadas** com múltiplos critérios
- [x] **Status transparente** de solicitações e contratos

---

## 🚀 **PRÓXIMOS PASSOS APÓS EXECUÇÃO**

### 1. **Segurança**
```sql
-- Criar usuário específico para a aplicação
CREATE USER 'talentoo_app'@'localhost' IDENTIFIED BY 'senha_forte_aqui';
GRANT SELECT, INSERT, UPDATE, DELETE ON talentoo_db.* TO 'talentoo_app'@'localhost';
FLUSH PRIVILEGES;
```

### 2. **Usuário Administrador Inicial**
```sql
-- Inserir primeiro administrador
INSERT INTO usuarios (nome_completo, email, senha_hash, tipo_usuario, status_conta, email_verificado) 
VALUES ('Administrador Sistema', 'admin@talentoo.com', '$hash_senha', 'ambos', 'ativa', TRUE);
```

### 3. **Configurações SSL**
- Configurar conexões criptografadas
- Certificado SSL para banco de dados
- Conexões seguras obrigatórias

### 4. **Backup Automático**
```bash
# Script de backup diário
mysqldump --single-transaction --routines --triggers talentoo_db > backup_$(date +%Y%m%d).sql
```

### 5. **Limpeza Automática LGPD**
```sql
-- Script para executar mensalmente
DELETE FROM logs_sistema WHERE data_acao < DATE_SUB(NOW(), INTERVAL 12 MONTH);
```

---

## ⚠️ **OBSERVAÇÕES IMPORTANTES**

### **Conformidade Trabalhista**
Este banco foi projetado especificamente para **reforçar a natureza autônoma** dos profissionais:
- **Sem controle de jornada** (horários são preferências, não obrigações)
- **Preços definidos pelo profissional** (sem imposição da plataforma)
- **Ferramentas próprias** (não fornecidas pela empresa)
- **MEI recomendado** (formalização como pessoa jurídica)
- **Múltiplos clientes** (sem exclusividade)

### **LGPD e Privacidade**
- **Logs completos** de acesso e modificação
- **Aceite documentado** de termos e privacidade
- **Retenção controlada** de dados
- **Direito ao esquecimento** implementável
- **Auditoria completa** de tratamento de dados

### **Performance**
- **Índices otimizados** para consultas frequentes
- **Views pré-calculadas** para relatórios
- **Triggers eficientes** para manutenção automática
- **Estrutura escalável** para crescimento

---

## 📋 **RESUMO FINAL**

O banco de dados está **100% completo** e inclui:

- ✅ **15 tabelas principais** cobrindo todos os aspectos do negócio
- ✅ **Sistema completo de usuários** (clientes e profissionais autônomos)  
- ✅ **Fluxo completo de serviços** (solicitação → proposta → contrato → avaliação)
- ✅ **Comunicação interna** segura e auditável
- ✅ **Sistema de reputação** e qualidade
- ✅ **Administração e moderação** completas
- ✅ **Conformidade legal** (CLT Art. 442-B, LGPD)
- ✅ **Segurança e auditoria** implementadas
- ✅ **Performance otimizada** com índices e views
- ✅ **Dados iniciais** para funcionamento imediato

**O script está pronto para ser executado e criar uma plataforma completa e juridicamente conforme para intermediação de serviços autônomos.**