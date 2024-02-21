import './globals.css'
import type { Metadata } from 'next'
import { ReduxProvider } from '@/redux/provider'
import { ChakraProvider } from '@chakra-ui/react'

export const metadata: Metadata = {
  title: 'Reactify • No 1 Solution for students, creators andentrepreneurs',
  description: "Sell digital products to anyone, anywhere around the world",
  icons: {
    icon: '/favicon.ico',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>
      <link rel="icon" href="/favicon.ico" sizes="any" />
      <ReduxProvider>
 
                  <ChakraProvider>
                      {children}
                  </ChakraProvider>
              
          </ReduxProvider>
      </body>
    </html>
  )
}
