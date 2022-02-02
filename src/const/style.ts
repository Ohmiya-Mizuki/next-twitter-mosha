export const COLOR_CODE = {
  BLACK: "#030e15",
  WHITE: "#f7f8fa",
} as const;

export const FONT_SIZE = {
  XXS: 10,
  XS: 12,
  S: 14,
  M: 16,
  L: 18,
  XL: 20,
  XXL: 22,
} as const;

export const ICON_SIZE = {
  XS: {
    width: 12,
    height: 12,
  },
  S: {
    width: 14,
    height: 14,
  },
  M: {
    width: 16,
    height: 16,
  }
} as const

export type ColorCodeType = keyof typeof COLOR_CODE;
export type FontSizeType = keyof typeof FONT_SIZE;
export type IconSizeType = keyof typeof ICON_SIZE;

export type ColorCodeTypeValues = typeof COLOR_CODE[ColorCodeType];