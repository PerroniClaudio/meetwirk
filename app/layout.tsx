import Footer from "@/components/Footer";
import "./globals.css";
import { Inter } from "next/font/google";
import ContactForm from "@/components/ContactForm";
import { NavigationButton } from "@/components/NavigationButton";
import { Nav } from "@/components/Nav";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Meetwirk",
  description:
    "Un nuovo modo di lavorare che necessita di un’ottima connettività e strumenti hardware dedicati agli utenti e ai workplace.",
};

export default function RootLayout(props: {
  children: React.ReactNode;
  landing: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${inter.className} antialiased overflow-x-hidden`}>
        {/* <div className="absolute top-2 left-2 md:hidden">
          <NavigationButton />
        </div> */}
        <Nav />
        {props.children}
        {props.landing}
        <ContactForm />
        <Footer />
      </body>
    </html>
  );
}
