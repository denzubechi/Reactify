import  { Metadata } from 'next'
import Footer from '../components/footer/Footer'
import Header from '../components/header/header'


export const metadata: Metadata = {
  title: 'Reartify • Buy digital products',
  description: "explore digital producs from creators across the globe",
  icons: {
    icon: '/favicon.ico',
  },
}
export default function ProductLayout({

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