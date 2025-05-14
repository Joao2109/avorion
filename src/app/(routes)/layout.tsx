import "../globals.css";
import { ThemeProvider } from "../theme-provider";
import { ThemeToggler } from "../theme-toggler";
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <ThemeProvider
        attribute="class"
        defaultTheme="system"
        enableSystem
        disableTransitionOnChange
      >
        <body>{children}</body>
        <ThemeToggler />
      </ThemeProvider>
    </html>
  );
}
