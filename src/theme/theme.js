// src/theme/theme.js
// Variáveis globais de design — AeroSmart
// Importar onde necessário: import { typography, spacing } from '../theme/theme';

export const typography = {
  sizeXS: '11px',
  sizeSM: '13px',
  sizeMD: '15px',
  sizeLG: '18px',
  sizeXL: '22px',

  weightRegular: '400',
  weightMedium: '500',
  weightSemiBold: '600',
  weightBold: '700',
};

export const spacing = {
  xs: 4,
  sm: 8,
  md: 12,
  lg: 16,
  xl: 24,
  xxl: 32,
};

// Alturas mínimas para touch targets (Apple HIG / Google Material)
export const touchTarget = {
  minHeight: 44,
  minWidth: 44,
};

// Altura da top bar
export const layout = {
  headerMinHeight: 52,
  headerPaddingTop: 'max(8px, env(safe-area-inset-top))',
  headerPaddingBottom: '8px',
  headerPaddingHorizontal: '16px',
};
