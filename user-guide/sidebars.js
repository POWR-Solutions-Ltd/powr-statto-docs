/**
 * Creating a sidebar enables you to:
 - create an ordered group of docs
 - render a sidebar for each doc of that group
 - provide next/previous navigation

 The sidebars can be generated from the filesystem, or explicitly defined here.

 Create as many sidebars as you want.
 */

// @ts-check

/** @type {import('@docusaurus/plugin-content-docs').SidebarsConfig} */
const sidebars = {
  // By default, Docusaurus generates a sidebar from the docs folder structure
  // stickersSidebar: [{type: 'autogenerated', dirName: 'stickers'}],
  liteSidebar: [{type: 'autogenerated', dirName: 'lite'}],
  proSidebar: [{type: 'autogenerated', dirName: 'pro'}],
  // But you can create a sidebar manually
  
  stickersSidebar: [
    'stickers/2023-04-08-overview',
    {
      type: 'category',
      label: 'Installation Guide',
      items: ['stickers/2023-04-08-stickers-installation','stickers/2023-04-08-setup-canvas-app'],
    },
    {
      type: 'category',
      label: 'User Guide',
      items: ['stickers/2023-04-08-home-page','stickers/2023-04-08-sticker-album','stickers/2023-04-08-sticker-store','stickers/2023-04-08-lucky-7s'],
    },
  ],
   
};

module.exports = sidebars;
