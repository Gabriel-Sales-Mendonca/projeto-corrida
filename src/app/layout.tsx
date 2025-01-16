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
          <div className="flex overflow-hidden mt-16">
            <Menu />
            <div className="overflow-y-auto p-4">
              {children}
            </div>
          </div>
        </div>
      </body>
    </html>
  );
}
