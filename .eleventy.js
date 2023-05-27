module.exports = function(eleventyConfig) {
    eleventyConfig.addPassthroughCopy("./src/style.css");
    // Return your Object options:
    return {
      dir: {
        input: "src",
        output: "dist"
      }
    }
  };