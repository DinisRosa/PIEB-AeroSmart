# AeroSmart App — Resumo Completo do Projeto

> Documento de referência para qualquer pessoa ou IA que precise entender rapidamente a totalidade do projeto.

---

## 1. Visão Geral

**AeroSmart** é uma aplicação web progressiva (PWA) de monitorização de saúde respiratória. O objetivo é ajudar pacientes com asma (e outras condições respiratórias) a gerir o seu tratamento com inaladores — registar utilizações, consultar histórico, ver dados de técnica de inalação, definir lembretes e aceder ao perfil de saúde.

- **Idioma da UI:** Português (PT)
- **Utilizador de demo:** "João Silva", 29 anos, asma, Ventolin Evohaler
- **Estado:** Protótipo funcional com dados mock (sem backend real)
- **Contexto académico:** Projeto Integrado (PI) — uso universitário

---

## 2. Stack Técnica

| Camada | Tecnologia |
|---|---|
| Framework | React 19 (Vite) |
| Routing | React Router DOM v7 |
| Estilos | TailwindCSS v4 + Vanilla CSS (index.css) |
| Ícones | Lucide React |
| Fonte | DM Sans + DM Mono (Google Fonts) |
| PWA | vite-plugin-pwa (manifest, auto-update) |
| Deploy | Vercel (via Bun) |
| Package manager | npm + bun (bun para build em Vercel) |

**Comandos:**
```bash
npm run dev      # servidor de desenvolvimento
npm run build    # build de produção
npm run preview  # prévia do build
```

---

## 3. Estrutura de Ficheiros

```
App-PI/
├── index.html                  # Entry HTML (lang="pt", favicon logo.png)
├── vite.config.js              # Vite + TailwindCSS + PWA
├── vercel.json                 # Deploy com Bun
├── package.json
├── public/
│   ├── logo.jpg / logo.png     # Logótipo AeroSmart
│   ├── icons.svg
│   └── passo1-5.png            # Imagens do tutorial (5 passos)
├── documentos/
│   └── melhorias.md            # Plano de melhorias UI/UX (6 tarefas)
└── src/
    ├── main.jsx                # Ponto de entrada React
    ├── App.jsx                 # Router + Layout (desktop/mobile)
    ├── index.css               # Design system global
    ├── assets/
    │   └── hero.png
    ├── theme/
    │   └── theme.js            # Tokens de design (typography, spacing)
    ├── context/
    │   └── AppContext.jsx      # Estado global (React Context)
    ├── data/
    │   └── mockData.js         # Dados mock (gráficos, tutorial)
    ├── components/
    │   └── layout/
    │       ├── Header.jsx      # Cabeçalho reutilizável
    │       └── Menu.jsx        # Navegação (sidebar desktop / bottom nav mobile)
    └── pages/
        ├── Login.jsx
        ├── Dashboard.jsx
        ├── Historico.jsx
        ├── Dados.jsx
        ├── Lembretes.jsx
        ├── Rotina.jsx
        ├── Registry.jsx
        ├── Perfil.jsx
        ├── EditarPerfil.jsx
        ├── Definicoes.jsx
        └── Tutorial.jsx
```

---

## 4. Arquitetura da Aplicação

### 4.1 Ponto de Entrada (`main.jsx` → `App.jsx`)

O `App.jsx` é o componente raiz. Estrutura:

```
<AppProvider>          ← Estado global
  <Router>
    <AppLayout />       ← Decide layout desktop vs mobile
  </Router>
</AppProvider>
```

**`AppLayout`** verifica a rota atual:
- **`/login` e `/`** → layout sem navegação (card centrado no ecrã escuro)
- **Todas as outras rotas** → dois layouts paralelos:
  - **Desktop (`lg+`):** sidebar fixa à esquerda (264px) + `<main>` à direita (max-w-5xl)
  - **Mobile (`<lg`):** frame de telemóvel centrado (max-w-md, 100dvh)

**GlobalToast** — notificação flutuante que aparece ao registar uma inalação (`✓ Inalação registada com sucesso!`).

### 4.2 Rotas

| Rota | Componente | Acesso |
|---|---|---|
| `/` | → redirect `/login` | - |
| `/login` | `Login` | Sem nav |
| `/dashboard` | `Dashboard` | Com nav |
| `/historico` | `Historico` | Com nav |
| `/dados` | `Dados` | Com nav |
| `/lembretes` | `Lembretes` | Com nav |
| `/perfil` | `Perfil` | Com nav |
| `/registry` | `Registry` | Sem nav (back button) |
| `/rotina` | `Rotina` | Sem nav (back button) |
| `/editar-perfil` | `EditarPerfil` | Sem nav (back button) |
| `/definicoes` | `Definicoes` | Sem nav (back button) |
| `/tutorial` | `Tutorial` | Sem nav (back button) |

> **Nota:** Não existe autenticação real. O botão "Entrar" no Login navega diretamente para `/dashboard`.

---

## 5. Estado Global (`AppContext.jsx`)

Um único contexto React partilha estado entre todas as páginas:

| Estado | Valor padrão | Usado em |
|---|---|---|
| `previousScreen` | `'/dashboard'` | Definicoes (botão back) |
| `regDate` | `''` | Registry |
| `regTime` | `''` | Registry |
| `regMed` | `'Ventolin Evohaler'` | Registry |
| `doseType` | `'manutencao'` | Registry |
| `regNotes` | `''` | Registry |
| `regLocation` | `'Casa'` | Registry |
| `showToast` | `false` | GlobalToast |
| `profileName` | `'João Silva'` | Perfil, EditarPerfil |
| `profileAge` | `'29'` | Perfil, EditarPerfil |
| `profileBlood` | `'A+'` | Perfil, EditarPerfil |
| `profileHeight` | `'168'` | Perfil, EditarPerfil |
| `profileWeight` | `'64'` | Perfil, EditarPerfil |
| `emergencyContactName` | `'Margarida Silva'` | Perfil, EditarPerfil |
| `emergencyContactPhone` | `'+351 912 345 678'` | Perfil, EditarPerfil |
| `doctor1Name` | `'Dra. Sara Martins'` | Perfil, EditarPerfil |
| `doctor1Phone` | `'+351900000001'` | Perfil, EditarPerfil |
| `doctor2Name` | `'Dr. Diogo Marques'` | Perfil, EditarPerfil |
| `doctor2Phone` | `'+351900000002'` | Perfil, EditarPerfil |
| `timeframe` | `'semana'` | Historico |

---

## 6. Dados Mock (`mockData.js`)

### `chartData`
Dados de gráfico de barras para 3 períodos:
- `dia` — 6 barras (horas do dia)
- `semana` — 7 barras (dias da semana: S, T, Q, Q, S, S, D)
- `mes` — 10 barras (dias 1–10)

Cada barra tem `{ label, h (height %), type ('m'=manutenção | 'e'=emergência) }`.

### `summaryData`
Resumo por período: `{ total, media, trend, trendUp }`.
- dia: 3 doses, média 3.0, trend +2%
- semana: 24 doses, média 3.4, trend -5%
- mes: 98 doses, média 3.2, trend +1%

### `tutorialSteps`
Array de 5 objetos com `{ title, text, img, progress }` — passos do guia de inalação:
1. Preparar o dispositivo (20%)
2. Expirar completamente (40%)
3. Colocar e inalar (60%)
4. Suster a respiração (80%)
5. Expirar lentamente (100%)

---

## 7. Componentes de Layout

### `Header.jsx`
Cabeçalho reutilizável com 4 props:
- `title` — texto ou nome da página
- `showBack` (bool) — mostra seta de voltar; se false, mostra logo + "AeroSmart"
- `rightAction` — slot JSX para ações à direita (ex: ícone de settings)
- `onBack` — callback personalizado (default: `navigate(-1)`)

Estilo: `compact-header` (52px min-height, sticky top, border bottom).

### `Menu.jsx`
Navegação com 5 tabs: Início, Histórico, Dados, Lembretes, Perfil.

- **Prop `desktop={true}`** → renderiza como sidebar vertical (nav links com ícone + label + ponto azul no ativo)
- **Sem prop** → renderiza como bottom nav bar absoluta (ícone + label uppercase 8px)

A tab ativa é determinada por `useLocation().pathname`.

---

## 8. Páginas — Descrição Detalhada

### 8.1 `/login` — Login
**Layout:** Card branco sem navegação, fundo `#0e0e14`.

**Conteúdo:**
- Logo AeroSmart (logo.png, 96px)
- Título "Bem-vindo de volta"
- Campo Email (floating label)
- Campo Palavra-passe (floating label + toggle show/hide + link "Esqueceu-se?")
- Botão "Entrar" → navega para `/dashboard`
- Divisor "ou"
- Botão "Entra com a tua conta Google" (decorativo, SVG do logo Google)
- Rodapé: "Novo aqui? Crie uma conta" + links Privacidade/Termos/Suporte

---

### 8.2 `/dashboard` — Início
**Layout:** Header (logo + botão settings) + scroll area + bottom nav.

**Conteúdo (de cima para baixo):**
1. **Saudação** — "Bom dia, João." + "Pronto para a tua rotina diária?"
2. **Card azul CTA** — "Registar Inalação" → navega para `/registry`
3. **Card branco** — "Última Utilização: Hoje às 08:42"
4. **Card Aderência** — 66% com anel SVG animado + badge "falta 1 dose"
5. **Grid 2 colunas:**
   - Card "Estado: Conectado" (sincronizado há 2m)
   - Card "Bateria: 85%" (~14h de uso)
6. **Card "Nível de Medicação"** — 65% (barra de progresso), 78/120 doses Ventolin Evohaler
7. **Card verde "Qualidade do Ar"** — 12 IQA, badge "Ideal", dica sobre pólen

---

### 8.3 `/historico` — Histórico de Utilização
**Layout:** Header (logo + settings) + scroll area + bottom nav.

**Conteúdo:**
1. **Título** — "Histórico de Utilização"
2. **Seletor de período** — tabs Dia / Semana / Mês (estado `timeframe` no contexto)
3. **Card gráfico** — gráfico de barras verticais (dados de `chartData[timeframe]`), barras azuis (manutenção) e vermelhas (emergência), com totais e média diária dinâmicos
4. **Legenda** — ponto azul = Manutenção, ponto vermelho = Emergência
5. **Lista "Atividades Recentes"** (com botão "Exportar CSV" decorativo):
   - Hoje 08:42 — Dose de Manutenção — Casa
   - Ontem 23:15 — Dose de Manutenção — Parque da Ponte
   - 24 Out 15:10 — **Dose de Emergência** (ícone vermelho) — Ginásio
   - 23 Out 09:20 — Dose de Manutenção — Casa

---

### 8.4 `/dados` — Análise do Inalador
**Layout:** Header (logo + settings) + scroll area + bottom nav.

**Conteúdo:**
1. **Título** — "Análise do Inalador" + subtítulo técnica e métricas 7 dias
2. **Card "Pontuação da Técnica"** — Score **92/100**, "Excelente Técnica", barras de progresso:
   - Consistência: 88%
   - Precisão de Tempo: 95%
3. **Card laranja de aviso** — "Inalador Baixo: 12 doses restantes" + recomendação de recarga em 3 dias
4. **Card verde "Força de Pico"** — valor **42.5**, gráfico mini de barras verdes das últimas 7 sessões
5. **Card "Duração Média"** — **5.2 segundos**, nota positiva de melhoria vs semana anterior
6. **Tabela "Sessões Recentes"** — 5 linhas com data/hora, Pressão (Pa) e Velocidade Angular (º/s)

---

### 8.5 `/lembretes` — Lembretes
**Layout:** Header (logo + settings) + scroll area + bottom nav.

**Conteúdo:**
1. **Alerta amarelo** — "Aumento de dosagem detectado: usaste o inalador 3 vezes nas últimas 4 horas."
2. **Secção "Lembretes"** (com link "Ver Minha Rotina" → `/rotina`):
   - **07:00 AM** — Inalador Matinal · Diário · 2 inalações
   - **08:30 PM** — Inalador Noturno · Diário · 1 inalação
3. **Card azul "Modo Foco ativo"** — aviso que só alertas médicos críticos passam; botão "Editar Horário" (decorativo)
4. **Card laranja "Guia Instrucional"** — botão "Ver" → navega para `/tutorial`

---

### 8.6 `/rotina` — Plano de Medicação
**Layout:** Header com back button (→ `/lembretes`) + scroll area. **Sem bottom nav.**

**Conteúdo:**
1. **Badge azul** — "3/3 · 3 Inalações" (dose diária)
2. **Card timeline com borda esquerda azul** — Inalação Matinal 07:00 AM, 2 doses, tipo Manutenção
3. **Card timeline com borda esquerda laranja** — Inalação Noturna 08:30 PM, 1 dose, tipo Manutenção
4. **Card educativo laranja** — "Por que seguir o plano?" — explicação sobre inaladores de manutenção vs emergência; botão "Saber mais" (decorativo)
5. **Botão** — "Voltar para Lembretes"
6. **Aviso** — "Consulte sempre o seu médico antes de realizar qualquer alteração."

---

### 8.7 `/registry` — Registar Inalação
**Layout:** Header com back button (→ `/dashboard`) + scroll area. **Sem bottom nav.**

**Conteúdo (formulário em cards brancos):**
1. **Data e Hora** — dois inputs lado a lado (date + time), controlados pelo contexto
2. **Medicamento** — dropdown com opções: BiResp Spiromax, Symbicort Turbuhaler, Seretide Accuhaler, Relvar Ellipta, Bricanyl Turbohaler
3. **Tipo de Dose** — toggle buttons: "Manutenção" / "Emergência"
4. **Notas** (opcional) — textarea livre
5. **Localização** — input de texto com floating label

**Ao submeter:** `setShowToast(true)` → após 2.5s o toast desaparece e navega para `/dashboard`.

---

### 8.8 `/perfil` — Perfil do Paciente
**Layout:** Header (logo + settings) + scroll area + bottom nav.

**Conteúdo:**
1. **Avatar** — foto circular (URL externa Magnific.com), botão de editar → `/editar-perfil`
2. **Nome** (do contexto) + "ID do Paciente: CS-88203-ER"
3. **Grid 2 colunas** — Idade (do contexto) + Condição (fixo: "Asma")
4. **Card índigo "Contacto de Emergência"** — nome e telefone do contexto + botão "Notificar" (decorativo)
5. **Secção "Equipa de Saúde"** — 2 médicos do contexto:
   - Dra. Sara Martins (Médico de Família) — botões Ligar / Mensagem (links `tel:` e `sms:`)
   - Dr. Diogo Marques (Pneumologista) — mesmos botões
6. **Secção "Perfil de Saúde"** — Tipo de Sangue, Altura/Peso, Medicação (todos do contexto)

---

### 8.9 `/editar-perfil` — Editar Perfil
**Layout:** Header com back button (→ `/perfil`) + scroll area + botão fixo no fundo. **Sem bottom nav.**

**Conteúdo (formulário com campos ligados ao contexto):**
1. **Avatar** com botão de editar foto (decorativo)
2. **Secção "Informações Básicas"** — Nome completo (editável), ID Paciente (readonly), Idade, Tipo de Sangue (dropdown A+/O-/B+), Altura (cm), Peso (kg)
3. **Secção "Condição Respiratória"** — chips: Asma (ativo/teal), DPOC (cinza), Alergias (cinza), botão "+" (decorativo)
4. **Secção "Contacto de Emergência"** (borda vermelha esquerda) — Nome e Telemóvel (editáveis)
5. **Secção "Equipa de Saúde"** — Médico de Família (nome + tel) e Pneumologista (nome + tel), todos editáveis
6. **Botão fixo** "Guardar Alterações" → navega de volta para `/perfil`

---

### 8.10 `/definicoes` — Definições
**Layout:** Header com back button (→ `previousScreen` do contexto) + scroll area. **Sem bottom nav.**

**Conteúdo:**
1. **Card "Inalador Inteligente Pro"** — badge "LIGAÇÃO EM DIRETO" (animado), ícone Bluetooth, info de sincronização + bateria 84%, dois botões: "Reconectar" / "Detalhes" (decorativos)
2. **Card "Som e Háptica"** — personalizar tons de alarme e vibração (decorativo)
3. **Card "Círculo de Cuidados"** — partilhar dados com médico/familiares (decorativo)
4. **Card "Privacidade e Dados"** — gerir dados biométricos (decorativo)

> **Nota:** O botão Back usa `previousScreen` do contexto, permitindo voltar para a página correta (Dashboard, Historico, Dados, Lembretes ou Perfil), conforme quem navegou para Definições.

---

### 8.11 `/tutorial` — Guia Instrucional (5 passos)
**Layout:** Header com back button (→ `/lembretes`) + progresso + conteúdo + footer. **Sem bottom nav.**

**Funcionamento:**
- Estado local `currentTutorialStep` (0–4)
- Barra de progresso animada no topo (20% → 40% → 60% → 80% → 100%)
- Imagem quadrada por passo (`passo1.png` a `passo5.png`, ~4–5MB cada, em `/public/`)
- Título e texto descritivo de `tutorialSteps[step]`
- Botões "Anterior" (desativado no passo 0) e "Próximo" / "Concluir" (no último passo → navega para `/lembretes`)

**Passos:**
| # | Título | Resumo |
|---|---|---|
| 1 | Preparar o dispositivo | Retirar tampa, carregar dose |
| 2 | Expirar completamente | Virar cabeça, esvaziar pulmões |
| 3 | Colocar e inalar | Bocal na boca, inspiração rápida e profunda |
| 4 | Suster a respiração | 10 segundos após retirar inalador |
| 5 | Expirar lentamente | Soltar ar longe do aparelho |

---

## 9. Design System

### Cores principais

| Token CSS | Valor | Uso |
|---|---|---|
| `--brand-blue` / `.bg-brand-blue` | `#2563eb` | Primária (botões, tabs ativas, anel) |
| `.bg-soft-blue` | `#f0f7ff` | Fundo suave de elementos ativos |
| fundo geral | `#F8FAFC` | Background das páginas |
| fundo dark (login) | `#0e0e14` | Ecrã de login |
| emergência | `#ef4444` | Barras e ícones de dose de emergência |
| teal | `#1a9c8e` | Qualidade do ar, toast de sucesso |

### Tipografia
- **Família:** DM Sans (regular/medium/semibold/bold), DM Mono (inputs date/time)
- **Escala:** xs=11px, sm=13px, md=15px, lg=18px, xl=22px

### Classes CSS utilitárias personalizadas
| Classe | Descrição |
|---|---|
| `.field-wrap` | Container com floating label (input/select) |
| `.tab-btn` | Botão de tab com estado ativo |
| `.dose-btn` | Toggle de tipo de dose (Manutenção/Emergência) |
| `.time-tab` | Tab de período (Dia/Semana/Mês) |
| `.activity-item` | Linha de item de atividade no histórico |
| `.chart-bar-bg/fill` | Barra do gráfico de histórico |
| `.ring-bg/fill` | SVG ring do círculo de aderência |
| `.compact-header` | Header com padding safe-area-inset |
| `.action-btn` | Botão de ação (min-height 44px, full-width) |
| `.section-title` | Título de secção com espaçamento normalizado |
| `.health-profile-container` | Previne layout shift no scroll (Perfil) |
| `.card-shadow` | Sombra suave de card |
| `.custom-input` | Input sem border, com box-shadow |
| `.section-container` | Container de secção cinza (editarPerfil) |
| `.border-emergency` | Borda esquerda vermelha (emergência) |
| `.border-medical` | Borda esquerda teal |

### Animações
- `fadeUp` — entrada suave (opacity + translateY) para conteúdo de ecrã
- Barra de aderência — `transition: width 0.6s ease`
- Toast — `transition: all 0.35s` (opacity + translateY)
- Barra de progresso do tutorial — `transition-all duration-300`

### Responsive (Desktop `lg+`)
- Bottom nav oculta (`nav.absolute.bottom-0 { display: none }`)
- `pb-24` → padding reduzido (sem espaço para nav)
- `max-w-md` → 100% de largura
- Conteúdo servido dentro de `max-w-5xl mx-auto`

---

## 10. Configurações de Build e Deploy

### `vite.config.js`
- Plugin React (HMR)
- TailwindCSS via plugin Vite
- **PWA** (vite-plugin-pwa):
  - `registerType: 'autoUpdate'`
  - Manifest: nome "AeroSmart App", short_name "AeroSmart", theme `#2563eb`, background `#0e0e14`, display `standalone`
  - Ícone: `logo.png` (192x192 + 512x512, maskable)

### `vercel.json`
- Instala Bun via curl
- Usa `bun install --frozen-lockfile` + `bun run build`
- Permite deploy automático no Vercel

### `index.html`
- `lang="pt"`
- Favicon e apple-touch-icon: `logo.png`
- Theme color: `#2563eb`
- Title: "AeroSmart App"

---

## 11. Fluxo de Navegação (Mapa)

```
/login
  └─→ /dashboard ──────────────────────────────────────────────────────┐
        ├─→ /registry (CTA azul) → [toast] → /dashboard               │
        └─→ /definicoes (⚙ icon, previousScreen='dashboard')          │
                                                                        │
  ← bottom nav ──────────────────────────────────────────────────────  │
                                                                        │
/historico                                                              │
  └─→ /definicoes (previousScreen='historico')                         │
                                                                        │
/dados                                                                  │
  └─→ /definicoes (previousScreen='dados')                             │
                                                                        │
/lembretes                                                              │
  ├─→ /rotina ("Ver Minha Rotina") → volta para /lembretes             │
  ├─→ /tutorial ("Ver" guia) → volta para /lembretes                   │
  └─→ /definicoes (previousScreen='lembretes')                         │
                                                                        │
/perfil                                                                 │
  ├─→ /editar-perfil (botão editar foto/avatar) → volta para /perfil   │
  └─→ /definicoes (previousScreen='perfil')                            │
                                                                        │
/definicoes → volta para previousScreen ──────────────────────────────-┘
```

---

## 12. O que Falta / Limitações Atuais

1. **Sem backend** — todos os dados são mock/hardcoded ou estado React efémero (perde-se ao recarregar)
2. **Sem autenticação real** — login aceita qualquer credencial
3. **Sem persistência** — registos de inalação não são guardados
4. **Muitos botões decorativos** — "Exportar CSV", "Editar Horário", "Reconectar", "Saber mais sobre inaladores", "Círculo de Cuidados", etc. não têm funcionalidade
5. **Imagens de médicos** — URLs externas (Shutterstock/Freepik) que podem expirar
6. **Imagens do tutorial** — ficheiros muito grandes (~4–5MB cada), sem otimização
7. **Sem notificações push** — apesar do PWA estar configurado, não há lógica de push notifications
8. **Sem integração com sensor real** — os dados de pressão, velocidade angular e qualidade do ar são todos estáticos
