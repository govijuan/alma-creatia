import localFont from "next/font/local";

// Configuration for The Seasons
export const theSeasons = localFont({
  src: "./fonts/TheSeasons-Regular.woff2", // Adjust filename if different
  variable: "--font-the-seasons",
  display: "swap",
});

// Configuration for Hello Paris Serif
export const helloParisSerif = localFont({
  src: "./fonts/HelloParisSerif-Regular.woff2", // Adjust filename if different
  variable: "--font-hello-paris",
  display: "swap",
});

// Configuration for Fibonacci Icons (symbol font)
export const fibonacciIcons = localFont({
  src: "./fonts/Fibonacci-icons-font.ttf",
  variable: "--font-fibonacci-icons",
  display: "swap",
});
