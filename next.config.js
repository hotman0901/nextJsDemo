const withSass = require('@zeit/next-sass')
const merge = require('webpack-merge');

module.exports = withSass()

// 客製化build路徑
// const withSass = require('@zeit/next-sass')
// const merge = require('webpack-merge');
// module.exports = merge(
//     withSass(), 
//     {'distDir': 'build'}
// )