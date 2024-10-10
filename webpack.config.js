const { getDefaultConfig } = require('@expo/webpack-config');

module.exports = async function (env, argv) {
  const config = await getDefaultConfig(env, argv);

  // Ensure react-native-web support
  config.resolve.alias['react-native$'] = 'react-native-web';

  return config;
};
