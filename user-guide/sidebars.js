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
      link: {
        type: 'generated-index',
      },
      items: ['stickers/stickers-installation','stickers/setup-canvas-app','stickers/2023-04-17-getting-started'],
    },
    {
      type: 'category',
      label: 'How to?',
      link: {
        type: 'generated-index',
      },
      collapsed: false,
      items: ['stickers/how-to/2023-04-18-buy-sticker-packs','stickers/how-to/2023-04-18-open-sticker-pack','stickers/how-to/2023-04-18-drag-and-drop-stickers-in-the-album','stickers/how-to/2023-04-18-how-to-play-lucky-7s','stickers/how-to/2023-04-18-how-to-play-clippy-poker'],
    },
    /*
    {
      type: 'category',
      label: 'Stickers Canvas App',
      link: {
        type: 'generated-index',
      },
      items: ['stickers/home-page','stickers/sticker-album','stickers/sticker-store','stickers/lucky-7s'],
    },
    
    {
      type: 'category',
      label: 'Technical Guide',
      link: {
        type: 'generated-index',
      },
      items: [
        'stickers/technical/2023-04-18-dataverse',
        {
          type: 'category',
          label: 'Custom Connectors',
          link: {
            type: 'generated-index',
          },
          items: ['stickers/technical/2023-04-18-fantasy-premier-league-connector','stickers/technical/2023-04-18-api-sports.io-connector',
          
          ],
        },
        {
          type: 'category',
          label: 'Power Automate Flows',
          link: {
            type: 'generated-index',
          },
          items: ['stickers/technical/2023-04-18-power-automate-flows','stickers/technical/2023-04-18-daily-flow','stickers/technical/2023-04-18-weekly-flow','stickers/technical/2023-04-18-import-player-images','stickers/technical/2023-04-18-import-team-images',
          
          ],
        },
      ],
    },*/
  ],
   
};

module.exports = sidebars;
