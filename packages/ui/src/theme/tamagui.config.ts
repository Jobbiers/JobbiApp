import { createTamagui, createTokens } from 'tamagui';
import { createInterFont } from '@tamagui/font-inter';
import { shorthands } from '@tamagui/shorthands';
import { tokens as tamaguiTokens } from '@tamagui/themes/v3';
import { themes } from '@tamagui/themes/v3-themes';
import { createMedia } from '@tamagui/react-native-media-driver';

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

const tokens = createTokens({
  ...tamaguiTokens,
  color: {
    ...tamaguiTokens.color,
    // light
    lightPrimary: '##9f75ff',
    lightSecondary: '##843dff',
    lightTertiary: '##bea6ff',
    lightBg: '#f5f5f5',
    lightRrror: '#ff7171',
    lightSuccess: '#00b894',
    lightWarning: '#f6a623',
    lightInfo: ' #00b0ff',
    // dark
    darkPrimary: '##9f75ff',
    darkSecondary: '##843dff',
    darkTertiary: '##bea6ff',
    darkBg: '#f5f5f5',
    darkRrror: '#ff7171',
    darkSuccess: '#00b894',
    darkWarning: '#f6a623',
    darkInfo: ' #00b0ff',
  },
});

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
  // TODO use our own themes
  // themes,
  themes: {
    ...themes,
    // dark: {
    //   // all colors defined in the tokens
    //   primary: tokens.color.darkPrimary,
    //   secondary: tokens.color.darkSecondary,
    //   tertiary: tokens.color.darkTertiary,
    //   bg: tokens.color.darkBg,
    //   error: tokens.color.darkRrror,
    //   success: tokens.color.darkSuccess,
    //   warning: tokens.color.darkWarning,
    //   info: tokens.color.darkInfo,
    // },
    // light: {
    //   // all colors defined in the tokens
    //   primary: tokens.color.lightPrimary,
    //   secondary: tokens.color.lightSecondary,
    //   tertiary: tokens.color.lightTertiary,
    //   bg: tokens.color.lightBg,
    //   error: tokens.color.lightRrror,
    //   success: tokens.color.lightSuccess,
    //   warning: tokens.color.lightWarning,
    //   info: tokens.color.lightInfo,
    // },
  },
  // TODO use our own tokens
  tokens,
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

console.log(themes);

export type Conf = typeof config;

declare module 'tamagui' {
  interface TamaguiCustomConfig extends Conf {}
}

export default config;
