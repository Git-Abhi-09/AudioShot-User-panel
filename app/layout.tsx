import Footer from "../components/layout/Footer";
import Header from "../components/layout/Header";
import "./globals.css";


export const metadata = {
  title: "Audioshots",
  description: "Generated by Weoto",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body       
      >
        <Header/>
        {children}
        <Footer/>
      </body>
    </html>
  );
}
