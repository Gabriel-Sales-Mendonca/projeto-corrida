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
        <div className="flex flex-col h-screen">

          <Header />
          <div className="flex overflow-hidden">
            <Menu />
            {children}
          </div>
        </div>
      </body>
    </html>
  );
}
