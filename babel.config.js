module.exports = function (api) {
  api.cache(true);
  return {
    presets: ['babel-preset-expo'],
    plugins: [
      'react-native-reanimated/plugin'
    ],
  };
};


// presets: ['babel-preset-expo'],
// plugins: [
//   // Required for expo-router
//   'expo-router/babel',
//   'react-native-reanimated/plugin'
// ],