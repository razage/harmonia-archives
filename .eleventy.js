export default function (eleventyConfig) {
  eleventyConfig.addPassthroughCopy("style.min.css");
  eleventyConfig.addPassthroughCopy("favicon.ico");
  eleventyConfig.addPassthroughCopy(".nojekyll");

  // Function for forming a correct URL when linking assets
  eleventyConfig.addFilter("url", function (url) {
    const pathPrefix = eleventyConfig.pathPrefix || "/";
    return `${pathPrefix}${url.replace(/^\//, "")}`;
  });

  // Creating a collection of alien articles for template usage
  eleventyConfig.addCollection("aliens", function (collectionApi) {
    return collectionApi
      .getFilteredByGlob("aliens/*.md")
      .sort((a, b) => a.data.species_name.localeCompare(b.data.species_name));
  });

  eleventyConfig.addCollection("voxArticles", function (collectionApi) {
    return collectionApi
      .getFilteredByGlob("harmonia-vox/*.md")
      .sort((a, b) => a.data.article_date.localeCompare(b.data.article_date));
  });

  return {
    dir: {
      output: ".site",
    },
    pathPrefix: "/harmonia-archives/",
  };
}
