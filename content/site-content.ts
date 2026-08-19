export interface AccountData {
  id: number;
  name: string;
  desc: string;
  seller: string;
  rating: string;
  price: string;
  image: string;
}

export interface MarketActivityItem {
  id: number;
  name: string;
  price: string;
  time: string;
  sub?: string;
  status?: string;
  iconClass?: string;
}

export const siteContent = {
  navigation: {
    links: [
      { label: 'Explore', href: '#' },
      { label: 'Top Sellers', href: '#' },
      { label: 'Support', href: '#' },
    ],
    cartCount: 1,
    sellLabel: 'Sell',
  },
  hero: {
    searchPlaceholder: 'Search for games, accounts, boosting services...',
    popularLabel: 'Popular:',
    popularTags: ['Valorant', 'Brawl Stars', 'Clash Royale', 'Roblox', 'Fortnite', 'CS2'],
    tabs: ['Accounts', 'Boosting'],
    categories: [
      { label: 'Currency', image: '/cat-currency.png' },
      { label: 'Items', image: '/cat-items.png' },
      { label: 'Coaching', image: '/cat-coaching.png' },
      { label: 'Gift Cards', image: '/cat-giftcards.png' },
      { label: 'Top Ups', image: '/cat-topups.png' },
    ],
  },
  marketplace: {
    title: 'Live Marketplace',
    accentTitle: 'Activity',
    liveTitle: 'Live Market Activity',
    soldTitle: 'Recently Sold',
    liveActivity: [
      { id: 1, name: 'Fortnite V-Bucks', sub: 'Just now', price: '$25.00', time: 'Just now', iconClass: 'item-icon-fortnite' },
      { id: 2, name: 'Valorant Radiant Account', sub: '2 mins ago', price: '$450.00', time: '2 mins ago', iconClass: 'item-icon-valorant' },
      { id: 3, name: 'LoL Diamond IV Boost', sub: '5 mins ago', price: '$89.00', time: '5 mins ago', iconClass: 'item-icon-lol' },
      { id: 4, name: '10,000 Brawl Gems', sub: '12 mins ago', price: '$120.00', time: '12 mins ago', iconClass: 'item-icon-brawl' },
    ] satisfies MarketActivityItem[],
    recentlySold: [
      { id: 1, name: '10,000 Brawl Gems', price: '$120.00', time: '2 mins ago', status: 'Sold', iconClass: 'item-icon-brawl' },
      { id: 2, name: 'LoL Diamond IV Boost', price: '$89.00', time: '3 mins ago', status: 'Sold', iconClass: 'item-icon-lol' },
      { id: 3, name: 'Valorant Radiant Account', price: '$450.00', time: '4 mins ago', status: 'Sold', iconClass: 'item-icon-valorant' },
      { id: 4, name: 'Fortnite V-Bucks', price: '$25.00', time: '5 mins ago', status: 'Sold', iconClass: 'item-icon-fortnite' },
    ] satisfies MarketActivityItem[],
    flashDeal: { title: 'Flash Deal', discount: '-40%', image: '/boy.jpg', description: 'Unlock Mythic Valorant Skins for ', emphasis: '40% OFF', suffix: '. Limited slots left.', cta: 'Grab Deal' },
  },
  featuredAccounts: [
    { id: 1, name: 'Valorant Account', desc: 'Full Access EU Account', seller: 'AceTrader', rating: '4.9', price: '$1,299', image: '/1.png' },
    { id: 2, name: 'Brawl Stars 50K+ Trophies', desc: 'All Brawlers Unlocked', seller: 'AceTrader', rating: '4.9', price: '$1,299', image: '/2.png' },
    { id: 3, name: 'Fortnite OG Account', desc: 'Renegade Raider + 150 Skins', seller: 'AceTrader', rating: '4.9', price: '$1,299', image: '/3.png' },
    { id: 4, name: 'League of Challenger', desc: 'Level 500+ God Tier Account', seller: 'AceTrader', rating: '4.9', price: '$1,299', image: '/4.jpg' },
    { id: 5, name: 'Immortal Valorant Account', desc: 'Premium Skins + Full Access', seller: 'AceTrader', rating: '4.9', price: '$999', image: '/3.png' },
    { id: 6, name: 'Fortnite Black Knight', desc: 'OG Cosmetics + 120 Skins', seller: 'AceTrader', rating: '4.8', price: '$899', image: '/1.png' },
  ] satisfies AccountData[],
  popularGamingAccounts: [
    { id: 1, name: 'Overwatch 2', image: '/Gemini-Generated-img1.png', featured: true },
    { id: 2, name: 'League of Legends', image: '/Gemini-Generated-img2.png' },
    { id: 3, name: 'Valorant', image: '/Gemini-Generated-img3.png' },
  ],
} as const;
