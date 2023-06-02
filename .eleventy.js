module.exports = function(eleventyConfig) {
  eleventyConfig.addPassthroughCopy("./src/style.css");
  eleventyConfig.addPassthroughCopy({"./node_modules/startbootstrap-agency/dist/assets": "assets"});
  eleventyConfig.addPassthroughCopy({"./node_modules/startbootstrap-agency/dist/css": "css"});
  eleventyConfig.addPassthroughCopy({"./node_modules/startbootstrap-agency/dist/js": "js"});
  eleventyConfig.addPassthroughCopy("./src/admin/config.yml");
  
  // Return your Object options:
    return {
      dir: {
        input: "src",
        output: "dist"
      }
    }
  };