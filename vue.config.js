module.exports = {
  pages: {
    index: {
      entry: 'src/main.js',
      template: 'public/index.html',
      title: 'Palomitas de maiz'
    }
  },
  css: {
    loaderOptions: {
      sass: {
        additionalData: `
          @import "@/ui/assets/sass/abstracts/mixin.responsive.scss";
        `
      }
    }
  }
}
