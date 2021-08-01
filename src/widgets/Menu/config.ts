import { LinkStatus } from "./types";

export const status = {
  LIVE: <LinkStatus>{
    text: "LIVE",
    color: "failure",
  },
  SOON: <LinkStatus>{
    text: "Cooming soon",
    color: "warning",
  },
  NEW: <LinkStatus>{
    text: "NEW",
    color: "success",
  },
};

export const links = [
  {
    label: "Home",
    icon: "HomeIcon",
    href: "/",
  },
  {
    label: "Presale",
    icon: "PresaleIcon",
    href: "https://presale.javaswap.io/",
  },
  {
    label: "Swap",
    icon: "TradeIcon",
    href: "https://exchange.javaswap.io",
  },
  {
    label: "Farms",
    icon: "FarmIcon",
    href: "/farms",
  },
  {
    label: "Pools",
    icon: "PoolIcon",
    href: "/syrup",
  },
  {
    label: "Games",
    icon: "GameIcon",
    items: [
      {
        label: "JavaBid",
        href: "/javabid",
        icon: "JavaBidIcon"
      },
      {
        label: "Lucky Lotto",
        href: "/lottery",
        icon: "TicketIcon"
      },
      {
        label: "Flip Coin",
        href: "/flip",
        icon: "FlipCoinIcon"
      },
    ],
  },
  {
    label: "Referrals",
    icon: "ReferralIcon",
    href: "/referral",
    
  },
  {
    label: "NFT",
    icon: "NftIcon",
    href: "/nft",
    status: status.SOON,
  },
  {
    label: "IFO",
    icon: "IfoIcon",
    href: "/ifo",
    status: status.SOON,
  },
  {
    label: "Analytics",
    icon: "AnalyticIcon",
    href: "/analytic",
  },
  {
    label: "More",
    icon: "MoreIcon",
    items: [
      {
        label: "Github",
        href: "https://github.com/goosedefi/",
      },
      {
        label: "Docs",
        href: "https://goosedefi.gitbook.io/goose-finance/",
      },
      {
        label: "Blog",
        href: "https://goosefinance.medium.com/",
      },
    ],
  },
];

export const socials = [
  {
    label: "Telegram",
    icon: "TelegramIcon",
    items: [
      {
        label: "English",
        href: "https://t.me/goosedefi",
      },
      // {
      //   label: "Bahasa Indonesia",
      //   href: "https://t.me/PancakeSwapIndonesia",
      // },
      {
        label: "中文",
        href: "https://t.me/goosefinancechinese",
      },
      // {
      //   label: "Tiếng Việt",
      //   href: "https://t.me/PancakeSwapVN",
      // },
      {
        label: "Italiano",
        href: "https://t.me/goosefinanceitalian",
      },
      {
        label: "русский",
        href: "https://t.me/goosefinancerussian",
      },
      {
        label: "Türkiye",
        href: "https://t.me/GooseFinanceTurkey",
      },
      // {
      //   label: "Português",
      //   href: "https://t.me/PancakeSwapPortuguese",
      // },
      {
        label: "Español",
        href: "https://t.me/goosefinancespanish",
      },
      {
        label: "日本語",
        href: "https://t.me/goosefinancejapanese",
      },
      {
        label: "Français",
        href: "https://t.me/goosefinancefrench",
      },
      {
        label: "Announcements",
        href: "https://t.me/goosefinanceann",
      },
      {
        label: "Price Bot",
        href: "https://t.me/BinanceRocketEGG",
      },
    ],
  },
  {
    label: "Twitter",
    icon: "TwitterIcon",
    href: "https://twitter.com/goosedefi",
  },
  {
    label: "Medium",
    icon: "MediumIcon",
    href: "https://www.reddit.com/r/GooseFinanceofficial",
  },
];

export const MENU_HEIGHT = 64;
export const MENU_ENTRY_HEIGHT = 48;
export const SIDEBAR_WIDTH_FULL = 240;
export const SIDEBAR_WIDTH_REDUCED = 56;
