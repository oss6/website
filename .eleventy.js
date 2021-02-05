const markdownIt = require("markdown-it");
const moment = require("moment");
const htmlmin = require("html-minifier");
const syntaxHighlight = require("@11ty/eleventy-plugin-syntaxhighlight");

module.exports = function (eleventyConfig) {
  eleventyConfig.addPlugin(syntaxHighlight);

  eleventyConfig.setUseGitIgnore(false);

  eleventyConfig.addFilter("head", (array, n) =>
    array.sort((a, b) => b.date - a.date).slice(0, n)
  );

  eleventyConfig.addFilter("formattedDate", date =>
    moment(date).format("Do MMMM YYYY")
  );

  eleventyConfig.addWatchTarget("./_tmp/styles.css");

  eleventyConfig.addPassthroughCopy("images");
  eleventyConfig.addPassthroughCopy({ "_tmp/styles.css": "styles.css" });
  eleventyConfig.addPassthroughCopy("favicon.ico");
  eleventyConfig.addPassthroughCopy("favicon-16x16.png");
  eleventyConfig.addPassthroughCopy("favicon-32x32.png");
  eleventyConfig.addPassthroughCopy("apple-touch-icon.png");

  eleventyConfig.addTransform("htmlmin", (content, outputPath) => {
    if (
      process.env.ELEVENTY_PRODUCTION &&
      outputPath &&
      outputPath.endsWith(".html")
    ) {
      let minified = htmlmin.minify(content, {
        useShortDoctype: true,
        removeComments: true,
        collapseWhitespace: true,
      });
      return minified;
    }

    return content;
  });

  eleventyConfig.addCollection("digitalGarden", (collectionApi) => {
    const digitalGardenMap = {};
    const digitalGarden = collectionApi.getFilteredByTag("digital-garden");

    for (const note of digitalGarden) {
      for (const category of note.data.categories) {
        digitalGardenMap[category] = digitalGardenMap[category] ? [...digitalGardenMap[category], note] : [note];
      }
    }

    return Object.entries(digitalGardenMap);
  });

  /* Markdown Overrides */
  const markdownLibrary = markdownIt({
    html: true,
    breaks: true,
    linkify: true
  });
  eleventyConfig.setLibrary("md", markdownLibrary);

  return {
    templateFormats: ["md", "njk", "html", "liquid"],
    markdownTemplateEngine: "liquid",
    htmlTemplateEngine: "njk",
    dataTemplateEngine: "njk"
  };
};
