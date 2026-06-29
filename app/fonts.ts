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
