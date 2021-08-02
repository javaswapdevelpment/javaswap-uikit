import { Colors } from "./types";

export const baseColors = {
  failure: "#ED4B9E",
  primary: "#9B2244",
  primaryBright: "#9B2244",
  primaryDark: "#aa8929",
  secondary: "#7645D9",
  success: "#31D0AA",
  warning: "#FFB237",
};

export const brandColors = {
  binance: "#F0B90B",
};

export const lightColors: Colors = {
  ...baseColors,
  ...brandColors,
  background: "#FAF9FA",
  backgroundDisabled: "#D8CACA",
  contrast: "#191326",
  invertedContrast: "#FFFFFF",
  input: "#FFF0EB",
  tertiary: "#ffffff",
  text: "#816C73",
  textDisabled: "#816C73",
  textSubtle: "#D86D25",
  title: "#9B2244",
  borderColor: "#E9EAEB",
  card: "#FFFFFF",
  gradients: {
    bubblegum: "linear-gradient(139.73deg, #E6FDFF 0%, #F3EFFF 100%)",
    menuBorder: "linear-gradient(#ffe88d 0%, #ffe88d 1.01%, #f5d485 6.85%, #da9e72 24.63%, #c37261 42.02%, #b14f54 58.61%, #a5364b 74.2%, #9d2745 88.42%, #9b2244 100%)",
    buttonGradient: "linear-gradient(to right, #ffe88d 0%, #ffe88d 1.01%, #b75b59 69.72%, #9b2244 100%)",
  },
};

export const darkColors: Colors = {
  ...baseColors,
  ...brandColors,
  secondary: "#9A6AFF",
  background: "#343135",
  backgroundDisabled: "#3c3742",
  contrast: "#FFFFFF",
  invertedContrast: "#191326",
  input: "#483f5a",
  primaryDark: "#0098A1",
  tertiary: "#353547",
  text: "#EAE2FC",
  textDisabled: "#666171",
  textSubtle: "#c9c4d4",
  title: "#FFFFFF",
  borderColor: "#524B63",
  card: "#27262c",
  gradients: {
    bubblegum: "linear-gradient(139.73deg, #313D5C 0%, #3D2A54 100%)",
    menuBorder: "linear-gradient(#ffe88d 0%, #ffe88d 1.01%, #f5d485 6.85%, #da9e72 24.63%, #c37261 42.02%, #b14f54 58.61%, #a5364b 74.2%, #9d2745 88.42%, #9b2244 100%)",
    buttonGradient: "linear-gradient(to right, #ffe88d 0%, #ffe88d 1.01%, #b75b59 69.72%, #9b2244 100%)",
  },
};
