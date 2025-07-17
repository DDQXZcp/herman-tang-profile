// components/PageLayout.tsx
import { GlobalStyle } from "../styles/global";
import { Header } from "./Header/Header";
import { Footer } from "./Footer/Footer";
import { ReactNode } from "react";
import { Analytics } from "@vercel/analytics/react";

export function PageLayout({ children }: { children: ReactNode }) {
  return (
    <>
      <GlobalStyle />
      <Header />
      {children}
      <Analytics />
      <Footer />
    </>
  );
}