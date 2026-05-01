import { JetBrains_Mono } from "next/font/google";
import "./globals.css";
import  Header  from "@/components/Header";
import PageTransition from "@/components/PageTransition";
import StairTransition from "@/components/StairTransition";
import StarBackground from "@/components/StarsBackground";
import { LanguageProvider } from "@/context/LanguageContext";

const jetbrainsMono = JetBrains_Mono({ subsets: ["latin"], weight:["100","200","300","400","500","600","700","800"],
  variable:'--font-jetbrainsMono'
});

export const metadata = {
  title: "ismail bouaichi - portfolio",
  description: " Welcome to my portfolio website! I'm Ismail Bouaichi, a passionate web developer specializing in creating dynamic and responsive web applications. Explore my projects, skills, and experience as you navigate through my portfolio.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={jetbrainsMono.className}>
        <LanguageProvider>
          <Header />
          <StairTransition/>
          <PageTransition>
            <StarBackground />
            {children}
          </PageTransition>
        </LanguageProvider>
        </body>
    </html>
  );
}
