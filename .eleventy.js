module.exports = function(eleventyConfig) {
  eleventyConfig.addPassthroughCopy("./src/style.css");
  eleventyConfig.addPassthroughCopy("./node_modules/startbootstrap-agency/dist/assets");
  eleventyConfig.addPassthroughCopy("./node_modules/startbootstrap-agency/dist/css");
  eleventyConfig.addPassthroughCopy("./node_modules/startbootstrap-agency/dist/js");
  // Return your Object options:
    return {
      dir: {
        input: "src",
        output: "dist"
      }
    }
  };