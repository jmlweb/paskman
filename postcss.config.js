module.exports = {
  plugins: [
    require('postcss-flexbugs-fixes')(),
    require('postcss-pixem')({
      replace: false,
      rootValue: 10,
      atrules: true,
      html: false,
    }),
    require('mq-packer')({
      sort: true,
    })
    require('cssnano')({
      autoprefixer: {
        browsers: ['> 5% in ES', 'IE >= 10'],
      },
    })
  ]
}
