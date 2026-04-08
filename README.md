# 🤝 Talentoo | Marketplace Regional de Serviços (SaaS)

O **Talentoo** é uma plataforma de intermediação projetada para conectar profissionais autônomos (eletricistas, programadores, manicures, etc.) a clientes na região de Parauapebas-PA. Nascido na FADESA, o projeto escala o conceito de classificados locais para uma arquitetura robusta e transacional, similar a *GetNinjas* e *Workana*.

## 🚧 Status do Projeto: "Building in Public"

O desenvolvimento segue uma engenharia ágil, com separação estrita de camadas. Atualmente, o ecossistema opera da seguinte forma:
* 🟢 **Módulos em Produção (PHP + MySQL):** IAM completo (Autenticação segura via `password_hash` e transações atômicas de cadastro).
* 🟡 **Módulos em Simulação (Front-end JS):** Motor de busca, perfis e fluxo de propostas operam atualmente via mocks em JavaScript para validação de UI/UX, aguardando integração com os endpoints RESTful (Fase 2).
* 🔴 **Infraestrutura Pronta (Aguardando Lógica):** Tabelas e Triggers de contratos, chat, avaliações e moderação já estão estruturados no banco de dados.

## 🗄️ Arquitetura de Banco de Dados (Database Engineering)

O coração do sistema é o esquema relacional no MySQL/MariaDB, composto por **15 tabelas, 2 views e 7 índices compostos** para otimização de consultas pesadas.

**Destaque Técnico: Triggers de Automação (Business Logic in DB)**
Para reduzir a carga no back-end (PHP), a inteligência de métricas roda direto no banco:
* `atualizar_estatisticas_profissional`: Recalcula automaticamente a `nota_media` sempre que uma nova avaliação é registrada.
* `atualizar_contador_propostas`: Mantém controle dinâmico da volumetria de propostas ativas por serviço.
* `atualizar_servicos_realizados`: Incrementa o portfólio do profissional de forma autônoma após a conclusão de um contrato.

## ⚙️ Funcionalidades e Camadas do Sistema

### 🔐 Segurança e Identidade (Módulo Ativo)
* **Rotas de Cadastro:** Controle de transação (com Rollback automático) para registro de profissionais nas tabelas `usuarios` e `profissionais` simultaneamente.
* **Autenticação:** Validação com `password_verify()` e controle seguro de sessão (`$_SESSION['id_user']`).

### 🔎 Motor de Busca e Transações (Módulos em Planejamento/Mock)
* Filtros cruzados por categoria, localidade e nota.
* Ciclo de contratação: Abertura de solicitação ➔ Envio de Proposta ➔ Aceite ➔ Geração de Contrato (com ID único).
* Sistema interno de Chat e fluxo de denúncias/moderação via Painel Admin.

## 🗺️ Roadmap de Desenvolvimento Ágil

O projeto está sendo executado através das seguintes sprints hierárquicas:

- ✅ **Fase 1 (Fundação):** Arquitetura de IAM, segurança do banco de dados e fluxos de cadastro e login. *(Concluída)*
- 🔜 **Fase 2 (Back-end da Busca):** Substituição dos Mocks em JS. Criação da API RESTful (`api/profissionais.php`) para retornar JSON e popular os filtros em tempo real. *(Próxima Sprint)*
- ⏳ **Fase 3 (Perfis Dinâmicos):** Integração dos perfis públicos com o banco (`api/perfil.php?id=X`), upload de assets de portfólio.
- ⏳ **Fase 4 (Fluxo de Negociação):** Backend para geração de contratos automáticos, painel "Meus Serviços" para propostas e aceite.
- ⏳ **Fase 5 a 9 (Escala):** Sistema de Chat assíncrono (tabela `mensagens`), sistema de reputação 5 estrelas e endurecimento de segurança (CSRF, Rate Limiting).

## 🛠️ Stack Tecnológica

* **Back-end:** PHP 8.x, PDO, arquitetura focada em endpoints (JSON).
* **Banco de Dados:** MySQL/MariaDB (Triggers, Views, Índices de Performance).
* **Front-end:** HTML5 Semântico, CSS3 (Mobile First), JavaScript Vanilla.
