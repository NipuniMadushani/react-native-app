module.exports = {
  presets: ['module:@react-native/babel-preset'],
  plugins: [
    ['module:react-native-dotenv', {
      moduleName: '@env',
      path: '.env',
      allowUndefined: true,
    }]
  ]
};


// const presets = ['module:metro-react-native-babel-preset'];
// const plugins = [];

// plugins.push(
//   [
//     'module-resolver',
//     {
//       root: ['./src'],
//       extensions: ['.js', '.json'],
//       alias: {
//         '@': './src',
//       },
//     },
//   ],
// );

// module.exports = {
//   presets,
//   plugins,
// };
