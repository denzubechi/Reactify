import  { Metadata } from 'next'
import Footer from '../components/footer/Footer'
import Header from '../components/header/header'


export const metadata: Metadata = {
  title: 'Reartify • Pricing',
  description: "explore different pricing thatsuits your needs",
  icons: {
    icon: '/favicon.ico',
  },
}
export default function PricingLayout({

    children, // will be a page or nested layout
  }: {
    children: React.ReactNode
  }) {
    return (
      <section>
        <Header/>
        {children}
        <Footer/>
      </section>
    )
  }