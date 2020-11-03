const markdownIt = require("markdown-it");
const moment = require("moment");

module.exports = function (eleventyConfig) {
  eleventyConfig.addFilter("head", (array, n) =>
    array.sort((a, b) => b.date - a.date).slice(0, n)
  );

  eleventyConfig.addFilter("formattedDate", date =>
    moment(date).format("Do MMMM YYYY")
  );

  eleventyConfig.addPassthroughCopy("images");
  eleventyConfig.addPassthroughCopy({ "_build/css": "css" });
  eleventyConfig.addPassthroughCopy("favicon.ico");
  eleventyConfig.addPassthroughCopy("favicon-16x16.png");
  eleventyConfig.addPassthroughCopy("favicon-32x32.png");
  eleventyConfig.addPassthroughCopy("apple-touch-icon.png");

  /* Markdown Overrides */
  const markdownLibrary = markdownIt({
    html: true,
    breaks: true,
    linkify: true
  });
  eleventyConfig.setLibrary("md", markdownLibrary);

  return {
    templateFormats: ["md", "njk", "html", "liquid"],

    // If your site lives in a different subdirectory, change this.
    // Leading or trailing slashes are all normalized away, so don’t worry about those.

    // If you don’t have a subdirectory, use "" or "/" (they do the same thing)
    // This is only used for link URLs (it does not affect your file structure)
    // You can also pass this in on the command line using `--pathprefix`

    // pathPrefix: "/",

    markdownTemplateEngine: "liquid",
    htmlTemplateEngine: "njk",
    dataTemplateEngine: "njk"
  };
};
