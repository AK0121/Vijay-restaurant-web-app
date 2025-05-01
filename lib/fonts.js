import { Carter_One, Castoro_Titling, Roboto } from "next/font/google";

export const carterOne = Carter_One({
  subsets: ["latin"],
  weight: "400",
  display: "swap",
});

export const castoroTitling = Castoro_Titling({
  subsets: ["latin"],
  weight: "400",
  display: "swap"
})

export const roboto = Roboto({
  subsets: ["latin"],
  weight: ["400", "600", "900"]
})