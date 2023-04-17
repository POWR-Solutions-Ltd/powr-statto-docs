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
  liteSidebar: [
    'lite/statto-lite-installation'
  ],
  proSidebar: [
    'pro/statto-pro-installation'
  ],
  stickersSidebar: [
    'stickers/overview',
    {
      type: 'category',
      label: 'Installation Guide',
      items: ['stickers/stickers-installation','stickers/setup-canvas-app'],
    },
    {
      type: 'category',
      label: 'User Guide',
      items: ['stickers/home-page','stickers/sticker-album','stickers/sticker-store','stickers/lucky-7s'],
    },
  ],
   
};

module.exports = sidebars;
