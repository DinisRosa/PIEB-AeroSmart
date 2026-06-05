# AeroSmart App — Project Summary

> **Última atualização:** Junho 2025  
> **Repositório:** `DinisRosa/PIEB-AeroSmart` (antigo `DinisRosa/App-PI`)  
> **Projeto académico:** Projeto Integrador em Engenharia Biomédica · 3.º ano · Universidade do Minho · 2.º semestre 2025/2026  
> **Equipa:** Lara Rodrigues, Maria Carneiro, Sofia Saraiva, Dinis Rosa

---

## 1. Visão Geral

O **AeroSmart** é uma aplicação web mobile-first concebida para pacientes asmáticos que utilizam inaladores. O objetivo é fornecer uma plataforma de monitorização do tratamento respiratório, integrando:

- Registo manual de inalações (dose, medicamento, hora, localização);
- Histórico de utilização com gráficos de barras;
- Análise dos dados do sensor (técnica de inalação, força de pico, duração);
- Lembretes e planos de medicação;
- Tutorial passo-a-passo de utilização do inalador;
- Perfil médico completo (contacto de emergência, equipa de saúde);
- Definições do dispositivo Bluetooth.

A app está concebida como uma **Progressive Web App (PWA)** instalável em Android/iOS e também tem um layout responsivo para desktop.

---

## 2. Stack Tecnológica

| Camada | Tecnologia |
|---|---|
| Framework | **React 19** com JSX |
| Router | **React Router DOM v7** |
| Build tool | **Vite 8** |
| Estilização | **Tailwind CSS v4** (via `@tailwindcss/vite`) + CSS custom vanilla em `index.css` |
| Ícones | **Lucide React v1.16** |
| PWA | **vite-plugin-pwa v1.3** |
| Runtime de produção | **Bun** (instalação e build via `vercel.json`) |
| Deploy | **Vercel** |
| Fontes | Google Fonts — **DM Sans** (UI) + **DM Mono** (campos de hora/data) |

---

## 3. Estrutura de Ficheiros

```
App-PI/
├── index.html                  # Entry point HTML, lang="pt", tema #2563eb
├── vite.config.js              # Vite + React + Tailwind + PWA plugin
├── vercel.json                 # Deploy: instala Bun, corre bun run build
├── package.json                # Dependências e scripts
├── bun.lock                    # Lockfile Bun
├── public/
│   ├── logo.jpg / logo.png     # Logo AeroSmart (usado como ícone PWA e favicon)
│   ├── icons.svg               # Sprite SVG de ícones
│   └── passo1-5.png            # Imagens para o tutorial de 5 passos
├── src/
│   ├── main.jsx                # Ponto de entrada React (StrictMode)
│   ├── index.css               # Estilos globais + design tokens CSS + Tailwind
│   ├── App.jsx                 # Router, layouts mobile/desktop, GlobalToast
│   ├── context/
│   │   └── AppContext.jsx      # Estado global (perfil, registo, toast, timeframe)
│   ├── data/
│   │   └── mockData.js         # Dados mock: chartData, summaryData, tutorialSteps
│   ├── theme/
│   │   └── theme.js            # Tokens JS: typography, spacing, touchTarget, layout
│   ├── assets/
│   │   ├── hero.png            # Asset interno (não utilizado em produção)
│   │   ├── react.svg
│   │   └── vite.svg
│   ├── components/
│   │   └── layout/
│   │       ├── Header.jsx      # Header reutilizável (logo/título + botão back + slot direita)
│   │       └── Menu.jsx        # Navegação: bottom-bar móvel e sidebar desktop
│   └── pages/
│       ├── Login.jsx           # Ecrã de login (email + password + Google OAuth stub)
│       ├── Dashboard.jsx       # Homepage: registar, última utilização, aderência, sensor, qualidade do ar
│       ├── Historico.jsx       # Histórico: gráfico barras + lista de atividades recentes
│       ├── Dados.jsx           # Análise: pontuação técnica, força de pico, duração, tabela sessões
│       ├── Lembretes.jsx       # Lembretes: alertas, horários, modo foco, link tutorial
│       ├── Rotina.jsx          # Plano de medicação diário (3 inalações: manhã + noite)
│       ├── Registry.jsx        # Formulário registo de inalação (data, hora, med, tipo, notas, local)
│       ├── Perfil.jsx          # Perfil do paciente (dados biométricos, equipa de saúde, contacto emergência)
│       ├── EditarPerfil.jsx    # Formulário edição de perfil (todos os campos do contexto)
│       ├── Definicoes.jsx      # Definições: dispositivo Bluetooth, som, círculo de cuidados, privacidade
│       └── Tutorial.jsx        # Guia interativo 5 passos com imagens e barra de progresso
└── documentos/
    └── project_summary.md      # Este ficheiro
```

---

## 4. Arquitetura da Aplicação

### 4.1 Ponto de entrada (`main.jsx` → `App.jsx`)

```
main.jsx
  └── <StrictMode>
        └── <App>
              └── <AppProvider>       # Context global
                    └── <Router>
                          └── <AppLayout>
                                ├── DESKTOP (lg+): sidebar + <Menu desktop> + main content
                                ├── MOBILE (<lg): phone-frame card + <Menu> bottom-bar
                                └── NO_NAV_PAGES ['/login', '/']: login card sem nav
```

**`GlobalToast`** — componente fixed-position que escuta `showToast` do contexto e exibe uma confirmação animada após registo de inalação.

### 4.2 Layouts

| Modo | Descrição |
|---|---|
| **Mobile** (`< lg`) | `div` com `max-w-md`, `h-[100dvh]`, estilo phone-frame. Bottom-bar `<Menu>` no fundo. |
| **Desktop** (`lg+`) | Sidebar de 256px com logo + `<Menu desktop>` + área de conteúdo principal `max-w-5xl`. |
| **Login/Root** | Card centrado com fundo `#0e0e14`, sem sidebar nem bottom-bar. |

### 4.3 Estado Global (`AppContext.jsx`)

Gerido via React Context. Sem biblioteca externa de state management. Todos os dados são **em memória** (sem backend nem localStorage):

| Estado | Descrição |
|---|---|
| `previousScreen` | Usado pela página Definições para saber para onde voltar |
| `regDate/Time/Med/doseType/regNotes/regLocation` | Campos do formulário de registo de inalação |
| `showToast` | Controla visibilidade do GlobalToast (auto-dismiss em 2.5s) |
| `profileName/Age/Blood/Height/Weight` | Dados biométricos do paciente |
| `emergencyContactName/Phone` | Contacto de emergência |
| `doctor1Name/Phone`, `doctor2Name/Phone` | Equipa de saúde (Médico de Família + Pneumologista) |
| `timeframe` | Filtro de tempo da página Histórico (`'dia'` / `'semana'` / `'mes'`) |

---

## 5. Páginas — Descrição Detalhada

### `/login` — `Login.jsx`
- Ecrã de boas-vindas com logo `/logo.png`
- Campos de email e password com **float label** (CSS `.field-wrap`)
- Toggle de visibilidade da password
- Botão "Entrar" → navega para `/dashboard` (sem autenticação real)
- Botão de OAuth Google (stub visual)
- Links para Privacidade, Termos, Suporte (stubs)

### `/dashboard` — `Dashboard.jsx`
- Saudação fixa "Bom dia, João."
- Card primário azul → navega para `/registry`
- Card "Última Utilização": hoje às 08:42
- Card "Aderência": 66% com anel SVG animado
- Grid 2 colunas: Estado do sensor (Conectado, sinc há 2m) + Bateria (85%)
- Card "Nível de Medicação": 65% (78/120 doses), barra de progresso
- Card "Qualidade do Ar": IQA 12, teal, classificação "Ideal"
- Botão de settings (ícone) → `/definicoes`, guarda `previousScreen = '/dashboard'`

### `/historico` — `Historico.jsx`
- Filtro temporal: 3 botões (Dia / Semana / Mês) controlados por `timeframe` do contexto
- Gráfico de barras inline em SVG/divs com dados de `mockData.js`
- Totais e média dinâmicos conforme `timeframe`
- Lista de atividades recentes (Hoje, Ontem, Anteriores) com tipo de dose (manutenção/emergência), hora e local
- Botão "Exportar CSV" (stub)

### `/dados` — `Dados.jsx`
- **Pontuação de Técnica de Inalação**: score 92/100, barras de progresso (Consistência 88%, Precisão 95%)
- **Alerta laranja**: "Inalador Baixo: 12 doses restantes" com recomendação
- **Força de Pico**: 42.5 L/min, gráfico de barras das últimas 7 sessões (verde)
- **Duração Média**: 5.2s com nota de melhoria
- **Tabela de sessões**: Sessão, Pressão (Pa), Velocidade Angular (º/s) — dados mock das últimas sessões

### `/lembretes` — `Lembretes.jsx`
- Alerta amarelo: "Aumento de dosagem detectado" (3 usos em 4h)
- Dois lembretes: Inalador Matinal (07:00 AM) e Noturno (08:30 PM)
- Link "Ver Minha Rotina" → `/rotina`
- Card "Modo Foco ativo" com botão "Editar Horário" (stub)
- Card "Guia Instrucional" → `/tutorial`

### `/rotina` — `Rotina.jsx`
- Header com back button → `/lembretes`
- Badge de progresso: "3/3 inalações"
- Timeline visual com 2 entradas: Inalação Matinal (07:00 AM, 2 doses) e Inalação Noturna (08:30 PM, 1 dose)
- Secção informativa sobre inaladores de manutenção vs emergência

### `/registry` — `Registry.jsx`
- Header com back button → `/dashboard`
- Formulário com campos:
  - Data e Hora (inputs nativos `date`/`time`)
  - Medicamento (select: BiResp Spiromax, Symbicort Turbuhaler, Seretide Accuhaler, Relvar Ellipta, Bricanyl Turbohaler)
  - Tipo de dose: toggle "Manutenção" / "Emergência" (`.dose-btn`)
  - Notas (textarea, opcional)
  - Localização (text input com float label)
- Botão "Confirmar Registo" → `showToast = true` → auto-dismiss 2.5s → volta ao dashboard
- Sem persistência real; estado via AppContext

### `/perfil` — `Perfil.jsx`
- Foto de perfil com botão de edição → `/editar-perfil`
- Nome do paciente (do contexto), ID: "CS-88203-ER" (hardcoded)
- Grid 2 colunas: Idade + Condição (Asma)
- Secção "Contacto de Emergência" com nome/telefone e botão "Notificar"
- "Equipa de Saúde": 2 médicos com foto, botões Ligar (`tel:`) e Mensagem (`sms:`)
- "Perfil de Saúde": Tipo de Sangue, Altura e Peso, Medicação (Salbutamol + Cetirizina)

### `/editar-perfil` — `EditarPerfil.jsx`
- Header com back button → `/perfil`
- Foto com botão de editar (sem funcionalidade real)
- Secções editáveis via AppContext:
  - Informações Básicas: Nome, ID (readonly), Idade, Tipo de Sangue, Altura, Peso
  - Condição Respiratória: tags Asma (ativo), DPOC, Alergias + botão "+"
  - Contacto de Emergência: Nome + Telemóvel
  - Equipa de Saúde: Médico de Família + Pneumologista (nome + telefone cada)
- Botão "Guardar Alterações" → navega para `/perfil` (sem persistência real)

### `/definicoes` — `Definicoes.jsx`
- Header com back button → `previousScreen` (dinâmico)
- Card de dispositivo Bluetooth: "Inalador Inteligente Pro", status "LIGAÇÃO EM DIRETO" (pulsante), bateria 84%
- Botões "Reconectar" e "Detalhes" (stubs)
- Cards de opções: Som e Háptica, Círculo de Cuidados, Privacidade e Dados (todos stubs)

### `/tutorial` — `Tutorial.jsx`
- Header "Passo X de 5" com back button → `/lembretes`
- Barra de progresso linear (20% → 40% → 60% → 80% → 100%)
- 5 passos com imagem (`/passoN.png`) e texto descritivo (dados de `tutorialSteps` em `mockData.js`)
- Botões Anterior / Próximo; no último passo: "Concluir" → `/lembretes`
- Local state `currentTutorialStep` (não persiste)

---

## 6. Componentes de Layout

### `Header.jsx`
Componente reutilizável presente em todas as páginas exceto Login.

**Props:**
| Prop | Tipo | Descrição |
|---|---|---|
| `title` | string | Título exibido (ou "AeroSmart" por defeito) |
| `showBack` | bool | Mostra botão de back-arrow (seta esquerda) |
| `onBack` | function | Callback custom do back (default: `navigate(-1)`) |
| `rightAction` | ReactNode | Slot direita do header (ex: ícone de settings) |
| `className` | string | Classes CSS adicionais |

Aplica a classe `.compact-header` com `min-height: 52px` e `padding-top: max(8px, env(safe-area-inset-top))`.

Quando `showBack=false`: exibe logo `/logo.png` + label azul "AeroSmart".  
Quando `showBack=true`: exibe botão de seta + título.

### `Menu.jsx`
Navegação principal com 5 destinos:
| Rota | Label | Ícone |
|---|---|---|
| `/dashboard` | Início | Grid 2×2 |
| `/historico` | Histórico | Calendário |
| `/dados` | Dados | Gráfico de barras |
| `/lembretes` | Lembretes | Bell |
| `/perfil` | Perfil | Utilizador |

**Prop `desktop`:**
- `false` (default): bottom-bar fixa `position: absolute; bottom: 0` — ícones com indicador ativo (fundo azul claro)
- `true`: sidebar nav vertical com links e ponto indicador de active

---

## 7. Design System

### Paleta de cores principal

| Token (CSS/Tailwind) | Cor | Uso |
|---|---|---|
| `brand-blue` / `#2563eb` | Azul | Cor primária, botões, ativo |
| `soft-blue` / `#f0f7ff` | Azul muito claro | Fundos de cards inativos |
| `#1a9c8e` / teal | Teal | Qualidade do ar, toast, confirmações |
| `#F8FAFC` | Cinzento muito claro | Fundo das páginas internas |
| `#0e0e14` | Quase preto | Fundo do ecrã de login (desktop) |

### Tipografia
- Fonte principal: **DM Sans** (300, 400, 500, 600, 700)
- Fonte monoespaçada: **DM Mono** (400, 500) — campos de data/hora

### Tokens CSS (`:root`)
```
--font-size-xs: 11px  --font-size-sm: 13px  --font-size-md: 15px
--font-size-lg: 18px  --font-size-xl: 22px
--spacing-xs: 4px  --spacing-sm: 8px  --spacing-md: 12px
--spacing-lg: 16px  --spacing-xl: 24px  --spacing-xxl: 32px
--header-min-height: 52px
--touch-target-min: 44px
```

### Classes CSS customizadas relevantes
| Classe | Propósito |
|---|---|
| `.compact-header` | Header com altura mínima 52px e safe-area |
| `.field-wrap` | Input com float label animado |
| `.dose-btn` | Toggle de tipo de dose (Manutenção/Emergência) |
| `.time-tab` | Selector de intervalo temporal (Dia/Semana/Mês) |
| `.activity-item` | Item de lista de atividade no Histórico |
| `.chart-bar-bg/fill` | Barras do gráfico do Histórico |
| `.action-btn` | Botão de ação ergonómico (min-height 44px) |
| `.health-profile-container` | Container do perfil de saúde (contain: layout) |
| `.section-container` / `.section-container-white` | Secções de formulário |
| `.custom-input` | Input estilizado do Editar Perfil |

---

## 8. Dados Mock (`src/data/mockData.js`)

### `chartData`
Dados para o gráfico do Histórico, indexado por `timeframe`:
- **dia**: 6 pontos (8h, 12h, 16h, 20h, 22h, 24h)
- **semana**: 7 pontos (S, T, Q, Q, S, S, D)
- **mes**: 10 pontos (1 a 10)

Cada ponto: `{ label, h (% altura), type ('m'=manutenção | 'e'=emergência) }`

### `summaryData`
Resumo estatístico por timeframe:
- dia: total=3, media=3.0, trend='+2%', trendUp=true
- semana: total=24, media=3.4, trend='-5%', trendUp=false
- mes: total=98, media=3.2, trend='+1%', trendUp=true

### `tutorialSteps`
Array de 5 objetos: `{ title, text, img ('/passoN.png'), progress (20% a 100%) }`

---

## 9. PWA e Deploy

### Progressive Web App
Configurado em `vite.config.js` via `vite-plugin-pwa`:
- `registerType: 'autoUpdate'`
- `name: 'AeroSmart App'`, `short_name: 'AeroSmart'`
- `theme_color: '#2563eb'`, `background_color: '#0e0e14'`
- `display: 'standalone'`
- Ícone: `/logo.png` (192×192 e 512×512)

### Deploy (Vercel)
`vercel.json` define:
- `installCommand`: instala Bun via script oficial + `bun install --frozen-lockfile`
- `buildCommand`: `~/.bun/bin/bun run build`

O comando `vite build` gera o output na pasta `/dist`.

---

## 10. Navegação — Fluxo de Rotas

```
/  ──redirect──►  /login
                      │
                      ▼ (botão "Entrar")
               /dashboard ◄──────────────────────────────────┐
                  │  │  │                                     │
                  │  │  └─► /registry ──(confirmar)──────────┘
                  │  │
                  ▼  └─► /definicoes ◄── (settings btn, qualquer página principal)
              (nav)                └──(back: previousScreen)──►
                  │
         ┌────────┼────────┬──────────┐
         ▼        ▼        ▼          ▼
    /historico  /dados  /lembretes  /perfil
                           │            │
                           ▼            ▼
                        /rotina    /editar-perfil
                        /tutorial
```

---

## 11. Estado Atual e Limitações

### O que está implementado ✅
- UI completa para todas as 11 rotas
- Navegação funcional entre todos os ecrãs
- Formulário de registo com estado local e feedback visual (toast)
- Perfil editável via Context (persiste apenas durante a sessão)
- Tutorial interativo de 5 passos com imagens reais
- Layout responsivo (mobile phone-frame + desktop sidebar)
- PWA configurada e instalável

### O que **não** está implementado ❌
- **Backend / API real** — não há servidor; todos os dados são mock ou em memória
- **Autenticação** — o botão "Entrar" navega diretamente para o dashboard
- **Persistência** — dados não são guardados em localStorage nem base de dados
- **Leitura do sensor** — os dados de pressão, velocidade angular e qualidade do ar são mock estático
- **Bluetooth** — a ligação ao inalador físico não está implementada
- **Notificações push** — os lembretes existem visualmente mas não geram alertas reais
- **Exportar CSV** — botão existe mas sem funcionalidade
- **OAuth Google** — botão visual sem implementação

---

## 12. Como Correr Localmente

```bash
# Instalar dependências
npm install
# ou
bun install

# Servidor de desenvolvimento
npm run dev
# → http://localhost:5173

# Build de produção
npm run build
```
