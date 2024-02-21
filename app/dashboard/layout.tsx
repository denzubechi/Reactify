import  { Metadata } from 'next'



export const metadata: Metadata = {
  title: 'Dashboard',
  description: "Sell to anyone around the world",
  icons: {
    icon: '/favicon.ico',
  },
}
export default function DashboardLayout({

    children, // will be a page or nested layout
  }: {
    children: React.ReactNode
  }) {
    return (
      <section>
        {children}
      </section>
    )
  }