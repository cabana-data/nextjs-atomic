const { nextI18NextRewrites } = require('next-i18next/rewrites')

const localeSubpaths = {
    es: 'es',
    en: 'en'
}

module.exports = {
  rewrites: async () => nextI18NextRewrites(localeSubpaths),
  publicRuntimeConfig: {
    localeSubpaths,
  },
}