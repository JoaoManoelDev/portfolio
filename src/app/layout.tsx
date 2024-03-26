import type { Metadata } from "next"
import { Inter } from "next/font/google"

import "@/styles/globals.css"

const inter = Inter({ subsets: ["latin"] })

import { ThemeProvider } from "@/providers/theme-provider"

import { Message } from "@/components/message"

export const metadata: Metadata = {
  title: "João Manoel",
  description: "Portfolio de João Manoel",
}

const RootLayout = ({
  children,
}: Readonly<{
  children: React.ReactNode
}>) => {
  return (
    <html lang="pt-br" suppressHydrationWarning>
      <body className={inter.className}>
        <Message />
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  )
}

export default RootLayout