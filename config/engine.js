const { Marp } = require('@marp-team/marp-core');
const markdownItContainer = require('markdown-it-container');
const markdownItAttrs = require('markdown-it-attrs');
const markdownItMark = require('markdown-it-mark');
const markdownItPrism = require('markdown-it-prism');

module.exports = (opts) => {
  const marp = new Marp(opts);

  // Enable HTML tags
  marp.markdown.enable('html');

  // Add markdown-it plugins
  marp.markdown
    .use(markdownItAttrs)
    .use(markdownItMark)
    .use(markdownItPrism)
    .use(markdownItContainer, 'note', {
      validate: (params) => params.trim().match(/^note\s*$/),
      render: (tokens, idx) => {
        if (tokens[idx].nesting === 1) {
          return '<div class="note">\n';
        } else {
          return '</div>\n';
        }
      }
    })
    .use(markdownItContainer, 'alert', {
      validate: (params) => params.trim().match(/^alert\s+(.*)$/),
      render: (tokens, idx) => {
        const m = tokens[idx].info.trim().match(/^alert\s+(.*)$/);
        if (tokens[idx].nesting === 1) {
          const type = m ? m[1] : 'info';
          return `<div class="alert alert-${type}">\n`;
        } else {
          return '</div>\n';
        }
      }
    })
    .use(markdownItContainer, 'columns', {
      validate: (params) => params.trim().match(/^columns\s*$/),
      render: (tokens, idx) => {
        if (tokens[idx].nesting === 1) {
          return '<div class="columns">\n';
        } else {
          return '</div>\n';
        }
      }
    })
    .use(markdownItContainer, 'column', {
      validate: (params) => params.trim().match(/^column\s*$/),
      render: (tokens, idx) => {
        if (tokens[idx].nesting === 1) {
          return '<div class="column">\n';
        } else {
          return '</div>\n';
        }
      }
    });

  return marp;
};