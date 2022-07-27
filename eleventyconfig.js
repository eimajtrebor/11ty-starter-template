const now = String(Date.now());

module.exports = (eleventyConfig) => {

    eleventyConfig.addWatchTarget('./src/assets/styles/tailwind.config.js');
    eleventyConfig.addWatchTarget('./src/assets/styles/tailwind.css');

    eleventyConfig.addPassthroughCopy({'./node_modules/alpinejs/dist/cdn.js': './js/alpine.js'});

    eleventyConfig.addShortcode('version', function() {
        return now;
    });

    return {
        dir: {
            input: 'src',
            includes: '_includes',
            layouts: '_includes/layouts',
            output: 'dist'
        },
        templateFormats: ['md', 'liquid', 'html'],
        markdownTemplateEngine: 'liquid',
        htmlTemplateEngine: 'liquid',
        dataTemplateEngine: 'liquid'
    }
}