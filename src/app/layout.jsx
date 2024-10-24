import "./globals.css";

export const metadata = {
  title: "Utama Virtual Office",
  description: "Utama Virtual Office",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={"antialiased"}
      >
        {children}
      </body>
    </html>
  );
}
