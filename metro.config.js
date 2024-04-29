const { getDefaultConfig } = require('expo/metro-config');
const { withNativeWind } = require('nativewind/metro');

const defaultConfig = getDefaultConfig(__dirname);
// Merge the configurations
const mergedConfig = (() => {
  const { transformer, resolver } = defaultConfig;

  // Apply changes from the provided code
  defaultConfig.transformer = {
    ...transformer,
    babelTransformerPath: require.resolve('react-native-svg-transformer'),
  };
  defaultConfig.resolver = {
    ...resolver,
    assetExts: resolver.assetExts.filter((ext) => ext !== 'svg'),
    sourceExts: [...resolver.sourceExts, 'svg'],
  };

  return defaultConfig;
})();

module.exports = withNativeWind(mergedConfig, { input: './global.css' });
