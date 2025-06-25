export default function (eleventyConfig) {
  eleventyConfig.addCollection("aliens", function (collectionApi) {
    return collectionApi
      .getFilteredByGlob("aliens/*.md")
      .sort((a, b) => a.data.title.localeCompare(b.data.title));
  });

  return {
    dir: {
      output: "docs",
    },
  };
}
