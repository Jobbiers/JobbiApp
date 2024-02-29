import { createTamagui } from 'tamagui';
import { createInterFont } from '@tamagui/font-inter';
import { shorthands } from '@tamagui/shorthands';
import { tokens as tamaguiTokens } from '@tamagui/themes/v3';
import { createMedia } from '@tamagui/react-native-media-driver';
import { themes } from './theme';

// import { animations } from '@my/ui/src/animations'

const headingFont = createInterFont({
  size: {
    6: 15,
  },
  transform: {
    6: 'uppercase',
    7: 'none',
  },
  weight: {
    6: '400',
    7: '700',
  },
  color: {
    6: '$colorFocus',
    7: '$color',
  },
  letterSpacing: {
    5: 2,
    6: 1,
    7: 0,
    8: -1,
    9: -2,
    10: -3,
    12: -4,
    14: -5,
    15: -6,
  },
  face: {
    700: { normal: 'InterBold' },
  },
});

const bodyFont = createInterFont(
  {
    face: {
      700: { normal: 'InterBold' },
    },
  },
  {
    sizeSize: (size) => Math.round(size * 1.1),
    sizeLineHeight: (size) => Math.round(size * 1.1 + (size > 20 ? 10 : 10)),
  },
);

const zIndex = {
  0: 0,
  1: 100,
  2: 200,
  3: 300,
  4: 400,
  5: 500,
};

const radius = {
  0: 0,
  1: 3,
  2: 5,
  3: 7,
  4: 9,
  true: 9,
  5: 10,
  6: 16,
  7: 19,
  8: 22,
  9: 26,
  10: 34,
  11: 42,
  12: 50,
};

const size = {
  $0: 0,
  '$0.25': 2,
  '$0.5': 4,
  '$0.75': 8,
  $1: 20,
  '$1.5': 24,
  $2: 28,
  '$2.5': 32,
  $3: 36,
  '$3.5': 40,
  $4: 44,
  $true: 44,
  '$4.5': 48,
  $5: 52,
  $6: 64,
  $7: 74,
  $8: 84,
  $9: 94,
  $10: 104,
  $11: 124,
  $12: 144,
  $13: 164,
  $14: 184,
  $15: 204,
  $16: 224,
  $17: 224,
  $18: 244,
  $19: 264,
  $20: 284,
};

const space = {
  0: 0,
  1: 4,
  true: 4,
  2: 8,
  3: 12,
};

// const tokens = createTokens({
//   color: {
//     // light
//     lightPrimary: '##9f75ff',
//     lightSecondary: '##843dff',
//     lightTertiary: '##bea6ff',
//     lightBg: '#f5f5f5',
//     lightError: '#ff7171',
//     lightSuccess: '#00b894',
//     lightWarning: '#f6a623',
//     lightInfo: '#00b0ff',
//     // dark
//     darkPrimary: '##f6a623',
//     darkSecondary: '##843dff',
//     darkTertiary: '##bea6ff',
//     darkBg: '#1c232a',
//     darkError: '#ff7171',
//     darkSuccess: '#00b894',
//     darkWarning: '#f6a623',
//     darkInfo: '#00b0ff',
//   },
//   zIndex,
//   radius,
//   size,
//   space,
// });

export const config = createTamagui({
  defaultFont: 'body',
  // animations,
  shouldAddPrefersColorThemes: true,
  themeClassNameOnRoot: true,
  onlyAllowShorthands: true,
  shorthands,
  fonts: {
    body: bodyFont,
    heading: headingFont,
  },
  settings: {
    allowedStyleValues: 'somewhat-strict',
  },
  // themes,
  // themes: {
  // ...themes,
  // dark: {
  //   // ...themes.dark,
  //   // all colors defined in the tokens
  //   primary: tokens.color.darkPrimary,
  //   secondary: tokens.color.darkSecondary,
  //   tertiary: tokens.color.darkTertiary,
  //   bg: tokens.color.darkBg,
  //   error: tokens.color.darkError,
  //   success: tokens.color.darkSuccess,
  //   warning: tokens.color.darkWarning,
  //   info: tokens.color.darkInfo,
  //   background: tokens.color.darkBg,
  // },
  // light: {
  //   // ...themes.light,
  //   // all colors defined in the tokens
  //   primary: tokens.color.lightPrimary,
  //   secondary: tokens.color.lightSecondary,
  //   tertiary: tokens.color.lightTertiary,
  //   bg: tokens.color.lightBg,
  //   error: tokens.color.lightError,
  //   success: tokens.color.lightSuccess,
  //   warning: tokens.color.lightWarning,
  //   info: tokens.color.lightInfo,
  //   background: tokens.color.lightBg,
  // },
  // },
  themes,
  // TODO use our own tokens
  tokens: tamaguiTokens,
  media: createMedia({
    xs: { maxWidth: 660 },
    sm: { maxWidth: 800 },
    md: { maxWidth: 1020 },
    lg: { maxWidth: 1280 },
    xl: { maxWidth: 1420 },
    xxl: { maxWidth: 1600 },
    gtXs: { minWidth: 660 + 1 },
    gtSm: { minWidth: 800 + 1 },
    gtMd: { minWidth: 1020 + 1 },
    gtLg: { minWidth: 1280 + 1 },
    short: { maxHeight: 820 },
    tall: { minHeight: 820 },
    hoverNone: { hover: 'none' },
    pointerCoarse: { pointer: 'coarse' },
  }),
});

export type Conf = typeof config;

declare module 'tamagui' {
  interface TamaguiCustomConfig extends Conf {}
}

export default config;
