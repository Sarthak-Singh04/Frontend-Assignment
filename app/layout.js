import { Container } from 'postcss'
import './globals.css'
import { Inter } from 'next/font/google'
import Wrapper from '@/components/Wrapper'
import Navbar from '@/components/Navbar'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Speedy Brand App',
  description: 'Generated by create next app',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
      <Wrapper>
      <Navbar/>
      {children}

      </Wrapper>
      


      

      </body>
    </html>
  )
}
