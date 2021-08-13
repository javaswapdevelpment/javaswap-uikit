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
    items: [
      {
        label: "Trade",
        icon: "TradeIcon",
        href: "https://exchange.javaswap.io",
      },
      {
        label: "Bridge",
        href: "https://exchange.javaswap.io/#bridge",
        icon: "BridgeIcon"
      }
    ]
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
    label: "Audits",
    icon: "AuditIcon",
    href: "/audits",
  },
  {
    label: "More",
    icon: "MoreIcon",
    items: [
      {
        label: "Github",
        href: "https://github.com/javaswapdevelpment/",
      },
      {
        label: "Docs",
        href: "https://javaswap-development.gitbook.io/javaswap/",
      },
      {
        label: "Blog",
        href: "https://medium.com/@javaswapmarketing",
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
        href: "https://t.me/JavaSwap_Official",
      },
    ],
  },
  {
    label: "Twitter",
    icon: "TwitterIcon",
    href: "https://twitter.com/Javaswap_",
  },
  {
    label: "Medium",
    icon: "MediumIcon",
    href: "https://medium.com/@javaswapmarketing",
  },
];

export const MENU_HEIGHT = 64;
export const MENU_ENTRY_HEIGHT = 48;
export const SIDEBAR_WIDTH_FULL = 240;
export const SIDEBAR_WIDTH_REDUCED = 56;
