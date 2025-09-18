export default function (eleventyConfig) {
  eleventyConfig.addPassthroughCopy("style.min.css");
  eleventyConfig.addPassthroughCopy("favicon.ico");
  eleventyConfig.addPassthroughCopy(".nojekyll");

  // Function for forming a correct URL when linking assets
  eleventyConfig.addFilter("url", function (url) {
    const pathPrefix = eleventyConfig.pathPrefix || "/";
    return `${pathPrefix}${url.replace(/^\//, "")}`;
  });

  // Creating collections
  eleventyConfig.addCollection("aliens", function (collectionApi) {
    return collectionApi
      .getFilteredByGlob("aliens/*.md")
      .sort((a, b) => a.data.species_name.localeCompare(b.data.species_name));
  });

  eleventyConfig.addCollection("voxArticles", function (collectionApi) {
    return collectionApi
      .getFilteredByGlob("harmonia-vox/*.md")
      .sort((a, b) => b.data.article_date.localeCompare(a.data.article_date));
  });

  eleventyConfig.addCollection("astraPlanets", function (collectionApi) {
    return collectionApi
      .getFilteredByGlob("travel-agency/*.md")
      .sort((a, b) => a.data.planet_name.localeCompare(b.data.planet_name));
  });

  return {
    dir: {
      output: ".site",
    },
    pathPrefix: "/harmonia-archives/",
  };
}
