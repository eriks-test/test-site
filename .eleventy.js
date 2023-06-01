module.exports = function(eleventyConfig) {
  eleventyConfig.addPassthroughCopy("./src/style.css");
  eleventyConfig.addPassthroughCopy("./src/admin/config.yml");
  // Return your Object options:
    return {
      dir: {
        input: "src",
        output: "dist"
      }
    }
  };