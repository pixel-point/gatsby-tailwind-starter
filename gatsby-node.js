// TODO: Uncomment once WordPress is set up
// const fs = require('fs');
// const path = require('path');

// const slash = require('slash');

// const SUPPORTED_MENU_TYPES = ['header', 'footer', 'mobile'];

// function filterNonRootItems(menuItemsNodes) {
//   return menuItemsNodes.filter((item) => item.parentId === null);
// }

// async function getMenus(graphql) {
//   const { data } = await graphql(`
//     {
//       header: wpMenu(slug: { eq: "header-menu" }) {
//         menuItems {
//           nodes {
//             label
//             path
//             parentId
//             childItems {
//               nodes {
//                 label
//                 path
//               }
//             }
//           }
//         }
//       }

//       footer: wpMenu(slug: { eq: "footer-menu" }) {
//         menuItems {
//           nodes {
//             label
//             path
//             parentId
//             childItems {
//               nodes {
//                 label
//                 path
//               }
//             }
//           }
//         }
//       }

//       mobile: wpMenu(slug: { eq: "mobile-menu" }) {
//         menuItems {
//           nodes {
//             label
//             path
//             parentId
//             childItems {
//               nodes {
//                 label
//                 path
//               }
//             }
//           }
//         }
//       }
//     }
//   `);

//   const menus = {};

//   SUPPORTED_MENU_TYPES.forEach((type) => {
//     const items = data[`${type}`].menuItems.nodes;
//     menus[`${type}MenuItems`] = filterNonRootItems(items);
//   });

//   return menus;
// }

// async function createPages({ graphql, actions, reporter, menus }) {
//   const { createPage } = actions;

//   const result = await graphql(`
//     {
//       allWpPage {
//         nodes {
//           id
//           uri
//           template {
//             templateName
//           }
//         }
//       }
//     }
//   `);

//   if (result.errors) {
//     throw new Error(result.errors);
//   }

//   const pages = result.data.allWpPage.nodes;

//   pages.forEach(({ id, uri, template: { templateName } }) => {
//     const templateNamePath = templateName.toLowerCase().replace(/\s/g, '-');
//     const templatePath = path.resolve(`./src/templates/${templateNamePath}.jsx`);

//     const context = { id, menus };

//     if (fs.existsSync(templatePath)) {
//       createPage({
//         path: uri,
//         component: slash(templatePath),
//         context,
//       });
//     } else {
//       reporter.error(`Template "${templateName}" was not found`);
//     }
//   });
// }

// exports.createPages = async (args) => {
//   const menus = await getMenus(args.graphql);

//   const params = { ...args, menus };

//   await createPages(params);
// };
