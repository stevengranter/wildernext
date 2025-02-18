import type { Metadata } from 'next'
import { Geist, Geist_Mono } from 'next/font/google'
import './globals.css'

const geistSans = Geist({
    variable: '--font-geist-sans',
    subsets: ['latin'],
})

const geistMono = Geist_Mono({
    variable: '--font-geist-mono',
    subsets: ['latin'],
})

export const metadata: Metadata = {
    title: {
        template: '%s | WilderNest',
        default: 'WilderNest',
    },
}

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode
}>) {
    return (
        <html lang="en" className="bg-[url('/images/forest-bg-01.png')] bg-top">
            <body
                className={`${geistSans.variable} ${geistMono.variable} antialiased flex justify-center`}
            >
                {children}
            </body>
        </html>
    )
}
