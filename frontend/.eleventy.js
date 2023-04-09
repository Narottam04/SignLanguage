module.exports = function (eleventyConfig) {
  // eleventyConfig.addPassthroughCopy("./styles.css");
  eleventyConfig.addPassthroughCopy({
    "node_modules/flowbite/dist/flowbite.js": "js/flowbite.js"
  });
  eleventyConfig.addPassthroughCopy("./assets");
  eleventyConfig.addPassthroughCopy("./sw.js");
  eleventyConfig.addPassthroughCopy("./manifest.json");
  eleventyConfig.addPassthroughCopy(".well-known");
  eleventyConfig.addPassthroughCopy("./js");
  eleventyConfig.addPassthroughCopy("./utils");
  eleventyConfig.addPassthroughCopy({
    "./node_modules/alpinejs/dist/cdn.js": "./js/alpine.js"
  });
  return {
    passthroughFileCopy: true
  };
};
