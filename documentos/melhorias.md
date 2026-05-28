# Plano de Implementação — AeroSmart UI/UX Fixes
> Documento destinado a um agente de IA para implementação autónoma. Cada tarefa é atómica, testável e ordenada por dependência.

---

## Contexto e Regras Gerais

- **Framework assumida:** React Native / Expo (ajustar se diferente)
- **Não alterar** lógica de negócio, apenas estilos e layout
- **Após cada tarefa:** verificar que não foram introduzidas regressões nas outras telas
- **Variáveis globais** devem ser definidas em `theme.js` (ou equivalente) e importadas onde necessário
- **Testar em:** iPhone SE (375px), iPhone 14 (393px), Android médio (360px)

---

## TAREFA 1 — Variáveis Globais de Tipografia
**Prioridade:** 🔴 Alta (bloqueante para as tarefas seguintes)  
**Ficheiro:** `src/theme/theme.js` (criar se não existir)

### O que fazer:
1. Criar (ou editar) o ficheiro de tema global
2. Definir as seguintes variáveis:

```js
// src/theme/theme.js
export const typography = {
  sizeXS: 11,
  sizeSM: 13,
  sizeMD: 15,
  sizeLG: 18,
  sizeXL: 22,

  weightRegular: '400',
  weightMedium:  '500',
  weightSemiBold:'600',
  weightBold:    '700',
};

export const spacing = {
  xs: 4,
  sm: 8,
  md: 12,
  lg: 16,
  xl: 24,
  xxl: 32,
};
```

3. Substituir **todos** os valores inline de `fontSize` e `fontWeight` nas telas `Histórico` e `Definições` pelas variáveis acima
4. Confirmar que as restantes telas também usam as mesmas variáveis (normalização global)

### Critério de sucesso:
- Nenhum valor de `fontSize` ou `fontWeight` hardcoded fora de `theme.js`
- Visual de "Histórico" e "Definições" tipograficamente idêntico

---

## TAREFA 2 — Redução da Top Bar
**Prioridade:** 🔴 Alta  
**Ficheiros:** todos os componentes que contenham `header-container` ou equivalente

### O que fazer:
1. Localizar todos os StyleSheets com propriedades de header/top bar
2. Aplicar os seguintes valores:

```js
headerContainer: {
  paddingTop: Platform.OS === 'ios'
    ? Math.max(8, insets.top)   // usar useSafeAreaInsets()
    : StatusBar.currentHeight + 8,
  paddingBottom: 8,
  paddingHorizontal: 16,
  minHeight: 52,                // era ~64–72px
},

headerTitle: {
  fontSize: typography.sizeLG,  // era ~20–22px
  fontWeight: typography.weightSemiBold,
},

headerIcon: {
  width: 24,                    // era ~28px
  height: 24,
},
```

3. Se ainda não estiver a ser usado, instalar e envolver a app em `<SafeAreaProvider>` e usar `useSafeAreaInsets()` no header

### Critério de sucesso:
- Top bar visualmente mais compacta em todas as telas
- Sem sobreposição com a status bar em nenhum dispositivo de teste

---

## TAREFA 3 — Correção do Bug de Layout Saltitante (Perfil de Saúde)
**Prioridade:** 🔴 Alta  
**Ficheiro:** componente `PerfilSaude` (ou equivalente)

### O que fazer:
1. Identificar o componente que apresenta o "salto" durante o scroll
2. Aplicar as seguintes correções **pela ordem indicada** (testar após cada uma):

**Passo 3a — Fixar altura mínima do container:**
```js
perfilContainer: {
  minHeight: 120,           // impede colapso antes da renderização
  overflow: 'hidden',
},
```

**Passo 3b — Isolar do fluxo de scroll:**
```js
// Se web (React Native Web):
perfilContainer: {
  contain: 'layout',        // isola reflows internos
},

// Se React Native nativo:
// Envolver o componente em:
<View collapsable={false}>
  <PerfilSaude />
</View>
```

**Passo 3c — Rever animações de fade-in:**
```js
// Se existir uma animação com Animated.Value que altera layout:
// Substituir por opacity-only (não alterar transform/height durante scroll)
Animated.timing(fadeAnim, {
  toValue: 1,
  duration: 250,
  useNativeDriver: true,    // OBRIGATÓRIO — evita reflows no JS thread
}).start();
```

**Passo 3d — Verificar unidades `vh`/`rem` (se web):**
- Substituir `vh` por `px` fixo ou `%` no container do perfil
- Evitar `rem` em containers cujo pai muda de tamanho durante scroll

### Critério de sucesso:
- Scroll suave sem reposicionamento brusco do componente
- Comportamento consistente em iOS e Android

---

## TAREFA 4 — Layout de Cards em Grid (2 Colunas)
**Prioridade:** 🟡 Média  
**Ficheiro:** tela `Início` / componente de cards (Idade, Condição, etc.)

### O que fazer:
1. Localizar o componente que renderiza os cards de informação
2. Substituir o layout atual por um `FlatList` ou `View` com Flexbox em grid:

```jsx
// Estrutura recomendada
<View style={styles.cardsGrid}>
  {cards.map((card) => (
    <View key={card.id} style={styles.cardItem}>
      <CardComponent {...card} />
    </View>
  ))}
</View>
```

```js
// Estilos
cardsGrid: {
  flexDirection: 'row',
  flexWrap: 'wrap',
  gap: spacing.sm,          // React Native 0.71+
  // alternativa: marginHorizontal: -4 com paddingHorizontal: 4 nos filhos
},

cardItem: {
  width: '48%',             // 2 colunas com gap
  minHeight: 80,
},
```

3. Se usar `FlatList`, definir `numColumns={2}` e `columnWrapperStyle`

### Critério de sucesso:
- Cards "Idade" e "Condição" lado a lado em mobile
- Sem overflow horizontal
- Cards com altura uniforme (usar `alignItems: 'stretch'`)

---

## TAREFA 5 — Ergonomia dos Botões (Definições e Guia Instrucional)
**Prioridade:** 🟡 Média  
**Ficheiros:** telas `Definições`, `Guia Instrucional`

### O que fazer:
1. Localizar todos os `TouchableOpacity` / `Pressable` / `Button` dentro de cards nestas telas
2. Aplicar:

```js
actionButton: {
  width: '100%',
  minHeight: 44,            // mínimo Apple/Google para touch targets
  justifyContent: 'center',
  alignItems: 'center',
  paddingVertical: spacing.sm,
  paddingHorizontal: spacing.lg,
  borderRadius: 8,
},
```

3. Garantir que o elemento pai (card) não tem `overflow: 'hidden'` que corte a área de toque

### Critério de sucesso:
- Botões ocupam largura total do card
- Área de toque ≥ 44×44px em todos os botões de ação

---

## TAREFA 6 — Ajuste de Hierarquia Visual (Espaçamento de Títulos)
**Prioridade:** 🟢 Baixa  
**Ficheiros:** tela `Início` (e outras com títulos de secção)

### O que fazer:
1. Localizar títulos como "Bom dia, João" e "Histórico de Utilização"
2. Aplicar espaçamento coerente:

```js
sectionTitle: {
  marginTop: spacing.lg,    // 16px
  marginBottom: spacing.sm, // 8px  (era provavelmente maior)
  fontSize: typography.sizeLG,
  fontWeight: typography.weightSemiBold,
},
```

### Critério de sucesso:
- Espaçamento visivelmente reduzido entre título e conteúdo
- Consistente em todas as telas

---

## Ordem de Execução Recomendada

```
TAREFA 1 (tema global)
    ↓
TAREFA 2 (top bar)     ←→     TAREFA 3 (bug scroll)
    ↓
TAREFA 4 (cards grid)
    ↓
TAREFA 5 (botões)      ←→     TAREFA 6 (espaçamento)
```

---

## Checklist Final de QA

- [ ] Top bar compacta e sem overlap com status bar (iOS + Android)
- [ ] Sem espaço branco excessivo no topo em nenhuma tela
- [ ] Scroll do Perfil de Saúde suave, sem saltos
- [ ] Cards em 2 colunas na tela Início
- [ ] Botões full-width em Definições e Guia Instrucional
- [ ] Tipografia consistente entre Histórico e Definições
- [ ] Espaçamento de títulos reduzido e uniforme
- [ ] Testado em: iPhone SE · iPhone 14 · Android 360px · Android 412px