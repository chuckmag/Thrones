require('babel-polyfill');

const environment = {
  development: {
    isProduction: false
  },
  production: {
    isProduction: true
  }
}[process.env.NODE_ENV || 'development'];

module.exports = Object.assign({
  host: process.env.HOST || 'localhost',
  port: process.env.PORT,
  apiHost: process.env.APIHOST || 'localhost',
  apiPort: process.env.APIPORT,
  app: {
    title: 'Thrones',
    description: 'Tryna get thronesy?',
    head: {
      titleTemplate: 'Thrones: %s',
      meta: [
        {name: 'description', content: 'Tryna get thronesy?'},
        {charset: 'utf-8'},
        {property: 'og:site_name', content: 'Thrones'},
        {property: 'og:image', content: 'http://orig07.deviantart.net/ddce/f/2011/115/1/6/game_of_thrones_icon_by_blackestrose81-d3ewmny.jpg'},
        {property: 'og:locale', content: 'en_US'},
        {property: 'og:title', content: 'Thrones'},
        {property: 'og:description', content: 'All the modern best practices in one example.'},
        {property: 'og:card', content: 'summary'},
        {property: 'og:site', content: '@chuckmag'},
        {property: 'og:creator', content: '@chuckmag'},
        {property: 'og:image:width', content: '200'},
        {property: 'og:image:height', content: '200'}
      ]
    }
  },

}, environment);
