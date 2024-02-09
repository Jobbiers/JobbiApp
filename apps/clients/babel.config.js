module.exports = function (api) {
  api.cache(true);
  return {
    presets: ['babel-preset-expo'],
    plugins: [
      [
        "@tamagui/babel-plugin",
        {
          components: ["@jobbi/ui", "tamagui"],
          // config: "../../packages/ui/src/theme/tamagui.config.ts",
          config: "./tamagui.config.ts",
          // logTimings: true,
          // disableExtraction: process.env.NODE_ENV === 'development'
        },
      ],
      'react-native-reanimated/plugin',
    ]
  };
};
