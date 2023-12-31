import './globals.css'
import { Source_Sans_3 } from 'next/font/google';
import { Header } from '@/components/Header';
const source = Source_Sans_3({
  weight: "400",
  subsets:["cyrillic"]
})

export const metadata = {
  title: 'Natufaz',
  description: 'Generated by create next app',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={source.className}>
        {children}
      </body>
    </html>
  )
}
