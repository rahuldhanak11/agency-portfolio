import { Poppins } from "next/font/google";
import "./globals.css";

// Import Poppins from Google Fonts
const poppins = Poppins({
  weight: ["400", "600", "700"], // Adjust the weights as needed
  variable: "--font-poppins",
  subsets: ["latin"],
});

export const metadata = {
  title: "RADIKLE",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${poppins.variable} antialiased`}>
        {children}
      </body>
    </html>
  );
}
