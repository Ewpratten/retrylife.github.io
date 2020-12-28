var hljs = require('highlight.js');

// Code block syntax highlighter
function highlighter(str, lang) {
    if (lang && hljs.getLanguage(lang)) {
        try {
            return hljs.highlight(lang, str).value;
        } catch (__) { }
    }

    return ''; // use external default escaping
}

module.exports = function (eleventyConfig) {

    let markdownIt = require("markdown-it");
    let options = {
        html: true,
        xhtmlOut: true,
        breaks: true,
        linkify: true,
        highlight: highlighter
    };

    // Configure Markdown tooling
    eleventyConfig.setLibrary("md", markdownIt(options));


    // Set up layout aliases
    eleventyConfig.addLayoutAlias('home', 'layouts/home.html');
    eleventyConfig.addLayoutAlias('page', 'layouts/page.html');
    eleventyConfig.addLayoutAlias('redir', 'layouts/redir.html');

    return {
        dir: {
            input: "./root",      // Equivalent to Jekyll's source property
            output: "./_site" // Equivalent to Jekyll's destination property
        }
    };
};