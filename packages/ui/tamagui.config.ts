
// import {
//   createFont,
//   createTamagui,
//   createTokens,
// } from "tamagui";
// import { config } from '@tamagui/config/v3'


// // const interFont = createFont({
// //   family: "Inter, Helvetica, Arial, sans-serif",

// //   size: {
// //     1: 12,
// //     2: 14,
// //     true: 14,
// //     3: 15,
// //   },

// //   lineHeight: {
// //     // 1 will be 22
// //     2: 22,
// //   },

// //   weight: {
// //     1: "300",
// //     // 2 will be 300
// //     3: "600",
// //   },

// //   letterSpacing: {
// //     1: 0,
// //     2: -1,
// //     // 3 will be -1
// //   },

// //   // (native only) swaps out fonts by face/style

// //   face: {
// //     300: { normal: "InterLight", italic: "InterItalic" },
// //     600: { normal: "InterBold" },
// //   },
// // });

// // const size = {
// //   0: 0,
// //   1: 100,
// //   true: 5,
// //   2: 10,
// // };
// // export const tokens = createTokens({
// //   size,
// //   space: { ...size, "-1": -5, "-2": -10, true: 5 },
// //   radius: { 0: 0, 1: 3 },
// //   zIndex: { 0: 0, 1: 100, 2: 200 },
// //   color: {
// //     white: "#fff",
// //     black: "#000",
// //     testGuido: "purple",
// //   },
// // });

// // const config = createTamagui({
// //   tokens: {
// //     color: {
// //       primary: "red",
// //       secondary: "blue",
// //     },
// //     radius:{
// //       1: 10,
// //       true:10,
// //     },

// //     size:{
// //       1: 10,
// //       true:10,
// //       2: 20,
// //     },

// //     space:{
// //       1: 10,
// //       true:10,
// //       2: 20,

// //     },
// //     zIndex:{
// //       1: 10,
// //       true:10,
// //       2: 20,
// //     }
// //   },


//   // fonts: {
//   //   // for tamagui, heading and body are assumed
//   //   // heading: interFont,
//   //   // body: interFont,
//   // },
//   // tokens,
//   // // For more on themes, see the Themes page
//   // themes: {
//   //   light: {
//   //     bg: "#f2f2f2",
//   //     color: tokens.color.black,
//   //   },
//   //   dark: {
//   //     bg: "#111",
//   //     color: tokens.color.white,
//   //   },
//   // },

//   // shorthands: {
//   //   px: "paddingHorizontal",
//   //   f: "flex",
//   //   m: "margin",
//   //   w: "width",
//   // } as const,

//   // defaultProps: {
//   //   Text: {
//   //     color: "green",
//   //   },
//   // },
// // });
// const appConfig = createTamagui(config)


// type AppConfig = typeof appConfig;
// // this will give you types for your components

// // note - if using your own design system, put the package name here instead of tamagui

// declare module "tamagui" {
//   interface TamaguiCustomConfig extends AppConfig {}
//   // if you want types for group styling props, define them like so:

//   // interface TypeOverride {
//   //   groupNames(): "a" | "b" | "c";
//   // }
// }

// export default appConfig;



import { config } from '@tamagui/config/v3'

import { Text, View } from 'react-native'

import { createTamagui } from 'tamagui' // or '@tamagui/core'
const appConfig = createTamagui(config)
export type AppConfig = typeof appConfig
declare module 'tamagui' {

  // or '@tamagui/core'

  // overrides TamaguiCustomConfig so your custom types

  // work everywhere you import `tamagui`

  interface TamaguiCustomConfig extends AppConfig {}

}
export default appConfig
