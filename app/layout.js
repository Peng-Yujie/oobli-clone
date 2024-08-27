import "@/app/_styles/globals.css";
import PrelineScript from "./_components/PrelineScript";
import Announcement from "./_components/Announcement";
import Header from "./_components/Header";
import Footer from "./_components/Footer";

export const metadata = {
  title: "Oobli Clone",
  description: "A clone of the Oobli store using Next.js",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Announcement />
        <Header />
        {children}
        <Footer />
      </body>
      <PrelineScript />
    </html>
  );
}
