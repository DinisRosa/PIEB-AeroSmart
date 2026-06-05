# AeroSmart App

> Aplicação web progressiva (PWA) de monitorização de saúde respiratória — Projeto Integrado (PI)

---

## Autores

Este projeto foi desenvolvido por:

| Nome | Número de Aluno |
|---|---|
| Lara Rodrigues | A107282 |
| Maria Carneiro | A107242 |
| Sofia Saraiva | A107249 |
| Dinis Rosa | A107159 |

No âmbito da unidade curricular de **Projeto Integrador em Engenharia Biomédica**, 3º ano da Licenciatura em Engenharia Biomédica da **Universidade do Minho** — 2º Semestre 2025/2026.

---

## Sobre o Projeto

O **AeroSmart** é uma app móvel-first que ajuda pacientes com asma e outras condições respiratórias a gerir o tratamento com inaladores. Permite registar inalações, consultar histórico, visualizar dados de técnica, gerir lembretes e manter um perfil de saúde completo.

- **Idioma da UI:** Português (PT)
- **Estado:** Protótipo funcional com dados mock (sem backend real)
- **Plataforma:** Web (PWA — instalável em Android/iOS como app nativa)

---

## Pré-requisitos

Antes de começar, garante que tens instalado:

| Ferramenta | Versão mínima | Download |
|---|---|---|
| **Node.js** | v18+ | [nodejs.org](https://nodejs.org) |
| **npm** | v9+ (incluído com Node.js) | — |

> **Alternativa:** podes usar **Bun** em vez de npm (é o que o Vercel usa em produção). Instala em [bun.sh](https://bun.sh).

---

## Instalação e Arranque

### 1. Clonar o repositório

```bash
git clone https://github.com/<teu-utilizador>/App-PI.git
cd App-PI
```

### 2. Instalar dependências

```bash
npm install
```

> Com Bun: `bun install`

### 3. Correr em desenvolvimento

```bash
npm run dev
```

> Com Bun: `bun run dev`

A app fica disponível em **http://localhost:5173**

### 4. Abrir no browser

Acede a `http://localhost:5173` — a página de login aparece automaticamente.  
**Para entrar na app:** clica em "Entrar" (qualquer credencial funciona — não há autenticação real).

---

## Outros Comandos

```bash
# Build de produção (gera a pasta dist/)
npm run build

# Prévia do build de produção localmente
npm run preview

# Linting do código
npm run lint
```

---

## Estrutura do Projeto

```
App-PI/
├── index.html               # Entry point HTML
├── vite.config.js           # Vite + TailwindCSS + PWA
├── vercel.json              # Configuração de deploy (Vercel + Bun)
├── package.json
├── .gitignore
├── public/
│   ├── logo.png             # Logótipo AeroSmart
│   └── passo1-5.png         # Imagens do tutorial (5 passos)
├── documentos/
│   ├── melhorias.md         # Plano de melhorias UI/UX
│   └── project_summary.md  # Resumo completo do projeto ← ler isto primeiro
└── src/
    ├── App.jsx              # Router principal + layouts desktop/mobile
    ├── index.css            # Design system (tokens, classes utilitárias)
    ├── main.jsx             # Ponto de entrada React
    ├── context/
    │   └── AppContext.jsx   # Estado global partilhado entre páginas
    ├── data/
    │   └── mockData.js      # Dados mock (gráficos de histórico, tutorial)
    ├── theme/
    │   └── theme.js         # Tokens de tipografia e espaçamento
    ├── components/layout/
    │   ├── Header.jsx       # Cabeçalho reutilizável (com back button opcional)
    │   └── Menu.jsx         # Navegação (sidebar desktop / bottom bar mobile)
    └── pages/               # Uma página por rota (ver tabela abaixo)
```

---

## Páginas da App

| Rota | Página | Descrição |
|---|---|---|
| `/login` | Login | Ecrã de entrada (sem validação real) |
| `/dashboard` | Início | Visão geral: aderência, medicação, qualidade do ar |
| `/historico` | Histórico | Gráfico de utilizações por dia / semana / mês |
| `/dados` | Dados | Análise de técnica de inalação e métricas do sensor |
| `/lembretes` | Lembretes | Alertas de dosagem e horários de medicação |
| `/rotina` | Rotina | Plano de medicação diário detalhado |
| `/registry` | Registar | Formulário para registar uma inalação manualmente |
| `/perfil` | Perfil | Dados do paciente, equipa de saúde, contacto de emergência |
| `/editar-perfil` | Editar Perfil | Edição do perfil (campos ligados ao estado global) |
| `/definicoes` | Definições | Gestão do dispositivo Bluetooth e preferências |
| `/tutorial` | Tutorial | Guia instrucional de 5 passos de uso do inalador |

---

## Deploy (Vercel)

O projeto está configurado para deploy automático no **Vercel**. Basta ligar o repositório ao Vercel — o `vercel.json` trata do resto (usa Bun para instalar e fazer build).

Para deploy manual via CLI:

```bash
npm install -g vercel
vercel
```

---

## Stack Técnica

| Camada | Tecnologia |
|---|---|
| Framework | React 19 (Vite 6) |
| Routing | React Router DOM v7 |
| Estilos | TailwindCSS v4 + CSS customizado |
| Ícones | Lucide React |
| Fonte | DM Sans + DM Mono (Google Fonts) |
| PWA | vite-plugin-pwa (manifest, auto-update) |
| Deploy | Vercel (Bun) |

---

## Documentação Completa

Para uma descrição exaustiva de todas as páginas, componentes, estado global, design system e fluxo de navegação:

📄 [`documentos/project_summary.md`](./documentos/project_summary.md)

---

## Notas Importantes

- **Sem backend** — todos os dados são mock. Nada é persistido ao recarregar a página.
- **Login decorativo** — qualquer email/password permite entrar.
- A pasta `dist/` (build) e `node_modules/` estão no `.gitignore` e **não devem ser commitadas**.

---

© 2025 AeroSmart · v1.0 · Projeto Integrado (PI)
