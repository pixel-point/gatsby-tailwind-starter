const fs = require('fs');
const path = require('path');

const slash = require('slash');

async function createPages({ graphql, actions, reporter }) {
  const { createPage } = actions;

  const result = await graphql(`
    {
      allWpPage {
        nodes {
          id
          uri
          template {
            templateName
          }
        }
      }
    }
  `);

  if (result.errors) {
    throw new Error(result.errors);
  }

  const pages = result.data.allWpPage.nodes;

  pages.forEach(({ id, uri, template: { templateName } }) => {
    const templateNamePath = templateName.toLowerCase().replace(/\s/g, '-');
    const templatePath = path.resolve(`./src/templates/${templateNamePath}.jsx`);

    const context = { id };

    if (fs.existsSync(templatePath)) {
      createPage({
        path: uri,
        component: slash(templatePath),
        context,
      });
    } else {
      reporter.error(`Template "${templateName}" was not found`);
    }
  });
}

exports.createPages = async (args) => {
  await createPages(args);
};
