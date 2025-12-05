export const metadata = {
  title: "VeXa — Preview UI",
  description: "VeXa — AI social chat & matchmaking. Preview UI. Launching soon on vexachat.world."
};

import "./globals.css";

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
