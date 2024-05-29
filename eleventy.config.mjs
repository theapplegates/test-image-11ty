module.exports = function(eleventyConfig) {
  // Add a filter using the Config API
  eleventyConfig.addFilter("myFilter", function(value) {
    return `**${value}**`;
  });

  // Passthrough copy example
  eleventyConfig.addPassthroughCopy("static");

  // Custom Collection
  eleventyConfig.addCollection("myCollection", function(collectionApi) {
    return collectionApi.getFilteredByGlob("src/posts/*.md");
  });

  // Watch target
  eleventyConfig.addWatchTarget("./src/sass/");

  // Set directories to pass through to the output folder
  return {
    dir: {
      input: "src",
      output: "dist",
      includes: "_includes",
      layouts: "_layouts"
    },
    passthroughFileCopy: true
  };
};