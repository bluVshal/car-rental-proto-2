import { Mulish } from "next/font/google";
import { PrimeReactProvider } from 'primereact/api';
import "primereact/resources/themes/lara-light-cyan/theme.css"; // Choose your theme
import "primereact/resources/primereact.min.css";
import "primeicons/primeicons.css";

import "./globals.css";

const mulish = Mulish({
  variable: "--font-mulish",
  subsets: ["latin"],
});

export const metadata = {
  title: "Car Rental Prototype",
  description: "Throwaway Prototype for a Car Rental App",
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      className={`${mulish.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        <PrimeReactProvider>
          {children}
        </PrimeReactProvider>
      </body>
    </html>
  );
}
