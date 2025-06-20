module.exports = function (api) {
  const isDevelopment =
    api.env('development') || process.env.NODE_ENV === 'development';

  // Cache based on environment
  api.cache.using(() => isDevelopment);

  const presets = [
    '@babel/preset-env',
    ['@babel/preset-react', { runtime: 'automatic' }],
  ];

  const plugins = ['@babel/plugin-transform-runtime'];

  if (isDevelopment) {
    plugins.push('react-refresh/babel');
  }

  return {
    presets,
    plugins,
  };
};
