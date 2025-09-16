export default function (eleventyConfig) {
  eleventyConfig.addFilter("url", function (url) {
    const pathPrefix = eleventyConfig.pathPrefix || "/";
    return `${pathPrefix}${url.replace(/^\//, "")}`;
  });

  eleventyConfig.addCollection("aliens", function (collectionApi) {
    return collectionApi
      .getFilteredByGlob("aliens/*.md")
      .sort((a, b) => a.data.species_name.localeCompare(b.data.species_name));
  });

  return {
    dir: {
      output: "docs",
    },
    pathPrefix: "/harmonia-archives/",
  };
}
