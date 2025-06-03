import { getBlogPermalink, getAsset, getHomePermalink } from './utils/permalinks';

export const headerData = {
  links: [
    {
      text: 'Inicio',
      href: getHomePermalink(),
    },
    {
      text: 'Blog',
      links: [
        {
          text: 'Blog List',
          href: getBlogPermalink(),
        },
      ],
    },
    {
      text: 'Tienda',
      href: 'https://www.latostadora.com/shop/quicothesiamese/',
    },
  ],
  actions: [
    {
      text: 'Hagamos realidad tu idea',
      href: 'mailto:guitarranalon@gmail.com',
    },
  ],
};

export const footerData = {
  links: [],
  secondaryLinks: [],
  socialLinks: [
    { ariaLabel: 'RSS', icon: 'tabler:rss', href: getAsset('/rss.xml') },
    { ariaLabel: 'Github', icon: 'tabler:brand-github', href: 'https://github.com/guitarranalon' },
  ],
  footNote: ``,
};
