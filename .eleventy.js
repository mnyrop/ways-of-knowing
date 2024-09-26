const cleancss          = require('clean-css')
const moment            = require('moment')
const markdownIt        = require("markdown-it")
const markdownItAnchor  = require("markdown-it-anchor")
const slugify           = require("slugify")


moment.locale('en')

module.exports = function(eleventyConfig) {
  
  // minify css filter
  eleventyConfig.addFilter('cssmin', function(code) {
    return new cleancss({}).minify(code).styles;
  })

  // date format filters
  eleventyConfig.addFilter('dateFormatMonth', date => {
    return moment(date).utc().format('MMMM YYYY');
  })

  eleventyConfig.addFilter('dateFormatYear', date => {
    return moment(date).utc().format('YYYY');
  })

  eleventyConfig.addFilter('dateFormat', date => {
    return moment(date).utc().format('LL');
  })

  // limit filter
  eleventyConfig.addFilter('limit', function (arr, limit) {
    return arr.slice(0, limit);
  })

  // find 
  eleventyConfig.addFilter("find", function find(collection = [], field = "", value = "") {
    let item = collection.find(item => item.data[field] === value)
    return(item)
  });

  // where hash array includes substring
  eleventyConfig.addFilter("where_includes", function(arr, key, value) {
    return arr.filter(function(x){
      return (x[key].join(' ').includes(value))
    })
  });

  // URI encoding
  eleventyConfig.addFilter('uri_encode', function(str) {
    return encodeURIComponent(str);
  });

  const markdownItOptions = {
    html: true,
  }

  // Options for the `markdown-it-anchor` library
  const markdownItAnchorOptions = {
    slugify: (str) => slugify(str, {
      lower: true,
      strict: true,
      remove: /["]/g,
    }),
    permalink: markdownItAnchor.permalink.linkInsideHeader({
      symbol: `#`,
      class: 'not-prose header-anchor',
      placement: 'after'
    })
  }

  const markdownLib = markdownIt(markdownItOptions).use(
    markdownItAnchor,
    markdownItAnchorOptions
  )

  eleventyConfig.setLibrary("md", markdownLib)  

  // layout aliases 
  eleventyConfig.addLayoutAlias('base', 'layouts/base.html')
  eleventyConfig.addLayoutAlias('history', 'layouts/history.html')
  eleventyConfig.addLayoutAlias('thesaurus', 'layouts/thesaurus.html')

  // passthrough copy
  eleventyConfig.addPassthroughCopy('site/assets/')
                .addPassthroughCopy('site/media/')
                .addPassthroughCopy('site/js/')
                .addPassthroughCopy({
                  'site/_data/items.json': 'items.json'
                })
                .addPassthroughCopy({
                  './node_modules/siema/dist/siema.min.js': '/assets/vendor/siema.min.js'
                })
                .addPassthroughCopy({
                  './node_modules/flickity/dist/flickity.pkgd.min.js': '/assets/vendor/flickity.min.js'
                })
                .addPassthroughCopy({
                  './node_modules/flickity/dist/flickity.min.css': '/assets/vendor/flickity.min.css'
                })
  
  return {
    markdownTemplateEngine: 'liquid',
    dir: {
      input: 'site',
      output: 'dist',
    },
  }
}