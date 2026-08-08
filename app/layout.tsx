import type { Metadata, Viewport } from 'next'
import '@fontsource/encode-sans/300.css'
import '@fontsource/encode-sans/400.css'
import '@fontsource/encode-sans/500.css'
import '@fontsource/encode-sans/600.css'
import '@fontsource/encode-sans/700.css'
import '@fontsource/encode-sans/800.css'
import { Analytics } from '@vercel/analytics/next'
import { ThemeProvider } from '@/components/theme-provider'
import './globals.css'

export const metadata: Metadata = {
  title: 'Flutter & Backend Developer | Full-Stack Portfolio',
  description: 'Premium portfolio showcasing expertise in Flutter, FastAPI, backend systems, and modern app development. Award-winning developer portfolio.',
  keywords: ['Flutter', 'Backend Developer', 'Full-Stack', 'FastAPI', 'Mobile Development'],
  generator: 'v0.app',
  openGraph: {
    title: 'Flutter & Backend Developer | Full-Stack Portfolio',
    description: 'Scalable mobile apps and modern backend systems',
    type: 'website',
  },
  icons: {
    icon: '/pm-icon.svg',
    apple: '/pm-icon.svg',
  },
}

export const viewport: Viewport = {
  themeColor: '#0B1020',
  colorScheme: 'dark',
  width: 'device-width',
  initialScale: 1,
  userScalable: true,
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className="scroll-smooth" suppressHydrationWarning>
      <body className="font-sans font-medium antialiased bg-background text-foreground">
        <ThemeProvider attribute="class" defaultTheme="dark" enableSystem={false}>
          {children}
        </ThemeProvider>
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}
