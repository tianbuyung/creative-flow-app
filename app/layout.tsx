import { Footer, Navbar } from "@/components";
import "./globals.css";

export const metadata = {
  title: "Creative Flow",
  description:
    "Explore Creative Flow - the premier platform for web designers. Discover, showcase, and collaborate on captivating design projects. Connect with talented designers and find your dream team. Unlock your creativity and hire top-notch developers. Elevate your web design journey with Creative Flow.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
