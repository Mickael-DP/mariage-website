import { 
  Fira_Code as FontMono, 
  Inter as FontSans,
  Marcellus,
  Marcellus_SC,
  Playfair_Display
} from "next/font/google";

export const fontSans = FontSans({
  subsets: ["latin"],
  variable: "--font-sans",
});

export const fontMono = FontMono({
  subsets: ["latin"],
  variable: "--font-mono",
});

export const fontMarcellus = Marcellus({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-marcellus",
});

export const fontMarcellusSC = Marcellus_SC({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-marcellus-sc",
});

export const fontPlayfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
});
