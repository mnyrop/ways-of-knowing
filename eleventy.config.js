const dayjs = require("dayjs");

module.exports = function (config) {
  config.addPassthroughCopy('./src/public');

  config.setLiquidOptions({
		jsTruthy: true,
    dynamicPartials: false,
		strictFilters: false
	});

  config.addFilter("sitemapDate", (dateObj) => {
    return dayjs(dateObj).toISOString();
  });

  config.addCollection("pages", function (collections) {
    return collections.getFilteredByTag("page").sort(function (a, b) {
      return a.data.order - b.data.order;
    });
  });

  return {
    markdownTemplateEngine: 'liquid',
    dir: {
      input: 'src',
      output: 'dist'
    },
  };
};
