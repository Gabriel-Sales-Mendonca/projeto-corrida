import "./globals.css";
import Header from "../components/header"
import Menu from "../components/menu"

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`antialiased`} >
        <div className="h-screen">
          <Header />
          <div className="mt-16">
            <Menu />
            <div className=" p-4">
              {children}
            </div>
          </div>
        </div>
      </body>
    </html>
  );
}
